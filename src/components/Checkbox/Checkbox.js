import React from "react";
import "./checkbox.css"
export const Checkbox = ({
  isChecked = false,
  label,
  onChangeHandler,
  isDisabled = false,
  backgroundColor,
}) => {
  console.log(`onChange handler`, isDisabled);
  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={() => {
          if (typeof onChangeHandler === `function`) {
            onChangeHandler();
          }
        }}
      />
      <span
        className="checkmark"
        style={{ backgroundColor: backgroundColor }}
      ></span>
      {label}
    </label>
  );
};
