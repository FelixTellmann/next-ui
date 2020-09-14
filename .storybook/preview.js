import { addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react'; // <- or your view layer
import withTester from './addon-sourcecode/register';
import '../styles/theme.scss';
import './Inter.scss';



import { withTests } from './withTests';

import results from '../.jest-test-results.json';

addDecorator(
    withTests({
      results,
    }),
);
addDecorator(
    withTester({})
);




addParameters({
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
});

