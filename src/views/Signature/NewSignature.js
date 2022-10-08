import React from "react";
const NewSignature = () => {
  return (
    <div className="signature-calculator">
      <div className="container">
        <div className="calculator-main form-widget">
          <div>
            <h3 className="title">Your information</h3>
            <p className="form-widget">
              Let’s build your new email signature!
              <span>😎</span>
            </p>
            <div className="photo-widget">
              <label
                htmlFor="fileElem"
                className="photo-widget-upload style-round"
                id="drop-area"
              >
                <input type="file" id="fileElem" accept="image/*" />
              </label>
              <div className="photo-widget-info">
                <h4>Upload your photo.</h4>
                Max. image size: 1MB
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="photo-widget-styles"
                    style={{ marginRight: "10px" }}
                  >
                    <div className="style-square" data-style="square" />
                    <div className="style-rounded" data-style="rounded" />
                    <div className="style-round selected" data-style="round" />
                  </div>
                  <div className="range">
                    <input
                      max={100}
                      min={80}
                      step={1}
                      type="range"
                      id="photo-size"
                      defaultValue={90}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <input placeholder="Name" type="text" id="input-name" />
            </div>
            <div className="field">
              <input
                placeholder="Title/Position (CEO, Head of Sales, etc.)"
                type="text"
                id="input-title"
              />
            </div>
            <div className="field">
              <input
                placeholder="Company Name"
                type="text"
                id="input-company"
              />
            </div>
            <div className="field">
              <input
                placeholder="Your Email Address"
                type="email"
                id="input-email"
              />
            </div>
            <div className="field">
              <input
                placeholder="Your Website (e.g: https://www.MailTag.io)"
                type="url"
                id="input-url"
              />
            </div>
            <div className="field">
              <input
                placeholder="Physical Office Address"
                type="text"
                id="input-address"
              />
            </div>
            <div className="field">
              <input
                placeholder="Office Phone Number"
                type="tel"
                id="input-office-phone"
              />
            </div>
            <div className="field">
              <input
                placeholder="Mobile Phone Number"
                type="tel"
                id="input-mobile-phone"
              />
            </div>
            <div className="field">
              <input
                placeholder="Home Phone Number"
                type="tel"
                id="input-home-phone"
              />
            </div>
            <div className="field">
              <input
                placeholder="Your Schedule URL"
                type="url"
                id="input-calendly"
              />
            </div>
            <label className="label" style={{ textAlign: "left" }}>
              Upload Banner:
              <label
                className="banner-remove"
                id="banner-enable"
                title="Upload banner to enable it"
                style={{ color: "red", cursor: "pointer", display: "inline" }}
              >
                Enable
              </label>
              <label
                className="banner-remove"
                id="banner-disable"
                style={{ color: "red", cursor: "pointer", display: "none" }}
              >
                Disable
              </label>
            </label>
            <div className="photo-widget">
              <label
                htmlFor="fileBanner"
                className="photo-widget-upload style-rounded"
                id="drop-area-banner"
                style={{ backgroundImage: 'url("null")' }}
              >
                <input type="file" id="fileBanner" accept="image/*" />
              </label>
              <div style={{ width: "-webkit-fill-available", margin: "23px" }}>
                <h5 style={{ margin: 0, fontSize: "15px" }}>Banner Width</h5>
                <div className="range">
                  <input
                    max={446}
                    min={200}
                    step={1}
                    type="range"
                    id="banner-width"
                    defaultValue={325}
                  />
                </div>
                <h5 style={{ margin: 0, fontSize: "15px" }}>Banner Height</h5>
                <div className="range">
                  <input
                    max={90}
                    min={50}
                    step={1}
                    type="range"
                    id="banner-height"
                    defaultValue={90}
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <input
                placeholder="Banner Link URL"
                type="url"
                id="input-banner-link"
              />
            </div>
            <label
              className="label"
              style={{ marginTop: "20px", textAlign: "left" }}
            >
              Color Selection:
            </label>
            <div className="color-list">
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(178, 67, 68)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(178, 67, 68, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(178, 67, 68)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  defaultChecked
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(50, 142, 247)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(50, 142, 247, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(50, 142, 247)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(169, 201, 144)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(169, 201, 144, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(169, 201, 144)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(0, 138, 161)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(0, 138, 161, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(0, 138, 161)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(255, 188, 0)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(255, 188, 0, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(255, 188, 0)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(114, 150, 82)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(114, 150, 82, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(114, 150, 82)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(162, 212, 226)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(162, 212, 226, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(162, 212, 226)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(129, 113, 101)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(129, 113, 101, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(129, 113, 101)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(250, 227, 176)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(250, 227, 176, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(250, 227, 176)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(198, 180, 164)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(198, 180, 164, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(198, 180, 164)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(118, 194, 203)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(118, 194, 203, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(118, 194, 203)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(240, 58, 118)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(240, 58, 118, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(240, 58, 118)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(174, 67, 190)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(174, 67, 190, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(174, 67, 190)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(123, 84, 196)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(123, 84, 196, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(123, 84, 196)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(80, 104, 194)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(80, 104, 194, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(80, 104, 194)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(0, 199, 220)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(0, 199, 220, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(0, 199, 220)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(90, 185, 99)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(90, 185, 99, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(90, 185, 99)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(214, 224, 72)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(214, 224, 72, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(214, 224, 72)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(255, 236, 74)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(255, 236, 74, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(255, 236, 74)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(255, 168, 0)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(255, 168, 0, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(255, 168, 0)" }}
                  />
                </span>
              </label>
              <label>
                <input
                  name="radio-color"
                  type="radio"
                  defaultValue="rgb(141, 104, 90)"
                />
                <span
                  className="fake-input"
                  style={{ borderColor: "rgba(141, 104, 90, 0.3)" }}
                >
                  <span
                    className="radius"
                    style={{ backgroundColor: "rgb(141, 104, 90)" }}
                  />
                </span>
              </label>
            </div>
            <div className="social-form">
              <label className="check-line" style={{ paddingBottom: "0px" }}>
                <span className="label">Social Media:</span>
              </label>
              <div className="box-holder" style={{ display: "flex" }}></div>
            </div>
            <div className="social-media" id="social-media">
              <div className="field" data-type="linkedin">
                <span className="handle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    className="iconify"
                    data-icon="ic:baseline-drag-indicator"
                    data-inline="false"
                    style={{ transform: "rotate(360deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                    />
                  </svg>
                </span>
                <input
                  placeholder="Linkedin"
                  type="url"
                  defaultValue="https://www.linkedin.com"
                />
              </div>
              <div className="field" data-type="fb">
                <span className="handle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    className="iconify"
                    data-icon="ic:baseline-drag-indicator"
                    data-inline="false"
                    style={{ transform: "rotate(360deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                    />
                  </svg>
                </span>
                <input
                  placeholder="Facebook"
                  type="url"
                  defaultValue="https://www.facebook.com"
                />
              </div>
              <div className="field" data-type="twitter">
                <span className="handle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    className="iconify"
                    data-icon="ic:baseline-drag-indicator"
                    data-inline="false"
                    style={{ transform: "rotate(360deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                    />
                  </svg>
                </span>
                <input
                  placeholder="Twitter"
                  type="url"
                  defaultValue="https://www.twitter.com"
                />
              </div>
              <div className="field" data-type="instagram">
                <span className="handle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    className="iconify"
                    data-icon="ic:baseline-drag-indicator"
                    data-inline="false"
                    style={{ transform: "rotate(360deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                    />
                  </svg>
                </span>
                <input placeholder="Instagram" type="url" />
              </div>
              <div className="field" data-type="medium">
                <span className="handle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    className="iconify"
                    data-icon="ic:baseline-drag-indicator"
                    data-inline="false"
                    style={{ transform: "rotate(360deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                    />
                  </svg>
                </span>
                <input placeholder="Medium" type="url" />
              </div>
              <div className="field" data-type="whatsapp">
                <span className="handle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    className="iconify"
                    data-icon="ic:baseline-drag-indicator"
                    data-inline="false"
                    style={{ transform: "rotate(360deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                    />
                  </svg>
                </span>
                <input placeholder="Whatsapp" type="url" />
              </div>
              <div className="field" data-type="pinterest">
                <span className="handle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    className="iconify"
                    data-icon="ic:baseline-drag-indicator"
                    data-inline="false"
                    style={{ transform: "rotate(360deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                    />
                  </svg>
                </span>
                <input placeholder="Pinterest" type="url" />
              </div>
              <div className="field" data-type="youtube">
                <span className="handle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    className="iconify"
                    data-icon="ic:baseline-drag-indicator"
                    data-inline="false"
                    style={{ transform: "rotate(360deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                    />
                  </svg>
                </span>
                <input placeholder="YouTube" type="url" />
              </div>
              <div className="field" data-type="soundcloud">
                <span className="handle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    className="iconify"
                    data-icon="ic:baseline-drag-indicator"
                    data-inline="false"
                    style={{ transform: "rotate(360deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                    />
                  </svg>
                </span>
                <input placeholder="Soundcloud" type="url" />
              </div>
              <div className="field" data-type="skype">
                <span className="handle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    className="iconify"
                    data-icon="ic:baseline-drag-indicator"
                    data-inline="false"
                    style={{ transform: "rotate(360deg)" }}
                  >
                    <path
                      fill="currentColor"
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                    />
                  </svg>
                </span>
                <input placeholder="Skype" type="url" />
              </div>
            </div>
          </div>
          <div>
            <div className="preview">
              <div className="preview-widget">
                <div className="title-widget">
                  <h2>Live Preview</h2>
                </div>
                <div className="box-widget circle-widget social-color-of social-avatar">
                  <div className="row-widget">
                    <span>Recipients</span>
                  </div>
                  <div className="row-widget">
                    <span>Subject</span>
                  </div>
                  <div className="content-widget">
                    <p>
                      Hello Andrew <span>😊</span>,
                    </p>
                    <p>Just writing to...</p>
                  </div>
                  <div
                    className="signature-preview"
                    id="signature-template-0"
                    style={{ display: "block" }}
                  >
                    <table
                      className="table-signature"
                      border={0}
                      style={{
                        border: 0,
                        borderSpacing: "20px",
                        marginTop: "60px",
                      }}
                      cellSpacing={20}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              verticalAlign: "top",
                            }}
                            valign="top"
                          >
                            <p style={{ margin: 0, maxWidth: "initial" }}>
                              <img
                                alt="signature avatar"
                                height={90}
                                style={{
                                  margin: "0px 0px 10px",
                                  borderRadius: "200px",
                                  width: "90px",
                                  height: "90px",
                                  maxWidth: "90px",
                                  maxHeight: "90px",
                                  minWidth: "90px",
                                  minHeight: "90px",
                                }}
                                className="signature-avatar"
                              />
                            </p>
                          </td>
                          <td
                            style={{
                              fontFamily: "Arial",
                              color: "#222642",
                              fontSize: "13px",
                              lineHeight: "1.55",
                              minWidth: "400px",
                              width: "100%",
                              verticalAlign: "top",
                            }}
                            valign="top"
                            nowrap
                          >
                            <p
                              className="signature-name colorize"
                              style={{
                                margin: "0px",
                                fontSize: "16px",
                                color: "rgb(50, 142, 247)",
                              }}
                            >
                              Marian Cruz
                            </p>
                            <p
                              className="signature-sub"
                              style={{ margin: 0, marginBottom: "2px" }}
                            >
                              <span className="signature-title">Designer</span>{" "}
                              at{" "}
                              <span
                                className="signature-company colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                MailTag
                              </span>
                            </p>
                            <div
                              className="colorize-bg"
                              style={{
                                background: "rgb(50, 142, 247)",
                                height: "4px",
                                marginBottom: "4px",
                              }}
                            />
                            <p
                              className="signature-address"
                              style={{ margin: 0 }}
                            >
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>A</strong>
                              </span>{" "}
                              <a
                                rel="noreferrer"
                                href="http://maps.google.com/maps?q=Tempe, Arizona. Suite 2532"
                              >
                                Tempe, Arizona. Suite 2532
                              </a>
                            </p>
                            <br />
                            <table
                              border={0}
                              cellSpacing={0}
                              cellPadding={0}
                              style={{ margin: 0 }}
                            >
                              <tbody>
                                <tr>
                                  <td
                                    nowrap
                                    style={{
                                      padding: 0,
                                      fontFamily: "Arial",
                                      fontSize: "13px",
                                      lineHeight: "18px",
                                    }}
                                  >
                                    <p
                                      className="signature-office-phone"
                                      style={{ margin: 0 }}
                                    >
                                      <span
                                        className="colorize"
                                        style={{ color: "rgb(50, 142, 247)" }}
                                      >
                                        <strong>P</strong>
                                      </span>
                                      :{" "}
                                      <a
                                        rel="noreferrer"
                                        href="tel:(+1) 555-555-5555"
                                        style={{
                                          color: "#222642",
                                          textDecoration: "none",
                                        }}
                                      >
                                        (+1) 555-555-5555
                                      </a>
                                    </p>
                                  </td>
                                  <td
                                    id="space-1"
                                    nowrap
                                    style={{
                                      display: "block",
                                      padding: 0,
                                      fontFamily: "Arial",
                                      fontSize: "13px",
                                      lineHeight: "18px",
                                    }}
                                  >
                                    &nbsp;&nbsp;
                                  </td>
                                  <td
                                    nowrap
                                    style={{
                                      padding: 0,
                                      fontFamily: "Arial",
                                      fontSize: "13px",
                                      lineHeight: "18px",
                                    }}
                                  >
                                    <p
                                      className="signature-email"
                                      style={{ margin: 0 }}
                                    >
                                      <span
                                        className="colorize"
                                        style={{ color: "rgb(50, 142, 247)" }}
                                      >
                                        <strong>E</strong>
                                      </span>
                                      :{" "}
                                      <a
                                        rel="noreferrer"
                                        href="mailto:Marian@MailTag.io"
                                        style={{
                                          color: "#222642",
                                          textDecoration: "none",
                                        }}
                                      >
                                        Marian@MailTag.io
                                      </a>
                                    </p>
                                  </td>
                                  <td></td>
                                </tr>
                                <tr></tr>
                              </tbody>
                            </table>
                            <p
                              className="signature-mobile-phone"
                              style={{ margin: "0px", display: "none" }}
                            >
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>M</strong>
                              </span>
                              :{" "}
                              {/* <a
                                rel="noreferrer"
                                href="#!"
                                style={{
                                  color: "#222642",
                                  textDecoration: "none",
                                }}
                              /> */}
                            </p>
                            <p
                              className="signature-home-phone"
                              style={{ margin: "0px", display: "none" }}
                            >
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>H</strong>
                              </span>
                              :{" "}
                              {/* <a
                                rel="noreferrer"
                                href="#!"
                                style={{
                                  color: "#222642",
                                  textDecoration: "none",
                                }}
                              /> */}
                            </p>
                            <p className="signature-url" style={{ margin: 0 }}>
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>W</strong>
                              </span>
                              :{" "}
                              <a
                                href="https://MailTag.io"
                                style={{
                                  color: "#222642",
                                  textDecoration: "none",
                                }}
                              >
                                MailTag.io
                              </a>
                            </p>
                            <p
                              className="signature-calendly"
                              style={{ margin: 0 }}
                            >
                              <strong>
                                <a
                                  rel="noreferrer"
                                  href="https://calendly.com/marian/15min"
                                  style={{
                                    color: "#4d8de4",
                                    textDecoration: "none",
                                  }}
                                >
                                  Schedule a Call
                                </a>
                              </strong>
                            </p>
                            <p
                              style={{
                                margin: 0,
                                marginTop: "5px",
                                maxWidth: "initial",
                              }}
                            >
                              <span className="social-buttons">
                                <a
                                  rel="noreferrer"
                                  href="https://www.linkedin.com"
                                  target="_blank"
                                  style={{
                                    display: "inline-block",
                                    width: "27px",
                                    height: "27px",
                                    lineHeight: "27px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                  }}
                                >
                                  <img
                                    alt=""
                                    style={{
                                      height: "13px",
                                      width: "13px",
                                      verticalAlign: "top",
                                      marginTop: "7px",
                                    }}
                                    src="https://s3.us-west-2.amazonaws.com/signature-images/linkedin.png"
                                  />
                                </a>
                                <a
                                  rel="noreferrer"
                                  href="https://www.facebook.com"
                                  target="_blank"
                                  style={{
                                    display: "inline-block",
                                    width: "27px",
                                    height: "27px",
                                    lineHeight: "27px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                    marginLeft: "2px",
                                  }}
                                >
                                  <img
                                    alt=""
                                    style={{
                                      height: "13px",
                                      width: "13px",
                                      verticalAlign: "top",
                                      marginTop: "7px",
                                    }}
                                    src="https://s3.us-west-2.amazonaws.com/signature-images/fb.png"
                                  />
                                </a>
                                <a
                                  rel="noreferrer"
                                  href="https://www.twitter.com"
                                  target="_blank"
                                  style={{
                                    display: "inline-block",
                                    width: "27px",
                                    height: "27px",
                                    lineHeight: "27px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                    marginLeft: "2px",
                                  }}
                                >
                                  <img
                                    alt=""
                                    style={{
                                      height: "13px",
                                      width: "13px",
                                      verticalAlign: "top",
                                      marginTop: "7px",
                                    }}
                                    src="https://s3.us-west-2.amazonaws.com/signature-images/twitter.png"
                                  />
                                </a>
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr className="banner-tr" />
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="signature-preview"
                    id="signature-template-2"
                    style={{ display: "none" }}
                  >
                    <table
                      className="table-signature"
                      border={0}
                      style={{
                        border: 0,
                        borderSpacing: "10px",
                        marginTop: "60px",
                      }}
                      cellSpacing={10}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              borderRight: "4px solid rgb(50, 142, 247)",
                              verticalAlign: "top",
                              paddingRight: "10px",
                            }}
                            valign="top"
                            className="colorize-border-right"
                          >
                            <p style={{ margin: 0, maxWidth: "initial" }}>
                              <img
                                alt="signature avatar"
                                height={90}
                                width={90}
                                style={{
                                  margin: "0px 0px 10px",
                                  borderRadius: "200px",
                                  width: "90px",
                                  height: "90px",
                                  maxWidth: "90px",
                                  maxHeight: "90px",
                                  minWidth: "90px",
                                  minHeight: "90px",
                                }}
                                className="signature-avatar"
                              />
                            </p>
                          </td>
                          <td
                            style={{
                              fontFamily: "Arial",
                              color: "#222642",
                              fontSize: "13px",
                              lineHeight: "1.55",
                              minWidth: "400px",
                              width: "100%",
                              verticalAlign: "top",
                            }}
                            valign="top"
                            nowrap
                          >
                            <p
                              className="signature-name colorize"
                              style={{
                                margin: "0px",
                                fontSize: "16px",
                                color: "rgb(50, 142, 247)",
                              }}
                            >
                              Marian Cruz
                            </p>
                            <p
                              className="signature-sub"
                              style={{ margin: 0, marginBottom: "4px" }}
                            >
                              <span className="signature-title">Designer</span>{" "}
                              at{" "}
                              <span
                                className="signature-company colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                MailTag
                              </span>
                            </p>
                            <p
                              className="signature-address"
                              style={{ margin: 0 }}
                            >
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>A</strong>
                              </span>
                              :{" "}
                              <a
                                rel="noreferrer"
                                href="http://maps.google.com/maps?q=Tempe, Arizona. Suite 2532"
                              >
                                Tempe, Arizona. Suite 2532
                              </a>
                            </p>
                            <br />
                            <table
                              border={0}
                              cellSpacing={0}
                              cellPadding={0}
                              style={{ margin: 0 }}
                            >
                              <tbody>
                                <tr>
                                  <td nowrap style={{ padding: 0 }}>
                                    <p
                                      className="signature-office-phone"
                                      style={{ margin: 0, fontSize: "13px" }}
                                    >
                                      <span
                                        className="colorize"
                                        style={{ color: "rgb(50, 142, 247)" }}
                                      >
                                        <strong>P</strong>
                                      </span>
                                      :{" "}
                                      <a
                                        rel="noreferrer"
                                        href="tel:(+1) 555-555-5555"
                                        style={{
                                          color: "#222642",
                                          textDecoration: "none",
                                        }}
                                      >
                                        (+1) 555-555-5555
                                      </a>
                                    </p>
                                  </td>
                                  <td
                                    id="space-2"
                                    nowrap
                                    style={{ padding: "0px", display: "block" }}
                                  >
                                    &nbsp;&nbsp;
                                  </td>
                                  <td nowrap style={{ padding: 0 }}>
                                    <p
                                      className="signature-mobile-phone"
                                      style={{
                                        margin: "0px",
                                        fontSize: "13px",
                                        display: "none",
                                      }}
                                    >
                                      <span
                                        className="colorize"
                                        style={{ color: "rgb(50, 142, 247)" }}
                                      >
                                        <strong>M</strong>
                                      </span>
                                      :{" "}
                                      {/* <a
                                        rel="noreferrer"
                                        href="!#"
                                        style={{
                                          color: "#222642",
                                          textDecoration: "none",
                                        }}
                                      /> */}
                                    </p>
                                  </td>
                                  <td></td>
                                </tr>
                                <tr></tr>
                              </tbody>
                            </table>
                            <p
                              className="signature-home-phone"
                              style={{ margin: "0px", display: "none" }}
                            >
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>H</strong>
                              </span>
                              :{" "}
                              {/* <a
                                rel="noreferrer"
                                href="#!"
                                style={{
                                  color: "#222642",
                                  textDecoration: "none",
                                }}
                              /> */}
                            </p>
                            <p className="signature-url" style={{ margin: 0 }}>
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>W</strong>
                              </span>
                              :{" "}
                              <a
                                href="https://MailTag.io"
                                style={{
                                  color: "#222642",
                                  textDecoration: "none",
                                }}
                              >
                                MailTag.io
                              </a>
                            </p>
                            <p
                              className="signature-email"
                              style={{ margin: 0 }}
                            >
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>E</strong>
                              </span>
                              :{" "}
                              <a
                                rel="noreferrer"
                                href="mailto:Marian@MailTag.io"
                                style={{
                                  color: "#222642",
                                  textDecoration: "none",
                                }}
                              >
                                Marian@MailTag.io
                              </a>
                            </p>
                            <p
                              className="signature-calendly"
                              style={{ margin: 0 }}
                            >
                              <strong>
                                <a
                                  rel="noreferrer"
                                  href="https://calendly.com/marian/15min"
                                  style={{
                                    color: "#4d8de4",
                                    textDecoration: "none",
                                  }}
                                >
                                  Schedule a Call
                                </a>
                              </strong>
                            </p>
                            <p
                              style={{
                                margin: 0,
                                marginTop: "5px",
                                maxWidth: "initial",
                              }}
                            >
                              <span className="social-buttons">
                                <a
                                  rel="noreferrer"
                                  href="https://www.linkedin.com"
                                  target="_blank"
                                  style={{
                                    display: "inline-block",
                                    width: "27px",
                                    height: "27px",
                                    lineHeight: "27px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                  }}
                                >
                                  <img
                                    alt=""
                                    style={{
                                      height: "13px",
                                      width: "13px",
                                      verticalAlign: "top",
                                      marginTop: "7px",
                                    }}
                                    src="https://s3.us-west-2.amazonaws.com/signature-images/linkedin.png"
                                  />
                                </a>
                                <a
                                  rel="noreferrer"
                                  href="https://www.facebook.com"
                                  target="_blank"
                                  style={{
                                    display: "inline-block",
                                    width: "27px",
                                    height: "27px",
                                    lineHeight: "27px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                    marginLeft: "2px",
                                  }}
                                >
                                  <img
                                    alt=""
                                    style={{
                                      height: "13px",
                                      width: "13px",
                                      verticalAlign: "top",
                                      marginTop: "7px",
                                    }}
                                    src="https://s3.us-west-2.amazonaws.com/signature-images/fb.png"
                                  />
                                </a>
                                <a
                                  rel="noreferrer"
                                  href="https://www.twitter.com"
                                  target="_blank"
                                  style={{
                                    display: "inline-block",
                                    width: "27px",
                                    height: "27px",
                                    lineHeight: "27px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                    marginLeft: "2px",
                                  }}
                                >
                                  <img
                                    alt=""
                                    style={{
                                      height: "13px",
                                      width: "13px",
                                      verticalAlign: "top",
                                      marginTop: "7px",
                                    }}
                                    src="https://s3.us-west-2.amazonaws.com/signature-images/twitter.png"
                                  />
                                </a>
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr className="banner-tr" />
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="signature-preview"
                    id="signature-template-3"
                    style={{ display: "none" }}
                  >
                    <table
                      border={0}
                      style={{
                        borderWidth: "0px 0px 4px",
                        borderTopStyle: "initial",
                        borderRightStyle: "initial",
                        borderLeftStyle: "initial",
                        borderTopColor: "initial",
                        borderRightColor: "initial",
                        borderLeftColor: "initial",
                        borderImage: "initial",
                        margin: "60px 20px 0px",
                        width: "520px",
                        maxWidth: "100vw",
                        borderBottomStyle: "solid",
                        borderBottomColor: "rgb(50, 142, 247)",
                        minWidth: "400px",
                      }}
                      className="colorize-border-bottom"
                      cellSpacing={0}
                    >
                      <tbody>
                        <tr>
                          <td
                            nowrap
                            style={{
                              fontFamily: "Arial",
                              fontSize: "16px",
                              lineHeight: "18px",
                            }}
                          >
                            <p className="signature-name" style={{ margin: 0 }}>
                              Marian Cruz
                            </p>
                          </td>
                          <td
                            nowrap
                            style={{
                              fontFamily: "Arial",
                              fontSize: "14px",
                              lineHeight: "18px",
                              textAlign: "right",
                            }}
                            align="right"
                          >
                            <span className="signature-title">Designer</span>{" "}
                            <span className="signature-pipe">@</span>{" "}
                            <span className="signature-company">MailTag</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      className="table-signature"
                      border={0}
                      style={{
                        border: 0,
                        margin: 0,
                        marginTop: "-10px",
                        borderSpacing: "20px",
                      }}
                      cellSpacing={20}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              verticalAlign: "top",
                            }}
                            valign="top"
                          >
                            <p style={{ margin: 0, maxWidth: "initial" }}>
                              <img
                                alt="signature avatar"
                                height={90}
                                width={90}
                                style={{
                                  margin: "0px 0px 10px",
                                  borderRadius: "200px",
                                  width: "90px",
                                  height: "90px",
                                  maxWidth: "90px",
                                  maxHeight: "90px",
                                  minWidth: "90px",
                                  minHeight: "90px",
                                }}
                                className="signature-avatar"
                              />
                            </p>
                          </td>
                          <td
                            style={{
                              fontFamily: "Arial",
                              color: "#222642",
                              fontSize: "13px",
                              lineHeight: "1.55",
                              verticalAlign: "top",
                            }}
                            valign="top"
                            nowrap
                          >
                            <p
                              className="signature-office-phone"
                              style={{ margin: 0 }}
                            >
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>Office Phone</strong>
                              </span>
                              :{" "}
                              <a
                                href="tel:(+1) 555-555-5555"
                                style={{
                                  color: "#222642",
                                  textDecoration: "none",
                                }}
                              >
                                (+1) 555-555-5555
                              </a>
                            </p>
                            <p
                              className="signature-mobile-phone"
                              style={{ margin: "0px", display: "none" }}
                            >
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>Mobile Phone</strong>
                              </span>
                              :{" "}
                              {/* <a
                                rel="noreferrer"
                                href="#!"
                                style={{
                                  color: "#222642",
                                  textDecoration: "none",
                                }}
                              /> */}
                            </p>
                            <p
                              className="signature-home-phone"
                              style={{ margin: "0px", display: "none" }}
                            >
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>Home Phone</strong>
                              </span>
                              :{" "}
                              {/* <a
                                rel="noreferrer"
                                href="#!"
                                style={{
                                  color: "#222642",
                                  textDecoration: "none",
                                }}
                              /> */}
                            </p>
                            <p className="signature-url" style={{ margin: 0 }}>
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>Site</strong>
                              </span>
                              :{" "}
                              <a
                                rel="noreferrer"
                                href="https://MailTag.io"
                                style={{
                                  color: "#222642",
                                  textDecoration: "none",
                                }}
                              >
                                MailTag.io
                              </a>
                            </p>
                            <p
                              className="signature-email"
                              style={{ margin: 0 }}
                            >
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>Email</strong>
                              </span>
                              :{" "}
                              <a
                                rel="noreferrer"
                                href="mailto:Marian@MailTag.io"
                                style={{
                                  color: "#222642",
                                  textDecoration: "none",
                                }}
                              >
                                Marian@MailTag.io
                              </a>
                            </p>
                            <p
                              className="signature-address"
                              style={{ margin: 0 }}
                            >
                              <span
                                className="colorize"
                                style={{ color: "rgb(50, 142, 247)" }}
                              >
                                <strong>Address</strong>
                              </span>
                              :{" "}
                              <a
                                rel="noreferrer"
                                href="http://maps.google.com/maps?q=Tempe, Arizona. Suite 2532"
                                style={{ opacity: "0.6" }}
                              >
                                Tempe, Arizona. Suite 2532
                              </a>
                            </p>
                            <p
                              className="signature-calendly"
                              style={{ margin: 0 }}
                            >
                              <strong>
                                <a
                                  rel="noreferrer"
                                  href="https://calendly.com/marian/15min"
                                  style={{
                                    color: "#4d8de4",
                                    textDecoration: "none",
                                  }}
                                >
                                  Schedule a Call
                                </a>
                              </strong>
                            </p>
                            <p
                              style={{
                                margin: 0,
                                maxWidth: "initial",
                                marginTop: "6px",
                              }}
                            >
                              <span className="social-buttons">
                                <a
                                  rel="noreferrer"
                                  href="https://www.linkedin.com"
                                  target="_blank"
                                  style={{
                                    display: "inline-block",
                                    width: "27px",
                                    height: "27px",
                                    lineHeight: "27px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                  }}
                                >
                                  <img
                                    alt=""
                                    style={{
                                      height: "13px",
                                      width: "13px",
                                      verticalAlign: "top",
                                      marginTop: "7px",
                                    }}
                                    src="https://s3.us-west-2.amazonaws.com/signature-images/linkedin.png"
                                  />
                                </a>
                                <a
                                  rel="noreferrer"
                                  href="https://www.facebook.com"
                                  target="_blank"
                                  style={{
                                    display: "inline-block",
                                    width: "27px",
                                    height: "27px",
                                    lineHeight: "27px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                    marginLeft: "2px",
                                  }}
                                >
                                  <img
                                    alt=""
                                    style={{
                                      height: "13px",
                                      width: "13px",
                                      verticalAlign: "top",
                                      marginTop: "7px",
                                    }}
                                    src="https://s3.us-west-2.amazonaws.com/signature-images/fb.png"
                                  />
                                </a>
                                <a
                                  rel="noreferrer"
                                  href="https://www.twitter.com"
                                  target="_blank"
                                  style={{
                                    display: "inline-block",
                                    width: "27px",
                                    height: "27px",
                                    lineHeight: "27px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                    marginLeft: "2px",
                                  }}
                                >
                                  <img
                                    alt=""
                                    style={{
                                      height: "13px",
                                      width: "13px",
                                      verticalAlign: "top",
                                      marginTop: "7px",
                                    }}
                                    src="https://s3.us-west-2.amazonaws.com/signature-images/twitter.png"
                                  />
                                </a>
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr className="banner-tr" />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <label
                className="check-line"
                style={{
                  paddingBottom: "0px",
                  paddingTop: "10px",
                  margin: "auto",
                  width: "55%",
                  fontSize: "19px",
                  cursor: "auto",
                }}
              >
                <span
                  className="label"
                  style={{ fontWeight: 400, fontSize: "19px" }}
                >
                  Signature Name:
                </span>
              </label>
              <div className="field" style={{ margin: "auto", width: "50%" }}>
                <input
                  placeholder="Signature Name"
                  type="text"
                  id="signature-name"
                />
              </div>
              <div className="signature-buttons">
                <div
                  id="signature-prev-template"
                  className="signature-button"
                  style={{ paddingLeft: "12px", paddingRight: "15px" }}
                >
                  <img
                    alt=""
                    src="/img/left-nav-arrow.svg"
                    style={{ margin: "7px 0px" }}
                  />
                </div>
                <div id="signature-save" className="signature-button">
                  Save Signature
                </div>
                <div
                  id="signature-next-template"
                  className="signature-button"
                  style={{ paddingLeft: "15px", paddingRight: "12px" }}
                >
                  <img
                    alt=""
                    src="/img/right-nav-arrow.svg"
                    style={{ margin: "7px 0px" }}
                  />
                </div>
              </div>
            </div>
            <div id="signature-id" signature-id style={{ display: "none" }} />
            <div id="signature-image" style={{ display: "none" }}>
              3bc5dccf-0fa2-8801-d24e-421969a09bc1
            </div>
            <div id="signature-banner" style={{ display: "none" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewSignature;
