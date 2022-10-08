import useFetch from "hooks/useFetch";
import config from "../../config";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import NewSignature from "./NewSignature";
import SignatureData from "./SignatureData";
import SignatureEmpty from "./SignatureEmpty";
const Signature = () => {
  const [openSignature, setOpenSignature] = useState(false);
  const [data] = useFetch(config.signatures);
  return (
    <div className="content">
      <Row>
        <Col md="12">
          {openSignature ? (
            <NewSignature />
          ) : data && data?.signatures?.length < 1 ? (
            <SignatureEmpty />
          ) : openSignature ? (
            <NewSignature />
          ) : (
            <SignatureData data={data?.signatures} />
          )}
          <Col md={12} lg={12}>
            {!openSignature ? (
              <div
                className="add-signatures"
                id="add-signatures"
                style={{ textAlign: "center", marginTop: "19px" }}
              >
                <div
                  onClick={() => setOpenSignature(!openSignature)}
                  style={{ marginBottom: "35px" }}
                  className="signature-button"
                >
                  Add Signature
                </div>
              </div>
            ) : (
              ""
            )}
          </Col>
        </Col>
      </Row>
      <Row>
        <Col lg={12}></Col>
      </Row>
      <Row></Row>
    </div>
  );
};
export default Signature;
