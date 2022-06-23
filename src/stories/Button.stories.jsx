import React from "react";
import { Button } from "../components";
// import {Button} from "../components/Button/Button";

import "./styles.css";

export default {
  title: "Button",
  component: Button,
  argTypes: { onClickHandler: { action: "clicked" } },
};

const Template = (args) => <Button {...args}> Primary</Button>;

export const PrimaryButton = Template.bind({});
export const SecondaryButton = Template.bind({});
export const SuccessButton = Template.bind({});
export const WarningButton = Template.bind({});
export const DangerButton = Template.bind({});

PrimaryButton.args = {
  cssButton: {},
  isDisabled: false,
  type: "primary",
};

SecondaryButton.args = {
  cssButton: {},
  isDisabled: false,
  type: "secondary",
};

SuccessButton.args = {
  cssButton: {},
  isDisabled: false,
  type: "success",
};

WarningButton.args = {
  cssButton: {},
  isDisabled: false,
  type: "warning",
};

DangerButton.args = {
  cssButton: {},
  type: "danger",
};
