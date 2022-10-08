import React from "react";
const SigntureEmpty = () => {
  return (
    <div className="container">
      <div className="empty-signatures" id="empty-signatures">
        <img
          src={require("assets/img/Illustration-One.svg").default}
          alt="empty"
        />
        <div className="email-text">You have 0 signatures</div>
      </div>
    </div>
  );
};
export default SigntureEmpty;
