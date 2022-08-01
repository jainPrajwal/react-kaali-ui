import React from "react";
import { useState } from "react";
import { Checkbox } from "../components/Checkbox";

import "./styles.css";

export default {
  title: `Checkbox`,
  component: Checkbox,
  argTypes: { onChangeHandler: { action: "clicked" } },
};

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  const onChangeHandler = () => setIsChecked(!isChecked);
  return (
    <Checkbox
      {...args}
      isChecked={isChecked}
      onChangeHandler={onChangeHandler}
    />
  );
};

export const CheckboxPrimary = Template.bind({});

CheckboxPrimary.args = {
  isDisabled: false,
  isChecked: false,
  styleCheckmark: {},
  styleLabel: {},
  styleCheckbox: {},
};
