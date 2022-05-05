import { useState } from "react";
import React from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(true);

  const toggleValue = () => {
    setIsChecked((prevState) => !prevState);
  };
  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => toggleValue()}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export { Checkbox };
