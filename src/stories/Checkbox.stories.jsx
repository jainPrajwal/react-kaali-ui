import React from "react";
import { useState } from "react";
import { Checkbox } from "../components/Checkbox";

import "./styles.css";

export default {
  title: `Checkbox`,
  component: Checkbox,
  argTypes: { onChange: { action: 'clicked' } },
};

const Template = (args) => {
 
  return <Checkbox {...args} />;
};

export const CheckboxPrimary = Template.bind({});

CheckboxPrimary.args = {
  isDisabled: false,
  isChecked: false
};
