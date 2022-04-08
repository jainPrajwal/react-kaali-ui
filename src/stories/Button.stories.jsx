import React from 'react';
import {Button} from "../components/Button/Button"


export default {
  title: "Button",
  component: Button
}

const Template = (args) => <Button {...args} />

export const PrimaryButton = Template.bind({});
export const SecondaryButton = Template.bind({});
export const SuccessButton = Template.bind({});
export const WarningButton = Template.bind({});
export const DangerButton = Template.bind({});

PrimaryButton.args = {
  type: "primary"
}

SecondaryButton.args = {
  type: "secondary"
}

SuccessButton.args = {
  type: "success"
}

WarningButton.args = {
  type: "warning"
}

DangerButton.args = {
  type: "danger"
}
