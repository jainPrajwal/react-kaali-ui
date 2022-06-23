import React from "react";

export const RadioButton = ({ color, name }) => {
  return (
    <label className={`checkbox-label checkbox${color}-label`}>
      <input type="radio" name={name || `defaultName`} />
      <span className="checkmark"></span>
    </label>
  );
};
