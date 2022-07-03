import React, { useState, useEffect } from "react";
import "./Button.css";
export const Button = ({
  type,
  cssButton = {},
  onClickHandler,
  isDisabled = false,
  children,
}) => {
  const [coords, setCoords] = useState({
    x: -1,
    y: -1,
  });

  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  
  return (
    <button
      className={`btn btn-${type} overflow-hidden`}
      onClick={(e) => {
        const rectangle = e.target.getBoundingClientRect();
        setCoords({
          x: e.clientX - rectangle.left,
          y: e.clientY - rectangle.top,
        });
        typeof onClickHandler === `function` && onClickHandler();
      }}
      style={{
        position: `relative`,
        ...cssButton,
      }}
      disabled={isDisabled}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      <span className="content">{children}</span>
    </button>
  );
};
