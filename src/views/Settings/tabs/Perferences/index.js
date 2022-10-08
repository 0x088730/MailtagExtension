import { Field, Form, Formik } from "formik";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import config from "../../../../config";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PerferencesItems from "./PerferenceItems";
import {
  fetchSuccess,
  fetchError,
  fetchStart,
} from "redux/Common/common.action";
const SwitcherSpecial = ({ field }) => {
  return (
    <div>
      <div className="checkbox switcher">
        <label>
          <input {...field} type="checkbox" />
          <span>
            <small></small>
          </span>
        </label>
      </div>
    </div>
  );
};
const Preferences = ({ data }) => {
  const [response, setResponse] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  return (
    <>
      {data && (
        <Formik
          initialValues={{
            mailtagDefaultEnabled: data.settings.mailtagDefaultEnabled || false,
            desktopNotifications: data?.settings.desktopNotifications || false,
            emailNotifications: data?.settings.emailNotifications || false,
            linkTracking: data?.settings.linkTracking || false,
            attachmentTracking: data?.settings.attachmentTracking || false,
            customSignatures: data?.settings.customSignatures || false,
            customSignatureForPings:
              data?.settings.customSignatureForPings || false,
            bcc: data?.settings.bcc || false,
            subDomain: data?.settings.subDomain || false,
            boomerang: data?.settings.boomerang || false,
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
              const response = await axiosPrivate.patch(`/${config.settings}`, {
                signal: controller.signal,
                ...values,
              });
              dispatch(fetchSuccess());
              setSubmitting(false);
              console.log(response);
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
                  <PerferencesItems text="Enable MailTag by default">
                    <Field
                      name="mailtagDefaultEnabled"
                      className="mr-2 leading-tight"
                      type="checkbox"
                      component={SwitcherSpecial}
                    />
                  </PerferencesItems>
                  <PerferencesItems
                    text="Receive email notifications for email opens"
                    tooltip="When your emails are opened,<br>you’ll receive an email notification."
                  >
                    <Field
                      name="emailNotifications"
                      className="mr-2 leading-tight"
                      type="checkbox"
                      component={SwitcherSpecial}
                    />
                  </PerferencesItems>
                  <PerferencesItems
                    text="Know when recipients click links in your emails"
                    tooltip="To use this feature you need a verified subdomain"
                  >
                    <Field
                      name="linkTracking"
                      className="mr-2 leading-tight"
                      type="checkbox"
                      component={SwitcherSpecial}
                    />
                  </PerferencesItems>
                  <PerferencesItems text="Know when recipients download attachments in your emails">
                    <Field
                      name="attachmentTracking"
                      className="mr-2 leading-tight"
                      type="checkbox"
                      component={SwitcherSpecial}
                    />
                  </PerferencesItems>
                  <PerferencesItems text="Enable Custom Signatures by Default">
                    <Field
                      name="customSignatures"
                      className="mr-2 leading-tight"
                      type="checkbox"
                      component={SwitcherSpecial}
                    />
                  </PerferencesItems>
                  <PerferencesItems text="Enable Custom Signatures in Pings by Default">
                    <Field
                      name="customSignatureForPings"
                      className="mr-2 leading-tight"
                      type="checkbox"
                      component={SwitcherSpecial}
                    />
                  </PerferencesItems>
                  <PerferencesItems
                    text="Send copy to CRM (BCC)"
                    tooltip="When email tracking is enabled, <br/> we'll BCC your emails to your CRM."
                  >
                    <Field
                      name="bbc"
                      className="mr-2 leading-tight"
                      type="checkbox"
                      component={SwitcherSpecial}
                    />
                  </PerferencesItems>

                  <PerferencesItems
                    text="Sub Domain"
                    tooltip="This subdomain will be used for email and link tracking."
                  >
                    <Field
                      name="subDomain"
                      className="mr-2 leading-tight"
                      type="checkbox"
                      component={SwitcherSpecial}
                    />
                  </PerferencesItems>
                  <PerferencesItems
                    text="Boomerang"
                    tooltip="When your ping email goes unanswered, an email will be sent to you notifying it."
                  >
                    <Field
                      name="boomerang"
                      className="mr-2 leading-tight"
                      type="checkbox"
                      component={SwitcherSpecial}
                    />
                  </PerferencesItems>

                  <div className="email-div">
                    <button
                      type="submit"
                      className="pull-right upgrade-plan-btn win_btn_padding_bottom"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
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
