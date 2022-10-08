import EmailRecords from "components/dashboard/EmailRecords";
import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
const CustomCard = (props) => {
  const { text, valueText, data, index, link } = props;
  return (
    <>
      <Col
        key={`custom_card_${index}`}
        lg={6}
        md={12}
        sm={12}
        xl={6}
        className="new-dashboard-box-container"
      >
        <div className="new-dashboard-box">
          <div className="new-dashboard-box-title">{text}</div>
          <Link to={link} className="new-dashboard-box-show-all">
            SHOW ALL
          </Link>
          {data ? (
            <div className="new-dashboard-box-list">
              {data.map((item, index) => (
                <EmailRecords
                  key={`EmailRecords_${index}`}
                  index={`EmailRecords_${index}`}
                  email={item.recipient}
                  subject={item.subject}
                  time={item.created_at}
                ></EmailRecords>
              ))}
            </div>
          ) : (
            <div
              className="no-data-available"
              style={{ textAlign: "center", fontSize: "large" }}
            >
              {valueText}
            </div>
          )}
        </div>
      </Col>
    </>
  );
};
export default CustomCard;
