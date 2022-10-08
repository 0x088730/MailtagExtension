import React from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
const SimpleCard = (props) => {
  const { state, value, text, lg = 3, md = 6, sm = 6 } = props;
  const stateImage =
    state === "decrease"
      ? require("assets/img/ic-down-arrow.svg").default
      : require("assets/img/ic-up-arrow.svg").default;
  return (
    <>
      <Col lg={lg} md={md} sm={sm}>
        <Card className="card-stats">
          <CardBody>
            <Row>
              <Col md="12" xs="12">
                <div
                  className="numbers"
                  style={{ textAlign: "center", display: "block" }}
                >
                  <CardTitle tag="p">
                    {value} <img alt="State" src={stateImage} />
                  </CardTitle>
                  <p className="card-category">{text}</p>
                  <p />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default SimpleCard;
