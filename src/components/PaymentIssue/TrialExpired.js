import React from "react";
import closeBtn from "../../assets/img/popup-schedule-timezone-close.svg";
const TrailExpired = () => {
  return (
    <div className="text-center">
      <button
        className="free-trial-popup-close"
        style={{ margin: "6px 10px 0px 0px" }}
        type="button"
      >
        <img src={closeBtn} alt="close btn" />
      </button>
      <div className="row free-trial-popup-title">
        Your MailTag trial has
        <span
          style={{
            background: "#FFEEEE",
            padding: "0px 0px 0px 7px",
            margin: "0px 0px 0px 5px",
          }}
        >
          expired.
        </span>
      </div>
      <div className="row free-trial-popup-subtitle">
        To continue tracking, scheduling, and automating
        <br />
        your emails, you’ll need to select a plan.
        <br />
      </div>
      <div className="row">
        <button
          className="free-trial-choose-plan-btn win_btn_padding_bottom"
          id="free-trail-ends-popup-btn"
        >
          Choose Plan →
        </button>
      </div>
      <div className="row free-trial-popup-subtitle">
        Upon upgrading, your access to MailTag
        <br />
        features will immediately be restored.
        <br />
      </div>
    </div>
  );
};
export default TrailExpired;
