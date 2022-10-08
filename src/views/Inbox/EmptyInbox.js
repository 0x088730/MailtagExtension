import React from "react";
const EmptyInbox = ({ text }) => {
  return (
    <div className="container">
      <div className="empty-signatures" id="empty-signatures">
        <img
          src={require("assets/img/Illustration-One.svg").default}
          alt="empty"
        />
        <div className="email-text">{text}</div>
      </div>
    </div>
  );
};
export default EmptyInbox;
