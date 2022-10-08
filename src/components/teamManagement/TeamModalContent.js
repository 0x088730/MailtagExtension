import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import config from "../../config";
import { useDispatch } from "react-redux";
import {
  fetchSuccess,
  fetchStart,
  fetchError,
} from "redux/Common/common.action";
const TeamModalContent = ({ setOpen }) => {
  const [response, setResponse] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="invite-header">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          style={{ zIndex: "99999" }}
          onClick={() => setOpen()}
        >
          ×
        </button>
      </div>
      <div className="modal-body invite-modal-body">
        <h3 className="invite-heading text-center">Invite Team Member</h3>
        <div className="col-md-2"></div>
        <Formik
          initialValues={{
            email: "",
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
              const response = await axiosPrivate.post(
                `${config.teamInvites}`,
                {
                  signal: controller.signal,
                  ...values,
                }
              );
              dispatch(fetchSuccess());
              setSubmitting(false);
              setOpen(false);
              setResponse(response?.data?.data || "");
            } catch (err) {
              dispatch(fetchError("Fetch Error"));
              setSubmitting(false);
              setOpen(false);
              console.error(err);
            }
          }}
        >
          {() => {
            return (
              <Form className="h-screen flex content-center flex-col justify-center">
                <div>
                  <div className="col-md-4">
                    <h3 className="email-label">EMAIL</h3>
                    <Field
                      name="email"
                      className="email-input"
                      placeholder="email@mailtag.com"
                      id="email-input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn invite-btn"
                    id="invite-btn"
                  >
                    Add User
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
export default TeamModalContent;
