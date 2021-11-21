import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { App } from "./App";

export default {
  title: "Example/App",
  component: App,
} as ComponentMeta<typeof App>;

export const AppPage: ComponentStory<typeof App> = (args) => <App {...args} />;
