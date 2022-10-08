import React from "react";
import backToInbox from "../../assets/img/back-to-inbox.svg";
import openInGmail from "../../assets/img/open-in-gmail.svg";
import checkBlue from "../../assets/img/check_blue.png";
const InboxDetails = () => {
  return (
    <div>
      <div className="row">
        <button
          id="back-to-inbox"
          className="btn win_padding_top_for_specific_email_btn"
        >
          <img src={backToInbox} alt="back to inbox" />
          <span>Back To Inbox</span>
        </button>
        <a rel="noreferrer" href="#!" target="_blank">
          <button
            id="open-in-gmail"
            className="btn win_padding_top_for_specific_email_btn"
          >
            <img src={openInGmail} alt="open in gmail" />
            <span>Open In Gmail</span>
          </button>
        </a>
      </div>
      <div className="row detail-col">
        <div className="row">
          <div
            className="col-lg-5 col-xl-5 col-md-5 col-sm-5"
            style={{ padding: "10px 10px", width: "40%" }}
          >
            <div className="title">RECIPIENT</div>
          </div>
          <div
            className="col-lg-1 col-xl-1 col-md-1 col-sm-1 text-center"
            style={{ width: "5%" }}
          ></div>
          <div
            className="col-lg-3 col-xl-3 col-md-3 col-sm-3"
            style={{ padding: "10px 10px", width: "25%" }}
          >
            <div className="title">FIRST OPENED</div>
          </div>
          <div
            className="col-lg-1 col-xl-1 col-md-1 col-sm-1"
            style={{ padding: "10px 10px", width: "15%" }}
          >
            <div className="title">READ TIMES</div>
          </div>
          <div
            className="col-lg-2 col-xl-2 col-md-2 col-sm-2"
            style={{ padding: "10px 10px", width: "15%" }}
          >
            <div className="title">DEVICE</div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-1 col-xl-1 col-md-1 col-sm-1 text-center"
            style={{ width: "5%" }}
          >
            <div
              className="recipient-img"
              data-email-address="hakanselam7@gmail.com"
              id="recipient-logo"
            >
              {/*?xml version="1.0" encoding="UTF-8"?*/}
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 40 40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {" "}
                <title>Avatar</title> <desc>Created with Sketch.</desc>{" "}
                <defs>
                  {" "}
                  <circle id="path-1" cx={20} cy={20} r={20} />{" "}
                </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Avatar-colors"
                    transform="translate(-1096.000000, -470.000000)"
                  >
                    {" "}
                    <g
                      id="Avatar"
                      transform="translate(1096.000000, 470.000000)"
                    >
                      {" "}
                      <mask id="mask-2" fill="white">
                        {" "}
                        <use xlinkHref="#path-1" />{" "}
                      </mask>{" "}
                      <circle
                        stroke="#58438C"
                        strokeWidth="1.5"
                        cx={20}
                        cy={20}
                        r="19.25"
                      />{" "}
                      <text
                        id="M"
                        mask="url(#mask-2)"
                        fontFamily="ProximaNovaSemibold"
                        fontSize={16}
                        fontWeight={500}
                        letterSpacing="0.7777777"
                        fill="#58438C"
                      >
                        {" "}
                        <tspan x="14.2661112" y={25}>
                          H
                        </tspan>{" "}
                      </text>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div
            className="col-lg-5 col-xl-5 col-md-5 col-sm-5"
            style={{ padding: "10px 10px", width: "40%" }}
          >
            <div
              className="title-value"
              data-toggle="tooltip"
              data-html="true"
              title
              data-original-title="hakanselam7@gmail.com"
            >
              hakanselam7@gmail.com
            </div>
          </div>
          <div
            className="col-lg-3 col-xl-3 col-md-3 col-sm-3"
            style={{ padding: "10px 10px", width: "25%" }}
          >
            <div className="title-value">
              <img
                src={checkBlue}
                alt="check blue"
                style={{ height: "13px", marginLeft: "-2px" }}
              />
              Jul 1st, 2022 02:44 PM
            </div>
          </div>
          <div
            className="col-lg-1 col-xl-1 col-md-1 col-sm-1"
            style={{ padding: "10px 10px", width: "15%" }}
          >
            <div className="title-value">4</div>
          </div>
          <div
            className="col-lg-2 col-xl-2 col-md-2 col-sm-2"
            style={{ padding: "10px 10px", width: "15%" }}
          >
            <div className="title-value">Gmail</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InboxDetails;
