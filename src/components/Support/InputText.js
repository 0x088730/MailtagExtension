import React from "react";
import { IconContext } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";

const TextInput = ({
  field,
  label,
  name,
  id,
  value,
  form: { touched, errors },
  ...props
}) => {
  return (
    <React.Fragment>
      <div className={`c-input ${value.length > 0 ? "c-input--filled" : ""}`}>
        <input
          id={id}
          type="text"
          {...field}
          {...props}
          className="c-input__field c-input__field--is-active"
        />
        <label
          htmlFor={id}
          className="c-input__label c-input__label--is-active"
        >
          <span className="c-input__label--content">{label}</span>
        </label>
      </div>

      {touched[field.name] && errors[field.name] && (
        <div className="c-input__feedback">
          <IconContext.Provider value={{ color: "#ffdd55" }}>
            <FiAlertCircle />
          </IconContext.Provider>
          {errors[field.name]}
        </div>
      )}
    </React.Fragment>
  );
};

export default TextInput;
