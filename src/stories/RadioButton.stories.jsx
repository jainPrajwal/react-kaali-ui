import { RadioButton } from "../components";
import React from "react";

export default {
  title: `Radio Buttons`,
  component: RadioButton,
  argTypes: {
    color: {
      options: [`Red`, `Blue`, `Green`, `Black`, `White`],
      control: { type: `radio` },
    },
  },
};

const Template = (args) => <RadioButton {...args} />;

export const RedRadio = Template.bind({});
export const BlackRadio = Template.bind({});
export const BlueRadio = Template.bind({});
export const GreenRadio = Template.bind({});
export const WhiteRadio = Template.bind({});

GreenRadio.args = {
  color: `Green`,
  name: `itemColor`,
};
WhiteRadio.args = {
  color: `White`,
  name: `itemColor`,
};
BlueRadio.args = {
  color: `Blue`,
  name: `itemColor`,
};

BlackRadio.args = {
  color: `Black`,
  name: `itemColor`,
};
RedRadio.args = {
  color: `Red`,
  name: `itemColor`,
};
