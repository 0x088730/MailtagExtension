import React from "react";

const Switcher = ({ text, id, isChecked }) => {
  return (
    <>
      <div>
        <div className="checkbox switcher">
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={isChecked} />
            <span>
              <small></small>
            </span>
            <small>{text}</small>
          </label>
        </div>
      </div>
    </>
  );
};
export default Switcher;
