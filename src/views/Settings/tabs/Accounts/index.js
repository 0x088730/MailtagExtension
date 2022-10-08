import React from "react";
import { Col, Row } from "reactstrap";
import AccountsEmails from "./AccountsEmails";
const Accounts = () => {
  return (
    <>
      <div className="account-header">
        <Row>
          <Col lg={8}>
            <div className="account-header-text col-lg-8 col-xl-8 col-md-8 col-sm-8">
              <div className="account-header-text-large">Add more accounts</div>
              <div className="account-header-text-small">
                Sign-in to add MailTag to your other emails.
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <button className="gredient-plan-light-btn">
              <img
                src={require("assets/img/google-g.svg").default}
                alt="Google"
              />
              <span>Sign in with Google</span>
            </button>
          </Col>
        </Row>
        <Row>
          <AccountsEmails />
        </Row>
      </div>
      {/* <button className="gredient-plan-btn gredient-plan-btn_blue">Upgrade</button> */}
    </>
  );
};
export default Accounts;
