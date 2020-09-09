import { addParameters } from '@storybook/client-api';


addParameters({
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    prepareForInline: (storyFn) => storyFn(),
  },
  controls: { expanded: true }
});
