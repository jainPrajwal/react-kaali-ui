import React from "react";
export const Checkbox = ({
  isChecked = false,
  label,
  onChangeHandler,
  isDisabled = false,
  backgroundColor,
  cssCheckmark={},
  cssLabel={},
  cssCheckbox={},
}) => {
  return (
    <label className="checkbox-label" style={{ ...cssLabel }}>
      <input
        type="checkbox"
        style={{ ...cssCheckbox }}
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
        style={{ backgroundColor: backgroundColor, ...cssCheckmark }}
      ></span>
      {label}
    </label>
  );
};
