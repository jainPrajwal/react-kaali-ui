import React, { useState } from "react";
import "../../styles.css";
export const Tooltip = ({
  children,
  position = `top`,
  mode = `light`,
  label = `label`,
  css={},
}) => {
  const style = {
    color: mode === `dark` ? `black` : `var(--kaali-font-color)`,
    backgroundColor: mode === `dark` ? `var(--kaali-font-color)` : `black`,
  };
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <span
        style={{ position: `relative` }}
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
          style={{ ...style, ...css, visibility: showTooltip ? `visible` : `hidden` }}
        >
          {label}
        </span>
      </span>
    </>
  );
};
