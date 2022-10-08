import React from "react";
import Moment from "react-moment";
const EmailRecords = ({ email, subject, time, index }) => {
  return (
    <div className="new-dashboard-box-item" key={index}>
      <div
        className="new-dashboard-box-item-avatar"
        id="profile-pic-4"
        data-email-address={email}
      >
        <div className="email_record_avatar">{email.charAt(0)}</div>
      </div>
      <div className="new-dashboard-box-item-right">
        <div className="new-dashboard-box-item-main">
          <div className="new-dashboard-box-subject">{subject}</div>
          <div className="new-dashboard-box-email"> {email}</div>
        </div>
        <div className="new-dashboard-box-item-time">
          <Moment fromNow>{time}</Moment>
        </div>
      </div>
    </div>
  );
};
export default EmailRecords;
 
