import React from "react";
import closeBtn from "../../assets/img/popup-schedule-timezone-close.svg";
const PaymentWillExpire = () => {
  return (
    <>
      <div className="modal-content free-trail-ends-24hrs-modal-content">
        <div className="modal-body text-center">
          <button
            className="free-trial-popup-close"
            data-dismiss="modal"
            style={{ margin: "6px 10px 0px 0px" }}
            type="button"
          >
            <img src={closeBtn} alt="close btn" />
          </button>
          <div className="row free-trial-popup-title">
            In Few time
            <span
              style={{
                background: "#FFEEEE",
                padding: "0px 0px 0px 4px",
                margin: "0px 0px 0px 5px",
              }}
            >
              24 hours
            </span>
            , your free MailTag trial will expire.
          </div>
          <div className="row free-trial-popup-subtitle">
            Once your trial is over, you’ll no longer be able
            <br />
            to track, schedule, or automate your emails.
            <br />
          </div>
          <div className="row">
            <button
              className="free-trial-choose-plan-btn win_btn_padding_bottom"
              id="free-trail-24hrs-popup-btn"
            >
              Select Plan Now →
            </button>
          </div>
          <div className="row free-trial-popup-subtitle">
            <span>☝🏽</span>
            Upgrade now and save
            <font face="ProximaNovaBold">64%.</font>
            <br />
            This discount will apply to you
            <font face="ProximaNovaBold">for life.</font>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentWillExpire;
