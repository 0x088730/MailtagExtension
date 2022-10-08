import React from "react";
import { ModalBody, Modal as ModalC } from "reactstrap";
import TeamModalContent from "./TeamModalContent";
const TeamModal = ({ open, setOpen, children }) => {
  return (
    <>
      <ModalC
        centered={true}
        isOpen={open}
        style={{ height: "300px !important", maxHeight: "300px" }}
      >
        <ModalBody>
          <TeamModalContent setOpen={setOpen}></TeamModalContent>
        </ModalBody>
      </ModalC>
    </>
  );
};
export default TeamModal;
