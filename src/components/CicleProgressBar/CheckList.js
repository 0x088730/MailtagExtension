import React from "react";
import { useSelector } from "react-redux";
import { progressDataCheck } from "utils/dashboardData";
import ProgressedCheckBox from "./ProgressedCheckBox";
const CheckList = () => {
  const { milestone } = useSelector((state) => state.auth);
  return (
    <>
      <div className=" user-progress-modal-content" style={{ opacity: "1" }}>
        <div className="user-progress-header">
          <h4 className="user-progress-title">
            Here’s a handy checklist to help you get the most out of MailTag.
            <span style={{ width: "24px", marginBottom: "5px" }}>😎</span>
          </h4>
        </div>
        <div className="modal-body user-progress-body">
          <div className="text-center" id="checklist-title">
            Checklist:
          </div>
          {milestone &&
            progressDataCheck.map((item, index) => (
              <ProgressedCheckBox
                index={index}
                key={`progressed_box_${index}`}
                isChecked={milestone.includes(item.tag)}
                label={item.label}
                video={item.video}
              ></ProgressedCheckBox>
            ))}
        </div>
      </div>
    </>
  );
};
export default CheckList;
