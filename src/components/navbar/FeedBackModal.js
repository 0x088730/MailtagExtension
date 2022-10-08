import { Field, Form, Formik } from "formik";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import React from "react";
import config from "../../config";
import { useDispatch } from "react-redux";
import { fetchError } from "redux/Common/common.action";
import { fetchStart } from "redux/Common/common.action";
import { fetchSuccess } from "redux/Common/common.action";
const FeedBackModal = () => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  return (
    <>
      <div className="modal-dialog feedback-modal-dialog">
        <div className="modal-content feedback-modal-content">
          <div className="modal-header feedback-header">
            <h4 className="modal-title feedback-title">Send Feedback</h4>
          </div>
          <Formik
            initialValues={{
              subject: "Feedback",
              message: "",
            }}
            enableReinitialize={true}
            onSubmit={async (
              values,
              { resetForm, setErrors, setStatus, setSubmitting }
            ) => {
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
                    <div className="modal-body feedback-body">
                      <Field
                        className="form-control"
                        id="feedback"
                        name="message"
                        rows="5"
                        placeholder="Feedback about this page?"
                        as="textarea"
                        type="checkbox"
                      />
                    </div>

                    <div className="modal-footer feedback-footer">
                      <button
                        className="feedback-send win_btn_padding_bottom"
                        data-dismiss="modal"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default FeedBackModal;
