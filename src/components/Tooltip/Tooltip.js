import React, { useState } from "react";
import "../../styles.css";
export const Tooltip = ({ children, position, mode = `light`, label, extendedStyles }) => {
  const style = {
    color: mode === `dark` ? `black` : `var(--kaali-font-color)`,
    backgroundColor: mode === `dark` ? `var(--kaali-font-color)` : `black`,
  };
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div>

      <span
       style={{ position: `relative` }}
        onMouseOver={() => {
          console.log(`on mouse over`);
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          console.log(`on mouse leave`);
          setShowTooltip(false);
        }}
      >
        {children}
        <span
       
        className={`tooltip tooltip-${position || `top`} tooltip-${mode}` }
        style={{...style, visibility: showTooltip ? `visible` : `hidden`,}}
      >
        {label || `label `}
      </span>
      </span>
     


     
    </div>
  );
};
