import { addParameters } from '@storybook/react';


addParameters({
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    prepareForInline: (storyFn) => storyFn(),
  },
  inline: true,
  controls: { expanded: true }
});
