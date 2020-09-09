// .storybook/my-addon/register.js

import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { StoryPanel } from './StoryPanel';

const ADDON_ID = 'addon-sourcefiles';
const PANEL_ID = `${ADDON_ID}/panel`;

// give a unique name for the panel
import { useParameter } from '@storybook/api';
const PARAM_KEY = 'myAddon';

const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value.data : '';
  return <div>{item}</div>;
};

addons.register(ADDON_ID, (api) => {
  addons.addPanel(PANEL_ID, {
    title: 'Source Files',
    render: ({ active, key }) => (active ? <StoryPanel key={key} api={api} /> : null),
    paramKey: 'storysource',
  });
});