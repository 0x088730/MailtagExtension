import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Col, Row } from "reactstrap";
const EmptyPing = ({ text }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={open}
        videoId="wQbwipvswug"
        onClose={() => setOpen(false)}
      />
      <div className="empty-signatures container" id="empty-signatures">
        <img
          src={require("assets/img/Illustration-Three.svg").default}
          alt="empty"
        />
        <div className="email-text">{text}</div>
      </div>
      <Row>
        <Col md={12} lg={12}>
          <button
            style={{ margin: "18px auto", display: "block" }}
            className="btn btn-video youtube-link text-center watch-tutorial windows-watch-tutorial"
            onClick={() => setOpen(true)}
          >
            <img
              alt=" "
              src={require("assets/img/play-circle.svg").default}
              style={{ width: "23px", margin: "0px 5px 3px 0px" }}
            />
            Watch Tutorial
          </button>
        </Col>
      </Row>
    </>
  );
};
export default EmptyPing;
