import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";
import {
  Button,
  ButtonProps,
  ButtonTypes,
} from "../components/shared/Button/Button";

export default {
  title: "SharedComponents/Button",
  component: Button,
} as Meta;

const ButtonTemplate: Story<ButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  children: "Primary",
  onClick: () => {},
  type: ButtonTypes.PRIMARY,
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  children: "Secondary",
  onClick: () => {},
  type: ButtonTypes.SECONDARY,
};
