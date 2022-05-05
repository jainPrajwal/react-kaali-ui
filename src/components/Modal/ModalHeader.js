import React from "react";
const ModalHeader = ({ children,handleModalClose }) => (
  <div className="modal-header">
    <div className="header header-tertiary" style={{ marginBottom: 0 }}>
      {children}
    </div>
    <span id="btn-modal-close" onClick={() => handleModalClose()}>
      ×
    </span>
  </div>
);
export { ModalHeader };
