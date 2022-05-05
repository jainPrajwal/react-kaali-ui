import React from "react";
export const ModalOverlay = ({ isHidden, children }) => (
  <div
    className={`modal-bg modal-bg-active ${isHidden === true ? "hide" : ""}`}
  >
    {children}
  </div>
);
