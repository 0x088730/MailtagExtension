import React from "react";
import closeBtn from "../../assets/img/popup-schedule-timezone-close.svg";
import secureIcon from "../../assets/img/secure-lock.svg";
const CardInfromation = ({ handleOpen }) => {
  return (
    <>
      <div id="billing-info-form">
        <button
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={() => handleOpen()}
        >
          <img src={closeBtn} alt="close button" />
        </button>
        <p className="payment-head">Update Billing Information</p>
        <div
          className="pay-with-card-details pay-with-details pay-with-active"
          style={{ margin: " 0px 18px" }}
        >
          <div className="row text-center">
            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12">
              <div className="payment-details-title">CARD NUMBER</div>
              <div
                className="field StripeElement StripeElement--empty"
                id="card-number-element-card-update"
              >
                <div
                  className="__PrivateStripeElement"
                  style={{
                    margin: "0px !important",
                    padding: "0px !important",
                    border: "none !important",
                    display: "block !important",
                    background: "transparent !important",
                    position: "relative !important",
                    opacity: "1 !important",
                  }}
                ></div>
              </div>
              <span className="brand">
                <i
                  className="pf pf-credit-card"
                  id="brand-icon-card-update"
                ></i>
              </span>
              <div className="outcome">
                <div className="card-no-error-card-update"></div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xs-6">
              <div className="payment-details-title">EXPIRATION DATE</div>
              <div
                className="field StripeElement StripeElement--empty"
                id="card-expiry-element-card-update"
                placeholder="MM/YY"
              >
                <div className="__PrivateStripeElement"></div>
              </div>
              <div className="outcome">
                <div className="card-exp-error-card-update"></div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xs-6">
              <div className="payment-details-title payment-details-title-cvc">
                CVC
              </div>
              <div
                className="field StripeElement StripeElement--empty"
                id="card-cvc-element-card-update"
                placeholder="123"
              >
                <div className="__PrivateStripeElement"> </div>
              </div>
              <div className="outcome">
                <div className="card-cvc-error-card-update"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <button
            className="btn btn-md pay-btn-card-update card-btn win_btn_padding_top"
            update-card="true"
          >
            Update Card
          </button>
        </div>
        <div className="row text-center secure-payment">
          <span className="secure-payment-text">
            <img src={secureIcon} alt="sevy" /> Secure credit card payment
          </span>
        </div>
        <div className="row text-center">
          <span className="ssl-text">
            This is a secure 128-bit SSL encrypted form
          </span>
        </div>
      </div>
    </>
  );
};
export default CardInfromation;
