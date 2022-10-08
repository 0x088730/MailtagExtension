import React from "react";
import { Modal, ModalBody } from "reactstrap";
import config from "../../config";
const GoogleAuthModal = ({ toggle, modal, ...args }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalBody>
          <iframe
            style={{ width: "100%" }}
            src={`${config.api}/${config.auth}`}
            title="Google Auth"
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default GoogleAuthModal;
