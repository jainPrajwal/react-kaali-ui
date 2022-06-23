import { useEffect, useState } from "react";
import React from "react";
import "../../styles.css";

export const Alert = ({ type, text, cssAlert }) => {
  const [isHidden, Hide] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (isHidden) Hide(false);
    }, 3000);
  }, [isHidden]);

  return (
    <div
      style={{ ...cssAlert }}
      className={`alert-content alert-${type} ${isHidden ? "hide" : ""}`}
    >
      {text}
      <span
        className="btn-dismiss"
        id="btn-danger-close"
        onClick={() => Hide(true)}
      >
        &times;
      </span>
    </div>
  );
};
