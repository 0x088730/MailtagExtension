import React from "react";

const Select = ({ text, name, options }) => {
  return (
    <>
      <div className="profile-data">
        <div className="field-title">{text}</div>
        <div>
          {" "}
          <select
            className="custom-select "
            defaultValue="Choose an option"
            placeholder="search"
          >
            {options &&
              options.map((option, item) => {
                return (
                  <option key={`${option.value}_${item}`} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </>
  );
};
export default Select;
