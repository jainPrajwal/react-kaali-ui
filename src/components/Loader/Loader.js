import React from "react";
export const Loader = ({
  width = 60,
  height = 60,
  borderTopColor,
  borderWidth,
  styleLoader={}
}) => {
  return (
    <>
      <div
        style={{ width, height, borderTopColor, borderWidth, ...styleLoader }}
        className="loader-page"
      ></div>
    </>
  );
};
