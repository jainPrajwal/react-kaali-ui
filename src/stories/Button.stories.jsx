import React from "react";
import { Button } from "../components";

import "./styles.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClickHandler: { action: "clicked" },
    variant: {
      options: [
        `primary`,
        `secondary`,
        `danger`,
        `warning`,
        `primary-outline`,
        `success-outline`,
        `warning-outline`,
        `danger-outline`,
      ],
      control: { type: `radio` },
    },
  },
};

const Template = (args) => <Button {...args}> {args.variant}</Button>;

export const PrimaryButton = Template.bind({});
export const SecondaryButton = Template.bind({});
export const SuccessButton = Template.bind({});
export const WarningButton = Template.bind({});
export const DangerButton = Template.bind({});
export const PrimaryOutlineButton = Template.bind({});
export const DangerOutlineButton = Template.bind({});
export const SuccessOutlineButton = Template.bind({});
export const WarningOutlineButton = Template.bind({});

PrimaryButton.args = {
  style: { width: `400px` },
  isDisabled: false,
  variant: "primary",
};

SecondaryButton.args = {
  style: {},
  isDisabled: false,
  variant: "secondary",
};

SuccessButton.args = {
  style: {},
  isDisabled: false,
  variant: "success",
};

WarningButton.args = {
  style: {},
  isDisabled: false,
  variant: "warning",
};

DangerButton.args = {
  style: {},
  isDisabled: false,
  variant: "danger",
};

DangerOutlineButton.args = {
  style: {},
  isDisabled: false,
  variant: "danger-outline",
};

PrimaryOutlineButton.args = {
  style: {},
  isDisabled: false,
  variant: `primary-outline`,
};

SuccessOutlineButton.args = {
  style: {},
  isDisabled: false,
  variant: `success-outline`,
};

WarningOutlineButton.args = {
  style: {},
  isDisabled: false,
  variant: `warning-outline`,
};
