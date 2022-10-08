import React from "react";
import { Col, Row } from "reactstrap";
const EmptyTeam = ({ open, setOpen, children }) => {
  return (
    <>
      <Row>
        <Col md="12">
          <div className="empty-signatures container" id="empty-signatures">
            <img
              src={require("assets/img/Illustration-Three.svg").default}
              alt="empty"
            />
            <div className="email-text">You dont have any Team members.</div>
            <p
              style={{
                display: "block",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              Click on the button below and create your first
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <div
            className="add-signatures"
            id="add-signatures"
            style={{ textAlign: "center", marginTop: "19px" }}
          >
            <button
              onClick={() => setOpen()}
              className="send-support-mail win_btn_padding_bottom"
              id="btn-send-support"
              style={{
                display: "inline-block",
                position: "relative",
                marginBottom: "35px",
                width: "300px",
                margin: "1px auto",
              }}
            >
              {" "}
              Add your first team member{" "}
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default EmptyTeam;
