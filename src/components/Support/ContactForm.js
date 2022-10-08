import { Field, Form, Formik } from "formik";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import config from "../../config";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  fetchSuccess,
  fetchError,
  fetchStart,
} from "redux/Common/common.action";
import { FormGroup } from "reactstrap";

const Preferences = ({ data }) => {
  const [response, setResponse] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          subject: "",
          message: "",
        }}
        enableReinitialize={true}
        onSubmit={async (
          values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          alert(JSON.stringify(values));
          setSubmitting(true);
          const controller = new AbortController();
          try {
            dispatch(fetchStart());
            const response = await axiosPrivate.post(`/${config.support}`, {
              signal: controller.signal,
              ...values,
            });
            dispatch(fetchSuccess());
            setSubmitting(false);
            setResponse(response?.data?.data || "");
          } catch (err) {
            dispatch(fetchError("Fetch Error"));
            setSubmitting(false);
            console.error(err);
          }
        }}
      >
        {() => {
          return (
            <Form className="h-screen flex content-center flex-col justify-center">
              <div>
                <FormGroup>
                  <div className="contact-support-field-title">SUBJECT</div>

                  <div className="contact-support-field">
                    <Field
                      name="subject"
                      id="subject"
                      style={{ display: "block" }}
                      className="contact-support-field-name"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="contact-support-field-title">MESSAGE</div>
                  <Field
                    name="message"
                    style={{
                      display: "block",
                      border: "none",

                      height: "180px !important",
                      overflow: "hidden",
                    }}
                    id="message"
                    as={"textarea"}
                    placeholder="Have questions? Don’t hesitate to ask! :)"
                    className="contact-support-field-name"
                  />
                </FormGroup>
                <div className="email-div">
                  <button
                    type="submit"
                    className="pull-right upgrade-plan-btn win_btn_padding_bottom"
                  >
                    Send
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>

      <br />
      {/* <div className="email-div">
        <button className="pull-right upgrade-plan-btn win_btn_padding_bottom">
          Save
        </button>
      </div> */}
    </>
  );
};
export default Preferences;
