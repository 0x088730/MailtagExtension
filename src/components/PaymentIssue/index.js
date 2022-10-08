import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import CardInfromation from "./CardInformation";
import PaymentIssueText from "./PaymentIssueText";
const PaymentIssue = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handlePage = () => {
    setPage(2);
  };
  return (
    <>
      <Modal open={open} size="md" isOpen={open}>
        <ModalBody>
          {page === 1 ? (
            <PaymentIssueText handleOpen={handleOpen} handlePage={handlePage} />
          ) : (
            <CardInfromation handleOpen={handleOpen} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};
export default PaymentIssue;
