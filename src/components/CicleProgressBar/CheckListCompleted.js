import React from "react";
const CheckListFinished = () => {
  return (
    <div className="user-progress-completed-modal-dialog">
      <div className="user-progress-completed-body">
        <div>
          Whoooo!<span style={{ width: "24px" }}>👊</span>
          <span style={{ marginBottom: "10px", width: "28px" }}>🎉</span>
        </div>
        <div>
          Congrats on completing your checklist! Virtual high five?
          <span style={{ marginBottom: "10px", width: "24px" }}>✋</span>
        </div>
        <div>
          If you have any questions, feel free to reach out at any time via the
          “Support” tab in your dashboard.
          <span style={{ marginBottom: "5px", height: "24px", width: "24px" }}>
            😎
          </span>
        </div>
        <div className="user-progress-completed-footer">
          <span id="back-to-checklist">Back to checklist</span>
        </div>
      </div>
    </div>
  );
};
export default CheckListFinished;
