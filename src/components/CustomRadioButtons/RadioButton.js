import React from "react";

export const RadioButton = ({ color, name }) => {
  return (
    <label class={`checkbox-label checkbox${color}-label`}>
      <input type="radio" name={name || `defaultName`} />
      <span class="checkmark"></span>
    </label>
  );
};
