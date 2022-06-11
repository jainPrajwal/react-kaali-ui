import React from "react";
export const Loader = ({ width=60, height=60, borderTopColor }) => {
  return (
    <>
      <div
        className="loader-page"
        style={{ width, height, borderTopColor }}
      ></div>
    </>
  );
};
