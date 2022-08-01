import React from "react";
export const Checkbox = ({
  isChecked = false,
  label,
  onChangeHandler,
  isDisabled = false,
  backgroundColor,
  styleCheckmark={},
  styleLabel={},
  styleCheckbox={},
}) => {
  return (
    <label className="checkbox-label" style={{ ...styleLabel }}>
      <input
        type="checkbox"
        style={{ ...styleCheckbox }}
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
        style={{ backgroundColor: backgroundColor, ...styleCheckmark }}
      ></span>
      {label}
    </label>
  );
};
