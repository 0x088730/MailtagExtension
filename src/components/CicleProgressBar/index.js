import React from "react";

const CicleProgressBar = ({ progress }) => {
  return (
    <>
      <div className="progress blue">
        <span className="progress-left">
          <span className="progress-bar"></span>
        </span>
        <span className="progress-right">
          <span className="progress-bar"></span>
        </span>
        <div className="progress-value">{progress}%</div>
      </div>
    </>
  );
};
export default CicleProgressBar;
