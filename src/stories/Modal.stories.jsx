import React, { useState } from "react";

import {
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalRow,
} from "../components";
import { Checkbox } from "../components/Modal/Checkbox";
import { Modal } from "../components/Modal/Modal";

import "./styles.css";
export default {
  title: `Modal`,
  component: Modal,
};

const Template = (args) => {
  const [isHidden, Hide] = useState(true);
  const { modalHeader } = args;

  const handleModalClose = () => {
    Hide(true);
  };

  return (
    <>
      <button
        className="btn btn-like"
        onClick={() => {
          Hide(false);
          console.log("hide", isHidden);
        }}
      >
        <img
          src="https://github.com/j836/kaaliUI/blob/main/assets/images/heart.png?raw=true"
          alt="add to cart"
          className="image image-heart"
        />
      </button>
      {!isHidden && (
        <Modal>
          <ModalOverlay isHidden={isHidden}>
            <div className="modal">
              <ModalContainer>
                <ModalHeader handleModalClose={handleModalClose}>
                  {modalHeader || `Modal Header`}
                </ModalHeader>
                <hr className="modal-hr" />
                <ModalBody>
                  <ModalRow>
                    <a href="true" className="collection create-new-collection">
                      <div className="modal-save-item-to-icon create-symbol">
                        +
                      </div>
                      <div className="create-text heading">
                        create a new collection
                      </div>
                    </a>
                  </ModalRow>
                  <ModalRow extendedClassNames={`row-saved-collection`}>
                    <a href="true" className="collection saved-collection">
                      <div className="modal-save-item-to-icon save-symbol">
                        <img
                          src="https://github.com/j836/kaaliUI/blob/main/assets/images/heart.png?raw=true"
                          alt="add to cart"
                          className="image image-heart"
                        />
                      </div>
                      <div className="create-text">
                        <span className="heading">my wishlist </span>
                        <span className="secondary-text">
                          Private: 9 items{" "}
                        </span>
                      </div>{" "}
                    </a>
                    <Checkbox />
                  </ModalRow>
                </ModalBody>
                <ModalFooter>
                  <button
                    className="btn btn-primary"
                    id="collection-btn-done"
                    style={{ width: "100%", maxWidth: "none", margin: 0 }}
                    onClick={() => closeModal()}
                  >
                    Done
                  </button>
                </ModalFooter>
              </ModalContainer>
            </div>
          </ModalOverlay>
        </Modal>
      )}
    </>
  );
};

export const NewModal = Template.bind({});
NewModal.args = {
  modalHeader: `kuch bhi`,
};

const Template2 = (args) => {
  const [isHidden, Hide] = useState(true);
  const { modalHeader } = args;

  const handleModalClose = () => {
    Hide(true);
  };

  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => {
          Hide(false);
          console.log("hide", isHidden);
        }}
      >
        Log Out
      </button>
      {!isHidden && (
        <Modal>
          <ModalOverlay isHidden={isHidden}>
            <div className="modal">
              <ModalContainer>
                <ModalHeader handleModalClose={handleModalClose}>
                  {modalHeader || `Modal Header`}
                </ModalHeader>
                <hr className="modal-hr" />

                <ModalFooter>
                  <ModalRow>Are you sure you want to Logout?</ModalRow>
                  <div className="d-flex jc-end">
                    <button
                      className="btn btn-secondary"
                      id="collection-btn-done"
                      onClick={() => handleModalClose()}
                    >
                      Log Out
                    </button>
                    <button
                      className="btn btn-primary"
                      id="collection-btn-done"
                      onClick={() => handleModalClose()}
                    >
                      Cancel
                    </button>
                  </div>
                </ModalFooter>
              </ModalContainer>
            </div>
          </ModalOverlay>
        </Modal>
      )}
    </>
  );
};

export const LogoutModal = Template2.bind({});
LogoutModal.args = {
  modalHeader: `Logout`,
};
