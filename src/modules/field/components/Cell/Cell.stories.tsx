import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Cell } from "./index";

export default {
  title: "Example/Cell",
  component: Cell,
} as ComponentMeta<typeof Cell>;

export const CellComponent: ComponentStory<typeof Cell> = (args) => (
  <Cell {...args} />
);
