/*eslint-disable*/
import React from "react";
import { Container, Row, UncontrolledAlert } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
import FooterModal from "./FooterModal";

function Footer(props) {
  return (
    <>
      <div
        className="row text-center footer_static"
        style={{ display: "block" }}
      >
        <div className="container">
          <span id="free-trial-remaining-days">
            Your free trial ends in{" "}
            <span color="#FFFFFF" id="free-trial-remaining-days">
              13 days
            </span>
          </span>
          <FooterModal />
        </div>
      </div>

      <footer className={"footer" + (props.default ? " footer-default" : "")}>
        <Container fluid={props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav"></nav>
            <div className="credits ml-auto"></div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
