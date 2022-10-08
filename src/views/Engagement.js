import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Engagement() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="demo-engagement">
              <CardHeader>
                <CardTitle tag="h5">100 Icons for test</CardTitle>
                <p className="card-category">
                  Test Text adfgasrg asgas dfm{" "}
                  <a href="https://nsdrtrst.com">Test Txt</a>
                </p>
              </CardHeader>
              <CardBody className="all-icons">
                <div id="icons-wrapper">
                  <section></section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Engagement;
