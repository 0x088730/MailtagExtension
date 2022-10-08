import React from "react";
import inboxEmail from "../../../assets/img/inbox-email.svg";
import emailDetails from "../../../assets/img/email-details.svg";
import emailDelete from "../../../assets/img/inbox-email-delete.svg";
import { Link } from "react-router-dom";
const HiddenElementTable = ({ activeRow, index, data }) => {
  return (
    <td
      className="overlay"
      style={{
        display:
          activeRow.index === index && activeRow.active ? "block" : "none",
      }}
    >
      <Link to={`/admin/email-details/${data.id}`} className="gmail-link">
        <img
          src={emailDetails}
          alt="email details"
          style={{ margin: "0px 8px 1px 5px" }}
        />
        DETAILS
      </Link>
      <a
        rel="noreferrer"
        className="gmail-link"
        href={`https://mail.google.com/mail/u/0/#all/${data.gmailThreadId}`}
        target="_blank"
      >
        <img
          src={inboxEmail}
          alt="inbox email"
          style={{ margin: "0px 8px 1px 5px" }}
        />
        OPEN IN GMAIL
      </a>
      <a
        rel="noreferrer"
        href="#!"
        style={{ marginRight: "7%" }}
        className="gmail-link delete-mailtag-email read-email-entry"
        data-mailtag-email-id="d9664c59-3e35-46df-8553-2d3fb7f2950b"
      >
        <img
          src={emailDelete}
          alt="email delete"
          style={{ margin: "0px 8px 1px 5px" }}
        />
        DELETE
      </a>
    </td>
  );
};
export default HiddenElementTable;
