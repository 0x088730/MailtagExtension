import React from "react";
import { Col, Row } from "reactstrap";
import "../../../../assets/css/pingDetails.css";
import pingSetting from "../../../../assets/img/pings-settings.svg";
import editPingName from "../../../../assets/img/edit-ping-name.svg";
import dropDownArrow from "../../../../assets/img/dropdown-arrow.svg";
import previewSvg from "../../../../assets/img/preview.svg";
import addNewPingSequence from "../../../../assets/img/add-new-ping-sequence.svg";
export default function NewPingSequences() {
  return (
    <>
      <div className="content container new-pings-content">
        <Row>
          <Col md="12">
            <div className="row">
              <div
                className="row header-ping"
                style={{ margin: "40px 0px", display: "block" }}
              >
                <div className="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-2"></div>
                <div
                  className="col-lg-7 col-xl-7 col-md-7 col-sm-7 col-xs-12 name-container"
                  style={{ width: 812, height: 75 }}
                >
                  <div className="row">
                    <div className="col-lg-7 col-xl-7 col-md-7 col-sm-7 col-xs-7">
                      <input
                        autoFocus={true}
                        className="form-control ping-name"
                        id="usr"
                        maxLength={30}
                        placeholder="Name"
                        required=""
                        type="text"
                        defaultValue=""
                        style={{ width: 77, borderBottom: "0px solid" }}
                      />
                      <img
                        className="ping-name-img"
                        alt="Edit Ping name"
                        src={editPingName}
                        style={{ display: "inline-block" }}
                      />
                      <div className="ping-name-error">
                        <span>You cannot leave this field empty.</span>
                      </div>
                    </div>
                    <div
                      id="settings-button-column"
                      className="col-lg-5 col-xl-5 col-md-5 col-sm-5 col-xs-5"
                      style={{ textAlign: "right" }}
                    >
                      <button className="settings">
                        <img src={pingSetting} alt="Ping Settings" />
                        Settings
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-2"></div>
              </div>
              <div
                className="row all-pings db-ping"
                style={{ margin: "40px 0px", display: "block" }}
              >
                <div className="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-0"></div>
                <div className="col-lg-1 col-xl-1 col-md-1 col-sm-1 col-xs-12">
                  <div className="day text-center">
                    <b className="day-cnt">01</b>
                    <span className="day-txt">DAY</span>
                  </div>
                  <div className="vertical-line" style={{ height: 304 }}></div>
                </div>
                <div className="col-lg-7 col-xl-7 col-md-7 col-sm-7 col-xs-12 editor-row">
                  <div className="row editor-header">
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-12">
                      <input
                        type="text"
                        name="ping_name"
                        className="form-control ping-no"
                        defaultValue=""
                        placeholder="Subject Line"
                      />
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xs-12 text-right nice-select-column">
                      <select
                        className="header-day-count form-control"
                        value=""
                        style={{ display: "none" }}
                      >
                        <option id={1} defaultValue="1">
                          1
                        </option>
                        <option id={2}>2</option>
                        <option id={3}>3</option>
                        <option id={4}>4</option>
                        <option id={5}>5</option>
                        <option id={6}>6</option>
                        <option id={7}>7</option>
                        <option id={8}>8</option>
                        <option id={9}>9</option>
                        <option id={10}>10</option>
                        <option id={11}>11</option>
                        <option id={12}>12</option>
                        <option id={13}>13</option>
                        <option id={14}>14</option>
                        <option id={15}>15</option>
                        <option id={16}>16</option>
                        <option id={17}>17</option>
                        <option id={18}>18</option>
                        <option id={19}>19</option>
                        <option id={20}>20</option>
                        <option id={21}>21</option>
                        <option id={22}>22</option>
                        <option id={23}>23</option>
                        <option id={24}>24</option>
                        <option id={25}>25</option>
                        <option id={26}>26</option>
                        <option id={27}>27</option>
                        <option id={28}>28</option>
                        <option id={29}>29</option>
                        <option id={30}>30</option>
                      </select>
                      <div
                        className="nice-select header-day-count form-control"
                        tabIndex={0}
                      >
                        <span className="current">1</span>
                        <img
                          src={dropDownArrow}
                          alt="dropDownArrow"
                          style={{ margin: "0px 8px" }}
                        />
                        <ul className="list" style={{ left: "26%" }}>
                          <li
                            data-value={1}
                            className="option selected"
                            style={{ display: "block" }}
                          >
                            1
                          </li>
                          <li
                            data-value={2}
                            className="option"
                            style={{ display: "block" }}
                          >
                            2
                          </li>
                          <li
                            data-value={3}
                            className="option"
                            style={{ display: "block" }}
                          >
                            3
                          </li>
                          <li
                            data-value={4}
                            className="option"
                            style={{ display: "block" }}
                          >
                            4
                          </li>
                          <li
                            data-value={5}
                            className="option"
                            style={{ display: "block" }}
                          >
                            5
                          </li>
                          <li
                            data-value={6}
                            className="option"
                            style={{ display: "block" }}
                          >
                            6
                          </li>
                          <li
                            data-value={7}
                            className="option"
                            style={{ display: "block" }}
                          >
                            7
                          </li>
                          <li
                            data-value={8}
                            className="option"
                            style={{ display: "block" }}
                          >
                            8
                          </li>
                          <li
                            data-value={9}
                            className="option"
                            style={{ display: "block" }}
                          >
                            9
                          </li>
                          <li
                            data-value={10}
                            className="option"
                            style={{ display: "block" }}
                          >
                            10
                          </li>
                          <li
                            data-value={11}
                            className="option"
                            style={{ display: "block" }}
                          >
                            11
                          </li>
                          <li
                            data-value={12}
                            className="option"
                            style={{ display: "block" }}
                          >
                            12
                          </li>
                          <li
                            data-value={13}
                            className="option"
                            style={{ display: "block" }}
                          >
                            13
                          </li>
                          <li
                            data-value={14}
                            className="option"
                            style={{ display: "block" }}
                          >
                            14
                          </li>
                          <li
                            data-value={15}
                            className="option"
                            style={{ display: "block" }}
                          >
                            15
                          </li>
                          <li
                            data-value={16}
                            className="option"
                            style={{ display: "block" }}
                          >
                            16
                          </li>
                          <li
                            data-value={17}
                            className="option"
                            style={{ display: "block" }}
                          >
                            17
                          </li>
                          <li
                            data-value={18}
                            className="option"
                            style={{ display: "block" }}
                          >
                            18
                          </li>
                          <li
                            data-value={19}
                            className="option"
                            style={{ display: "block" }}
                          >
                            19
                          </li>
                          <li
                            data-value={20}
                            className="option"
                            style={{ display: "block" }}
                          >
                            20
                          </li>
                          <li
                            data-value={21}
                            className="option"
                            style={{ display: "block" }}
                          >
                            21
                          </li>
                          <li
                            data-value={22}
                            className="option"
                            style={{ display: "block" }}
                          >
                            22
                          </li>
                          <li
                            data-value={23}
                            className="option"
                            style={{ display: "block" }}
                          >
                            23
                          </li>
                          <li
                            data-value={24}
                            className="option"
                            style={{ display: "block" }}
                          >
                            24
                          </li>
                          <li
                            data-value={25}
                            className="option"
                            style={{ display: "block" }}
                          >
                            25
                          </li>
                          <li
                            data-value={26}
                            className="option"
                            style={{ display: "block" }}
                          >
                            26
                          </li>
                          <li
                            data-value={27}
                            className="option"
                            style={{ display: "block" }}
                          >
                            27
                          </li>
                          <li
                            data-value={28}
                            className="option"
                            style={{ display: "block" }}
                          >
                            28
                          </li>
                          <li
                            data-value={29}
                            className="option"
                            style={{ display: "block" }}
                          >
                            29
                          </li>
                          <li
                            data-value={30}
                            className="option"
                            style={{ display: "block" }}
                          >
                            30
                          </li>
                        </ul>
                      </div>
                      <span className="header-day-line">
                        {" "}
                        day after{" "}
                        <span className="bold-span">original email</span>
                      </span>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-12">
                      <div
                        className="preview-btn"
                        style={{ display: "inline-block" }}
                      >
                        <div aria-hidden="true" className="preview-text">
                          <span className="pre-text">
                            <img
                              className="eye-img"
                              src={previewSvg}
                              alt="Preview "
                            />
                            Preview
                          </span>
                        </div>
                      </div>
                      <button
                        className="close close-ping"
                        type="button"
                        disabled="disabled"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="mceu_11"
                    className="mce-tinymce mce-container mce-panel"
                    hidefocus={1}
                    tabIndex={-1}
                    role="application"
                    style={{ visibility: "hidden", borderWidth: 1, width: 650 }}
                  >
                    <div
                      id="mceu_11-body"
                      className="mce-container-body mce-stack-layout"
                    >
                      <div
                        id="mceu_12"
                        className="mce-top-part mce-container mce-stack-layout-item mce-first"
                      >
                        <div id="mceu_12-body" className="mce-container-body">
                          <div
                            id="mceu_13"
                            className="mce-toolbar-grp mce-container mce-panel mce-first mce-last"
                            hidefocus={1}
                            tabIndex={-1}
                            role="group"
                          >
                            <div
                              id="mceu_13-body"
                              className="mce-container-body mce-stack-layout"
                            >
                              <div
                                id="mceu_14"
                                className="mce-container mce-toolbar mce-stack-layout-item mce-first mce-last"
                                role="toolbar"
                              >
                                <div
                                  id="mceu_14-body"
                                  className="mce-container-body mce-flow-layout"
                                >
                                  <div
                                    id="mceu_15"
                                    className="mce-container mce-flow-layout-item mce-first mce-last mce-btn-group"
                                    role="group"
                                  >
                                    <div id="mceu_15-body">
                                      <div
                                        id="mceu_0"
                                        className="mce-widget mce-btn mce-first"
                                        tabIndex={-1}
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Bold"
                                      >
                                        <button
                                          id="mceu_0-button"
                                          role="presentation"
                                          type="button"
                                          tabIndex={-1}
                                        >
                                          <i className="mce-ico mce-i-bold" />
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_1"
                                        className="mce-widget mce-btn"
                                        tabIndex={-1}
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Italic"
                                      >
                                        <button
                                          id="mceu_1-button"
                                          role="presentation"
                                          type="button"
                                          tabIndex={-1}
                                        >
                                          <i className="mce-ico mce-i-italic" />
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_2"
                                        className="mce-widget mce-btn"
                                        tabIndex={-1}
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Underline"
                                      >
                                        <button
                                          id="mceu_2-button"
                                          role="presentation"
                                          type="button"
                                          tabIndex={-1}
                                        >
                                          <i className="mce-ico mce-i-underline" />
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_3"
                                        className="mce-widget mce-btn"
                                        tabIndex={-1}
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Strikethrough"
                                      >
                                        <button
                                          id="mceu_3-button"
                                          role="presentation"
                                          type="button"
                                          tabIndex={-1}
                                        >
                                          <i className="mce-ico mce-i-strikethrough" />
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_4"
                                        className="mce-widget mce-btn"
                                        tabIndex={-1}
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Align left"
                                      >
                                        <button
                                          id="mceu_4-button"
                                          role="presentation"
                                          type="button"
                                          tabIndex={-1}
                                        >
                                          <i className="mce-ico mce-i-alignleft" />
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_5"
                                        className="mce-widget mce-btn"
                                        tabIndex={-1}
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Align center"
                                      >
                                        <button
                                          id="mceu_5-button"
                                          role="presentation"
                                          type="button"
                                          tabIndex={-1}
                                        >
                                          <i className="mce-ico mce-i-aligncenter" />
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_6"
                                        className="mce-widget mce-btn"
                                        tabIndex={-1}
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Align right"
                                      >
                                        <button
                                          id="mceu_6-button"
                                          role="presentation"
                                          type="button"
                                          tabIndex={-1}
                                        >
                                          <i className="mce-ico mce-i-alignright" />
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_7"
                                        className="mce-widget mce-btn"
                                        tabIndex={-1}
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Justify"
                                      >
                                        <button
                                          id="mceu_7-button"
                                          role="presentation"
                                          type="button"
                                          tabIndex={-1}
                                        >
                                          <i className="mce-ico mce-i-alignjustify" />
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_8"
                                        className="mce-widget mce-btn"
                                        tabIndex={-1}
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Insert/edit link"
                                      >
                                        <button
                                          id="mceu_8-button"
                                          role="presentation"
                                          type="button"
                                          tabIndex={-1}
                                        >
                                          <i className="mce-ico mce-i-link" />
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_9"
                                        className="mce-widget mce-btn"
                                        tabIndex={-1}
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Numbered list"
                                      >
                                        <button
                                          id="mceu_9-button"
                                          role="presentation"
                                          type="button"
                                          tabIndex={-1}
                                        >
                                          <i className="mce-ico mce-i-numlist" />
                                        </button>
                                      </div>
                                      <div
                                        id="mceu_10"
                                        className="mce-widget mce-btn mce-last"
                                        tabIndex={-1}
                                        aria-pressed="false"
                                        role="button"
                                        aria-label="Bullet list"
                                      >
                                        <button
                                          id="mceu_10-button"
                                          role="presentation"
                                          type="button"
                                          tabIndex={-1}
                                        >
                                          <i className="mce-ico mce-i-bullist" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="mceu_16"
                        className="mce-edit-area mce-container mce-panel mce-stack-layout-item"
                        hidefocus={1}
                        tabIndex={-1}
                        role="group"
                        style={{ borderWidth: "1px 0px 0px" }}
                      >
                        TextEditor
                      </div>
                      <div
                        id="mceu_17"
                        className="mce-statusbar mce-container mce-panel mce-stack-layout-item mce-last"
                        hidefocus={1}
                        tabIndex={-1}
                        role="group"
                        style={{ borderWidth: "1px 0px 0px" }}
                      >
                        <div
                          id="mceu_17-body"
                          className="mce-container-body mce-flow-layout"
                        >
                          <div
                            id="mceu_18"
                            className="mce-path mce-flow-layout-item mce-first"
                          >
                            <div className="mce-path-item">
                              If you don’t receive a reply, this will be sent{" "}
                              <span className="bold-span">
                                1 day after your original email
                              </span>
                            </div>
                          </div>
                          <div
                            id="mceu_19"
                            className="mce-flow-layout-item mce-last mce-resizehandle"
                          >
                            <i className="mce-ico mce-i-resize" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <textarea
                    className="pings-editor"
                    id="mce_0"
                    aria-hidden="true"
                    style={{ display: "none" }}
                    defaultValue={"                "}
                  />
                  <span hidden="true">
                    <h4>Add Data</h4>
                  </span>
                </div>
                <div className="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-2"></div>
              </div>
              <div
                className="row empty-ping"
                hidden="true"
                style={{ margin: "40px 0px 40px 0px" }}
              >
                <div className="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-2"></div>
                <div className="col-lg-1 col-xl-1 col-md-1 col-sm-1 col-xs-1">
                  <div className="day text-center">
                    <b className="day-cnt">01</b>
                    <span className="day-txt">DAY</span>
                  </div>
                  <div className="vertical-line"></div>
                </div>
                <div className="col-lg-7 col-xl-7 col-md-7 col-sm-7 col-xs-7 editor-row">
                  <div className="row editor-header">
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3">
                      <input
                        type="text"
                        name="ping_name"
                        className="form-control ping-no"
                        defaultValue=""
                        placeholder="Subject Line"
                      />
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xs-6 text-right nice-select-column">
                      <select
                        className="header-day-count form-control"
                        value={1}
                        style={{ display: "none" }}
                      >
                        <option id={1}>1</option>
                        <option id={2}>2</option>
                        <option id={3}>3</option>
                        <option id={4}>4</option>
                        <option id={5}>5</option>
                        <option id={6}>6</option>
                        <option id={7}>7</option>
                        <option id={8}>8</option>
                        <option id={9}>9</option>
                        <option id={10}>10</option>
                        <option id={11}>11</option>
                        <option id={12}>12</option>
                        <option id={13}>13</option>
                        <option id={14}>14</option>
                        <option id={15}>15</option>
                        <option id={16}>16</option>
                        <option id={17}>17</option>
                        <option id={18}>18</option>
                        <option id={19}>19</option>
                        <option id={20}>20</option>
                        <option id={21}>21</option>
                        <option id={22}>22</option>
                        <option id={23}>23</option>
                        <option id={24}>24</option>
                        <option id={25}>25</option>
                        <option id={26}>26</option>
                        <option id={27}>27</option>
                        <option id={28}>28</option>
                        <option id={29}>29</option>
                        <option id={30}>30</option>
                      </select>
                      <div
                        className="nice-select header-day-count form-control"
                        tabIndex={0}
                      >
                        <span className="current">1</span>
                        <img
                          src={dropDownArrow}
                          alt="Drop Down Arrow"
                          style={{ margin: "0px 8px" }}
                        />
                        <ul className="list">
                          <li
                            data-value={1}
                            className="option selected"
                            style={{ display: "block" }}
                          >
                            1
                          </li>
                          <li
                            data-value={2}
                            className="option"
                            style={{ display: "block" }}
                          >
                            2
                          </li>
                          <li
                            data-value={3}
                            className="option"
                            style={{ display: "block" }}
                          >
                            3
                          </li>
                          <li
                            data-value={4}
                            className="option"
                            style={{ display: "block" }}
                          >
                            4
                          </li>
                          <li
                            data-value={5}
                            className="option"
                            style={{ display: "block" }}
                          >
                            5
                          </li>
                          <li
                            data-value={6}
                            className="option"
                            style={{ display: "block" }}
                          >
                            6
                          </li>
                          <li
                            data-value={7}
                            className="option"
                            style={{ display: "block" }}
                          >
                            7
                          </li>
                          <li
                            data-value={8}
                            className="option"
                            style={{ display: "block" }}
                          >
                            8
                          </li>
                          <li
                            data-value={9}
                            className="option"
                            style={{ display: "block" }}
                          >
                            9
                          </li>
                          <li
                            data-value={10}
                            className="option"
                            style={{ display: "block" }}
                          >
                            10
                          </li>
                          <li
                            data-value={11}
                            className="option"
                            style={{ display: "block" }}
                          >
                            11
                          </li>
                          <li
                            data-value={12}
                            className="option"
                            style={{ display: "block" }}
                          >
                            12
                          </li>
                          <li
                            data-value={13}
                            className="option"
                            style={{ display: "block" }}
                          >
                            13
                          </li>
                          <li
                            data-value={14}
                            className="option"
                            style={{ display: "block" }}
                          >
                            14
                          </li>
                          <li
                            data-value={15}
                            className="option"
                            style={{ display: "block" }}
                          >
                            15
                          </li>
                          <li
                            data-value={16}
                            className="option"
                            style={{ display: "block" }}
                          >
                            16
                          </li>
                          <li
                            data-value={17}
                            className="option"
                            style={{ display: "block" }}
                          >
                            17
                          </li>
                          <li
                            data-value={18}
                            className="option"
                            style={{ display: "block" }}
                          >
                            18
                          </li>
                          <li
                            data-value={19}
                            className="option"
                            style={{ display: "block" }}
                          >
                            19
                          </li>
                          <li
                            data-value={20}
                            className="option"
                            style={{ display: "block" }}
                          >
                            20
                          </li>
                          <li
                            data-value={21}
                            className="option"
                            style={{ display: "block" }}
                          >
                            21
                          </li>
                          <li
                            data-value={22}
                            className="option"
                            style={{ display: "block" }}
                          >
                            22
                          </li>
                          <li
                            data-value={23}
                            className="option"
                            style={{ display: "block" }}
                          >
                            23
                          </li>
                          <li
                            data-value={24}
                            className="option"
                            style={{ display: "block" }}
                          >
                            24
                          </li>
                          <li
                            data-value={25}
                            className="option"
                            style={{ display: "block" }}
                          >
                            25
                          </li>
                          <li
                            data-value={26}
                            className="option"
                            style={{ display: "block" }}
                          >
                            26
                          </li>
                          <li
                            data-value={27}
                            className="option"
                            style={{ display: "block" }}
                          >
                            27
                          </li>
                          <li
                            data-value={28}
                            className="option"
                            style={{ display: "block" }}
                          >
                            28
                          </li>
                          <li
                            data-value={29}
                            className="option"
                            style={{ display: "block" }}
                          >
                            29
                          </li>
                          <li
                            data-value={30}
                            className="option"
                            style={{ display: "block" }}
                          >
                            30
                          </li>
                        </ul>
                      </div>
                      <span className="header-day-line">days after sent</span>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3">
                      <div
                        className="preview-btn"
                        style={{ display: "inline-block" }}
                      >
                        <div aria-hidden="true" className="preview-text">
                          <span className="pre-text">
                            <img
                              className="eye-img"
                              alt="Preview Svg"
                              src={previewSvg}
                            />{" "}
                            Preview
                          </span>
                        </div>
                      </div>
                      <button
                        className="close close-ping"
                        type="button"
                        disabled="disabled"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                  </div>
                  <textarea
                    className="empty-ping-editor"
                    defaultValue={"                "}
                  />
                  <span hidden="true"></span>
                </div>
                <div className="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-2"></div>
              </div>
              <div
                className="row all-pings add-ping-row"
                style={{ margin: "40px 0px", display: "block" }}
              >
                <div className="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-0"></div>
                <div className="col-lg-1 col-xl-1 col-md-1 col-sm-1 col-xs-6">
                  <img
                    className="add-img text-center"
                    src={addNewPingSequence}
                    alt="add new ping sequence "
                    style={{ display: "block" }}
                  />
                </div>
                <div
                  className="col-lg-7 col-xl-7 col-md-7 col-sm-7 col-xs-6 save-ping-buttons"
                  style={{ width: 682, textAlign: "right", paddingTop: 6 }}
                >
                  <button
                    className="save-ping win_btn_padding_bottom"
                    type="button"
                  >
                    Save Ping Sequence
                  </button>
                  <button
                    className="discard-ping win_btn_padding_bottom"
                    type="button"
                  >
                    Discard
                  </button>
                </div>
                <div className="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-0"></div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div id="ping-seq-spinner" style={{ display: "none" }}></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
