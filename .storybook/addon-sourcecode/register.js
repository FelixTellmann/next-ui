// .storybook/my-addon/register.js

import { raw } from "@storybook/react";
import React from "react";
import addons, { types } from "@storybook/addons";
import { StoryPanel } from "./StoryPanel";

const ADDON_ID = "addon-sourcecode";
const PANEL_ID = `${ADDON_ID}/panel`;
const PANEL_ID2 = `${ADDON_ID}/panel2`;

let currentId
// give a unique name for the panel
import { useParameter } from "@storybook/api";

const PARAM_KEY = "myAddon";

const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value.data : "";
  return <div>{item}</div>;
};

addons.register(ADDON_ID, (api) => {
  const channel = addons.getChannel();
  let sources;
  function fetchSources() {
    fetch('./rawSources.json')
        .then(response => response.json())
        .then(data => {
          if (!sources || currentId !== data.id) {
            currentId = data.id
            sources = data.files
          }
        })

  }
  fetchSources();
  /*setInterval(fetchSources, 1000)*/
  addons.addPanel(PANEL_ID2, {
    title: "Source Code",
    render: ({ active, key }) => (active ? <StoryPanel sources={sources} channel={addons.getChannel()} key={key} api={api} /> : null),
  });
  addons.addPanel(PANEL_ID, {
    title: "Story Source Code",
    render: ({ active, key }) => (active ? <StoryPanel getStory sources={sources} channel={addons.getChannel()} key={key} api={api} /> : null),
  });
});