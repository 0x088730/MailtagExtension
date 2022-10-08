import Switcher from "components/Elements/Switcher";
import React, { Children } from "react";
import ReactTooltip from "react-tooltip";
import { Col } from "reactstrap";
import alertCicle from "../../../../assets/img/alert-circle-que.svg";
const PerferencesItems = ({
  field,
  text,
  tooltip,
  children,
  status = false,
}) => {
  return (
    <div className="preference-data row flex-row">
      <Col lg={1} md={1}></Col>
      <Col lg={8} md={8}>
        <ReactTooltip id={`perference-${text}`} type="dark">
          <span
            dangerouslySetInnerHTML={{
              __html: tooltip,
            }}
          ></span>
        </ReactTooltip>
        <span className="field-title">
          {text}
          {tooltip ? (
            <img
              src={alertCicle}
              alt="alertCicle"
              data-for={`perference-${text}`}
              data-tip
              style={{ margin: "0 0 3px 6px" }}
            />
          ) : (
            ""
          )}
        </span>
      </Col>
      <Col lg={2} md={2}>
        {children}
      </Col>
      <Col lg={1} md={1}></Col>
      <div className="col-lg-1 col-xl-1 col-md-1 col-sm-1 col-xs-0"></div>
    </div>
  );
};
export default PerferencesItems;
