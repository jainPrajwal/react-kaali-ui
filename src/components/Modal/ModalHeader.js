import React from "react";
const ModalHeader = ({ children }) => (
  <div className="modal-header">
    <div className="header header-tertiary" style={{ marginBottom: 0 }}>
      {children}
    </div>
  </div>
);
export { ModalHeader };
