import React from "react";
export const Loader = ({
  width = 60,
  height = 60,
  borderTopColor,
  borderWidth,
  cssLoader={}
}) => {
  return (
    <>
      <div
        style={{ width, height, borderTopColor, borderWidth, ...cssLoader }}
        className="loader-page"
      ></div>
    </>
  );
};
