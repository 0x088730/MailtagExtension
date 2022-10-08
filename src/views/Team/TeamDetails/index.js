import DropDown from "components/DropDown";
import React from "react";
import { Col, Row, Table } from "reactstrap";
export default function TeamDetails({ open, setOpen, data }) {
  return (
    <div>
      <Row>
        <Col md={3} xl={3} lg={3} sm={3}>
          <h2 className="team-heading">Your team</h2>
        </Col>
        <Col md={6} xl={6} lg={6} sm={6}></Col>
        <Col md={3} xl={3} lg={3} sm={3}>
          <DropDown />
        </Col>
      </Row>
      <Row>
        <Table borderless>
          <thead>
            <tr>
              <th>NAME</th>
              <th>SENT EMAILS</th>
              <th>OPEN RATE</th>
              <th>CLICK RATE</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr key={`email_invites_${index}`}>
                    <td>
                      <div
                        className="email_record_avatar"
                        style={{ display: "inline-block", marginRight: 8 }}
                      >
                        {item?.email?.charAt(0)}
                      </div>

                      {item?.email}
                    </td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>{!item?.isAccepted ? "Resend Invite" : ""}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <Col lg={6}>
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
            Add User{" "}
          </button>
        </Col>
        <Col lg={6}>
          <div
            className="subscribe-members"
            id="subscribe-members"
            style={{ textAlign: "center" }}
          >
            <button
              id="subscribe-members"
              className="subscribe-members-button btn"
            >
              Upgrade Team to MailTag PRO
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
