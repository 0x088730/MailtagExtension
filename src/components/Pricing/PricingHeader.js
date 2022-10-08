import React from "react";
import ReactTooltip from "react-tooltip";
import { Col, Row } from "reactstrap";
import alertCicle from "../../assets/img/alert-circle-que.svg";

const PricingHeader = ({ handleActive, active }) => {
  const emoji = active === "2" ? "😎" : "🎉";
  return (
    <>
      <Row>
        <Col lg={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div className="new-upgrade-head-1" style={{ fontSize: "30px" }}>
              Get ready to supercharge your Gmail.
            </div>
            <ReactTooltip id="happyFace" type="dark">
              <div>
                <strong>30-Day Refund Guarantee</strong>
                <br />
                Receive a full refund at any time within the first 30 days after{" "}
                <br />
                your purchase for absolutely any reason. Simply email <br />
                Help@MailTag.io and our team will process your refund within 24{" "}
                hours.
              </div>
            </ReactTooltip>
            <div className="new-upgrade-head-2">
              <div>
                <p>
                  <img src={alertCicle} alt="" data-tip data-for="happyFace" />
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Col lg={4}>
            <div className="Tabs">
              <ul
                className="nav"
                style={{ maxWidth: "300px", width: "300px", margin: "auto" }}
              >
                <li
                  key={"1"}
                  style={{ width: "165px" }}
                  onClick={() => handleActive("1")}
                  className={active === "1" ? "active" : ""}
                >
                  Annual &nbsp;
                  <span style={{ color: "#2b9eff", marginLeft: "px;" }}>
                    Save 30%
                  </span>
                </li>
                <li
                  key={"2"}
                  onClick={() => handleActive("2")}
                  className={active === "2" ? "active" : ""}
                >
                  Monthly
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <div
              className="new-upgrade-head-3 yearly-plan"
              style={{ display: "block" }}
            >
              {active === "2" ? (
                <span> Save big by paying annually!</span>
              ) : (
                <span>You're saving 30%!</span>
              )}

              <span
                style={{ width: "20px", marginTop: "-9px", fontSize: "20px" }}
              >
                {emoji}
              </span>
            </div>
          </Col>
        </div>
      </Row>
    </>
  );
};
export default PricingHeader;
