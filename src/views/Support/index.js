import HelpImage from "components/Support/HelpImage";
import React from "react";
import { Col, Row } from "reactstrap";
import emailTrackingImage from "../../assets/img/new-tracking-video@2x.png";
import emailScheduling from "../../assets/img/new-schedule-video@2x.png";
import emailPings from "../../assets/img/new-pings-video@2x.png";
import Accordion from "components/Support/Accordion";
import ContactForm from "components/Support/ContactForm";
const Support = () => {
  return (
    <>
      <div className="content">
        <div className="text-center">
          <Row>
            <Col md={12} lg={5}>
              <div className="video-title" style={{ marginTop: "47px" }}>
                Video tutorials
              </div>
              <div>
                <p className="video-desc" style={{ marginTop: "10px" }}>
                  Get the most out of MailTag Helpful tutorials :
                </p>
              </div>
              <HelpImage
                image={emailTrackingImage}
                text="Email Tracking"
                video="EFodFK26QkY"
              />
              <HelpImage
                image={emailScheduling}
                text="Email Scheduling"
                video="NOXq_wWn8b8"
              />
              <HelpImage
                image={emailPings}
                text="Email Pings"
                video="wQbwipvswug"
              />
            </Col>
            <Col md={12} lg={7}>
              <div className="support-faq" style={{ marginTop: "47px" }}>
                <div className="contact-support-title">
                  Frequently Asked Support Questions
                </div>
                <Accordion />
                <Row>
                  <ContactForm />
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Support;
