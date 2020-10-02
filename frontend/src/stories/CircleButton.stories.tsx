import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";
import {
  CircleButton,
  CircleButtonProps,
} from "../components/shared/CircleButton/CircleButton";
import { ButtonTypes } from "../components/shared/Button/Button";
import { FaHome, FaPlus } from "react-icons/fa";

export default {
  title: "SharedComponents/CircleButton",
  component: CircleButton,
} as Meta;

const CircleTemplate: Story<CircleButtonProps> = ({ children, ...args }) => (
  <CircleButton {...args}>{children}</CircleButton>
);

export const Primary = CircleTemplate.bind({});
Primary.args = {
  children: <FaPlus />,
  onClick: () => {},
  type: ButtonTypes.PRIMARY,
};

export const Secondary = CircleTemplate.bind({});
Secondary.args = {
  children: <FaHome />,
  onClick: () => {},
  type: ButtonTypes.SECONDARY,
};

export const PrimaryWithText = CircleTemplate.bind({});
PrimaryWithText.args = {
  children: "Click me",
  onClick: () => {},
  type: ButtonTypes.PRIMARY,
};
