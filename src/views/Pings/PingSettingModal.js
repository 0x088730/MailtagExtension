import React from "react";
import closeBtn from "../../assets/img/payment-modal-close.svg";
const PingSettingModal = () => {
  return (
    <>
      <div className="modal-content ping-settings-modal-content">
        <div className="modal-header ping-settings-modal-header">
          <button className="close" data-dismiss="modal" type="button">
            <img src={closeBtn} alt="close btn" />
          </button>
          <h4 className="modal-title ping-settings-modal-title">
            Follow-Up Sequence #1 Settings
          </h4>
        </div>
        <div className="modal-body">
          <div className="timezone-title">Timezone</div>
          <div className="wrap-select" id="date-picker">
            <div className="custom-select">
              <a href="#!">
                <span>UTC</span>
              </a>
            </div>
            <div className="days-title">Don’t send Pings on these days</div>
            <div className="day-select">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label className="container-cb">
                        Sun
                        <input
                          className="check-day"
                          id="sun"
                          style={{ display: " none" }}
                          type="checkbox"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>
                      <label className="container-cb">
                        Mon
                        <input
                          className="check-day"
                          id="mon"
                          style={{ display: " none" }}
                          type="checkbox"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>
                      <label className="container-cb">
                        Tue
                        <input
                          className="check-day"
                          id="tue"
                          style={{ display: " none" }}
                          type="checkbox"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>
                      <label className="container-cb">
                        Wed
                        <input
                          className="check-day"
                          id="wed"
                          style={{ display: " none" }}
                          type="checkbox"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>
                      <label className="container-cb">
                        Thu
                        <input
                          className="check-day"
                          id="thu"
                          style={{ display: " none" }}
                          type="checkbox"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>
                      <label className="container-cb">
                        Fri
                        <input
                          className="check-day"
                          id="fri"
                          style={{ display: " none" }}
                          type="checkbox"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                    <td>
                      <label className="container-cb">
                        Sat
                        <input
                          className="check-day"
                          id="sat"
                          style={{ display: " none" }}
                          type="checkbox"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row time-slide">
              <div className="col-lg-8 col-xl-8 col-md-8 col-sm-8 pull-left time-slide-title">
                Only send Pings between specific times
              </div>
              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 time-slide-toggle">
                <input
                  className="switch-input"
                  id="time-toggle"
                  name="time-toggle"
                  type="checkbox"
                />
                <label
                  className="switch-label pull-right"
                  for="time-toggle"
                ></label>
              </div>
            </div>
            <div className="show-time time-state" style={{ display: " none" }}>
              <div
                className="wrapper-dropdown-3"
                id="dd-time1"
                style={{ display: " inlineBlock" }}
              >
                <span className="time1">9:00 AM</span>
              </div>
              <div className="row special-day-slide">
                <div className="col-lg-8 col-xl-8 col-md-8 col-sm-8 pull-left special-day-slide-title">
                  Don’t send Pings on special holidays
                  <br />
                  <div className="special-day-span">
                    For example; 4th of July, Labor Day Weekend, Christmas, etc.
                  </div>
                  <br />
                </div>
                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 special-day-toggle">
                  <input
                    className="switch-input"
                    id="special-day-toggle"
                    name="special-day-toggle"
                    type="checkbox"
                  />
                  <label
                    className="switch-label pull-right"
                    for="special-day-toggle"
                  ></label>
                </div>
              </div>
            </div>
            <div className="modal-footer ping-settings-footer ping-settings-modal-footer">
              <button className="save-ping-settings win_btn_padding_bottom">
                Save
              </button>
              <button className="close-ping-settings win_btn_padding_bottom">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PingSettingModal;
