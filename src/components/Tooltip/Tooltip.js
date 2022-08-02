import React, { useState } from "react";
import "../../styles.css";
export const Tooltip = ({
  children,
  position = `top`,
  mode = `light`,
  label = `label`,
  style = {},
}) => {
  const styleTooltip = {
    color: mode === `dark` ? `black` : `#f3f4f6`,
    backgroundColor: mode === `dark` ? `#f3f4f6` : `black`,
  };

  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <div
        onMouseOver={() => {
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
        }}
      
      >
        {children}
        <span
          className={`tooltip tooltip-${position} tooltip-${mode}`}
          style={{
            ...styleTooltip,
            visibility: showTooltip ? `visible` : `hidden`,
            ...style,
          }}
        >
          {label}
        </span>
      </div>
    </>
  );
};
