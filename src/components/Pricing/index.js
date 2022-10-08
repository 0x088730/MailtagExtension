import React from "react";
import ReactTooltip from "react-tooltip";
import { Col, Row } from "reactstrap";
import pricingHighlights from "utils/pricingHighlights";

const Pricing = ({ active }) => {
  const classOfSides = [
    {
      style: {
        paddingLeft: "0px",
        width: "350px",
        display: "inline-block",
      },
      class: "left-side-pricing-details",
    },
    {
      style: {
        width: "250px",
        paddingLeft: "25px",
        display: "inline-block",
      },
      class: "right-side-pricing-details",
    },
  ];

  return (
    <>
      <div>
        <Row>
          <Col lg={8}>
            <div className="pricing-box monthly-pricing-box">
              <div className="pricing-box-content">
                <div className="popular-badge">
                  <span>
                    SPECIAL NEW
                    <br />
                    CUSTOMER
                    <br />
                    SAVINGS
                    <br />
                  </span>
                </div>
                <div className="pricing-box-plan">PRO</div>
                <div className="pricing-box-price">
                  <span className="display-price">
                    <span className="dollar">$</span>
                    <span className="price">
                      {active === "1" ? <span>9.99</span> : <span>12.99</span>}{" "}
                      /m
                    </span>
                  </span>
                  <span
                    className="pricing-box-off-price"
                    style={{ display: "inline-block" }}
                  >
                    ${active === "1" ? 18 : 25}
                  </span>
                </div>
                <div className="pricing-box-billing">
                  Per User, Billed Yearly
                </div>
                <div className="pricing-box-plan-details">
                  {pricingHighlights.map((ulItem, index) => {
                    return (
                      <div
                        className={classOfSides[index].class}
                        style={classOfSides[index].style}
                      >
                        <ul key={"ul_" + index}>
                          {ulItem.map((item, jid) => {
                            return (
                              <li key={"li_" + jid + classOfSides[index].class}>
                                <ReactTooltip
                                  id={`faq-${index}_${jid}`}
                                  type="dark"
                                >
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: item.title,
                                    }}
                                  ></span>
                                </ReactTooltip>
                                <span
                                  data-toggle="tooltip"
                                  title=""
                                  className="show-at-bottom"
                                  data-for={`faq-${index}_${jid}`}
                                  data-tip
                                >
                                  {item.text}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="checkout-faq">
                  <div
                    className="text"
                    style={{
                      display: "inline-block",
                      marginLeft: "43px",
                      marginTop: "7px",
                    }}
                  >
                    <span className="text1">
                      Have questions?{" "}
                      <ReactTooltip id="faq-all" type="light">
                        <div
                          style={{
                            padding: "15px",
                            boxShadow: "0 1px 0 #eef3f8",
                          }}
                        >
                          <b>
                            Can I change my subscription to a different email?
                          </b>
                          <br />
                          Absolutely! Simply send us an email (
                          <font color="#2b9eff">
                            <b>Help@MailTag.io</b>
                          </font>
                          ) with the address you’d like
                          <br />
                          your subscription transferred to, and we’ll get it
                          processed!
                          <br />
                          <br />
                          <b>Does MailTag offer team discounts?</b>
                          <br />
                          Yes, if you have a team of 5 or more, please email us
                          (
                          <font color="#2b9eff">
                            <b>Help@MailTag.io</b>
                          </font>
                          ),
                          <br />
                          and you can save with our team pricing.
                          <br />
                          <br />
                          <b>
                            I selected the annual plan, why doesn’t it say
                            $9.99?
                          </b>
                          <br />
                          MailTag Pro is $12.99 monthly, you can prepay for the
                          year and save 30%.
                          <br />
                          This will save you $36 over 12 months (bringing the
                          would-be monthly cost to $9.99).
                          <br />
                          <br />
                          <b>
                            If I upgrade, will MailTag Pro be applied to all of
                            my accounts?
                          </b>
                          <br />
                          No, each subscription applies to one email address.
                        </div>
                      </ReactTooltip>
                      <span
                        style={{ cursor: "pointer", color: "#2b9eff" }}
                        data-toggle="tooltip"
                        title=""
                        data-for="faq-all"
                        data-tip
                        className="show-at-top faq-tooltip"
                      >
                        {" "}
                        Check out our FAQ ?
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className="billing-info">
            <form onSubmit={(event) => event.preventDefault()}>
              <div className="row">
                <div className="form-group  col-12">
                  <label htmlFor="" className="font-weight-bold">CARD NUMBER</label>
                  <input required className="form-control" autocomplete="cc-number" autocorrect="off" spellcheck="false" type="text" name="cardnumber" data-elements-stable-field-name="cardNumber" inputmode="numeric" aria-label="Credit or debit card number" placeholder="4456 5222 2652 0025" aria-invalid="false" maxLength="16" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 form-group">
                  <label htmlFor="" className="font-weight-bold">EXPIRATION DATE</label>
                  <input required className="form-control" autocorrect="off" spellcheck="false" type="text" placeholder="MM/YY" aria-invalid="false" maxLength="5" />
                </div>
                <div className="col-lg-6 form-group">
                  <label htmlFor="" className="font-weight-bold">CVV</label>
                  <input required className="form-control" autocorrect="off" spellcheck="false" type="text" placeholder="123" aria-invalid="false" maxLength="4" minLength="3" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12">
                  <label htmlFor="" className="font-weight-bold">PROMO CODE</label>
                  <div className="d-flex align-items-center jusutify-content-center main-input-div">
                    <input required className="form-control border-0" autocomplete="cc-number" autocorrect="off" spellcheck="false" type="text" name="cardnumber" placeholder="PROMO CODE" aria-invalid="false" maxLength="16" />
                    <button className="btn btn-link font-weight-bold text-primary btn-apply">Apply</button>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <p>
                  You'll be charged $119.88 USD when your trial ends.
                </p>
                <p>
                  <strong>
                    Billed now: $0
                  </strong>
                </p>
              </div>
              <div className="row">
                <button type="submit" className="btn btn-primary w-100 rounded-pill p-3" style={{ backgroundColor: '#2b9eff' }}>Start Plan</button>
              </div>
              <div className="row">
                <p className="text-success text-center">
                  <i class="fas fa-lock m-0 p-0 mx-3"></i>
                  Secure credit card payment
                </p>
                <p className="text-center">
                  This is a secure 128-bit SSL encrypted form
                </p>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Pricing;
