import React from "react";
import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Modal as ModalC,
} from "reactstrap";

const Modal = ({
  open,
  Header,
  setOpen,
  children,
  size,
  fullscreen,
  active,
  handleActive,
}) => {
  return (
    <>
      <ModalC fullscreen={fullscreen} centered={true} isOpen={open} size={size}>
        <ModalHeader
          className="new-upgrade-modal-header"
          toggle={() => setOpen(false)}
          tag="div"
          wrapTag="div"
          active={active}
        >
          <Header active={active} handleActive={handleActive} />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </ModalFooter>
      </ModalC>
    </>
  );
};
export default Modal;
