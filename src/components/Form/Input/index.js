import React from "react";
import { Field, ErrorMessage } from "formik";

const TextError = (props) => {
  return <div className="error">{props.children}</div>;
};
function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Input;
