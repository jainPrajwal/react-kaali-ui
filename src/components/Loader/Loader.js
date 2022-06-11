import React from "react";
export const Loader = ({ width=60, height=60, borderTopColor }) => {
  return (
    <>
      <div
        style={{ width, height, borderTopColor }}
        className="loader-page"
      ></div>
    </>
  );
};
