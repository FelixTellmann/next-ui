module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.storybook/', '/out/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': "babel-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
    '^.+\\.css$': '<rootDir>/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
};