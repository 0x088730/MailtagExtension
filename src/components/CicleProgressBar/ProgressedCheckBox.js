import React, { useState } from "react";
import videoPlay from "../../assets/img/progress-bar-play-circle.svg";
import ModalVideo from "react-modal-video";
const ProgressedCheckBox = ({ isChecked, label, index, video }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="row" key={`ProgressedCheckBox_${index}`}>
      {video ? (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={open}
          videoId={video}
          onClose={() => setOpen(false)}
        />
      ) : (
        ""
      )}

      <label className="checkbox-container">
        <input
          id="setup-pings"
          type="checkbox"
          checked={isChecked ? "checked" : ""}
          disabled="disabled"
        />
        <label className="checklist-items">
          {label}
          {video ? (
            <a href="#!" style={{ width: "25px", display: "inline" }}>
              <img
                className="user-progress-checklist-item-play-button"
                src={videoPlay}
                alt={label}
                onClick={() => setOpen(true)}
              />
            </a>
          ) : (
            ""
          )}
        </label>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};
export default ProgressedCheckBox;
