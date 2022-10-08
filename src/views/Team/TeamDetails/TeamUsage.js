import React from "react";
import ArrowUp from "../../../assets/img/ic-up-arrow.svg";
import ArrowDown from "../../../assets/img/ic-down-arrow.svg";
export default function TeamUsage({ text, count }) {
  return (
    <div
      className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-6"
      id="panel-one"
    >
      <div className="container-fluid">
        <div className="text-center">
          <div className="email-count" id="email-sent-today">
            {count}
            <img
              alt="State Show"
              className="arrow-img"
              id="sent-mail-today-img"
              src={ArrowUp}
            />
          </div>
          <span className="email-count-label" id="emailSentPreviousDate">
            {text}
          </span>
          <input id="email-sent-yesterday" type="hidden" defaultValue={0} />
        </div>
      </div>
    </div>
  );
}
