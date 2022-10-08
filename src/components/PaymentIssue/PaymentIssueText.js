import React from "react";
import closeBtn from "../../assets/img/popup-schedule-timezone-close.svg";
const PaymentIssueText = ({ handleOpen, handlePage }) => {
  return (
    <>
      <div className=" payment-failed-modal-content">
        <div className="modal-body text-center">
          <button
            className="payment-failed-popup-close"
            style={{ margin: "6px 10px 0px 0px" }}
            type="button"
            onClick={() => handleOpen()}
          >
            <img src={closeBtn} alt="Close Button" />
          </button>
          <div className="row payment-failed-popup-title">
            Oops. There was an issue
            <br />
            with your payment.
          </div>
          <div className="row payment-failed-popup-subtitle">
            To continue using MailTag services, please
            <br />
            update your billing information.
          </div>
          <div className="row">
            <button
              className="payment-failed-choose-plan-btn win_btn_padding_bottom"
              id="payment-failed-popup-btn"
              onClick={() => handlePage()}
            >
              Update Billing Info →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentIssueText;
