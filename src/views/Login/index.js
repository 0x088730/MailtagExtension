import React from "react";
import Icon128 from "../../assets/img/icon-128.svg";
import GoogleG from "../../assets/img/google-g.svg";
import config from "../../config";
import openInNewTab from "utils/openNewTab";

export default function Login() {
  return (
    <div className="vertical-center">
      <div className="container">
        <div className="row text-center">
          <div
            className="panel-heading text-center"
            style={{ paddingBottom: 25 }}
          >
            <img alt="MailTag Icon" height={55} src={Icon128} width="auto" />
          </div>
          <div className="panel-heading text-center">
            <h3 className="activation-message">
              Sign in with Google to access MailTag.
            </h3>
            <div className="text-center">
              <button
                target={"_blank"}
                rel="noreferrer"
                onClick={() => openInNewTab(`${config.api}/${config.auth}?callbackurl=${window.location.origin}`)}
                className="google"
                id="signin-with-google"
              >
                <img alt="google icon" src={GoogleG} width={25} />
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
