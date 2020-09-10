import { addParameters } from '@storybook/react';

import { addDecorator } from '@storybook/react'; // <- or your view layer
import { withTests } from './withTests';

import results from '../.jest-test-results.json';

addDecorator(
    withTests({
      results,
    }),
);

addParameters({
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  previewTabs: { 'storybook/docs/panel': { index: -1 } },

});

