import addons, { Parameters } from "@storybook/addons";
import { normalize, sep } from "upath";
import { ADD_TESTS } from "@storybook/addon-jest/dist/shared";

interface AddonParameters extends Parameters {
  jest?: string | string[] | { disable: true };
}

const findTestResults = (
    testFiles: string[],
    jestTestResults: { testResults: { name: string }[] },
    jestTestFilesExt: string
) =>
    Object.values(testFiles).map((name) => {
      const fileName = `${sep}${name}${jestTestFilesExt}`;
      
      if (jestTestResults && jestTestResults.testResults) {
        const fileNamePattern = new RegExp(fileName);
        
        return {
          fileName,
          name,
          result: jestTestResults.testResults.find((test) =>
              Boolean(normalize(test.name).match(fileNamePattern))
          )
        };
      }
      
      return { fileName, name };
    });

interface EmitAddTestsArg {
  kind: string;
  story: () => void;
  testFiles: string[];
  options: {
    results: { testResults: { name: string }[] };
    filesExt: string;
  };
}

const emitAddTests = ({ kind, story, testFiles, options }: EmitAddTestsArg) => {
  addons.getChannel().emit(ADD_TESTS, {
    kind,
    storyName: story,
    tests: findTestResults(testFiles, options.results, options.filesExt)
  });
};

export const withTests = (userOptions: { results: any; filesExt?: string }) => {
  const defaultOptions = {
    filesExt: "((\\.specs?)|(\\.tests?))?(\\.[jt]sx?)?$"
  };
  const options = { ...defaultOptions, ...userOptions };
  
  return (...args: any[]) => {
    const [storyFn, { kind, parameters = {} }] = args;
    let { jest: testFiles, fileName } = parameters;
    
    if (!testFiles) {
      let name = fileName.split(/(\\|\/)/g);
      testFiles = name[name.length - 1].replace(/\.stories\.(tsx|jsx|js|ts|mdx)$/, ".test.ts");
    }
    if (typeof testFiles === "string") {
      testFiles = [testFiles];
    }
    
    if (testFiles && Array.isArray(testFiles)) {
      emitAddTests({ kind, story: storyFn, testFiles, options });
    }
    console.log(kind, options)
    return storyFn();
  };
};

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}