import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Field } from "./index";

export default {
  title: "Example/Field",
  component: Field,
} as ComponentMeta<typeof Field>;

export const FieldComponent: ComponentStory<typeof Field> = (args) => (
  <Field {...args} />
);
