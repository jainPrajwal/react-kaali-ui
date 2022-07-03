import React, { useState } from "react";
import "../../styles.css";
export const Tooltip = ({
  children,
  position = `top`,
  mode = `light`,
  label = `label`,
  cssTooltip = {},
}) => {
  const style = {
    color: mode === `dark` ? `black` : `var(--kaali-font-color)`,
    backgroundColor: mode === `dark` ? `var(--kaali-font-color)` : `black`,
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
            ...style,

            visibility: showTooltip ? `visible` : `hidden`,
            ...cssTooltip,
          }}
        >
          {label}
        </span>
      </div>
    </>
  );
};
