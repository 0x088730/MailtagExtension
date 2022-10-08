import React from "react";
import PaymentCardBottom from "./PaymentCard/PaymentCardBottom";
import PaymentCardContainer from "./PaymentCard/PaymentCardContainer";
import PaymentCardTop from "./PaymentCard/PaymentCardTop";
import PaymentContainer from "./PaymentCard/PaymentContainer";
import visaImg from "../../../../assets/img/visa.png";
import PaymentEditButton from "./PaymentCard/PaymentEditButton";
const Billing = () => {
  return (
    <>
      <div>
        <PaymentContainer>
          <h1>Payment Info</h1>
          <PaymentCardContainer>
            <PaymentCardTop>
              <PaymentEditButton>Edit</PaymentEditButton>
              <img src={visaImg} alt="Visa Logo" />
            </PaymentCardTop>
            <PaymentCardBottom>
              <p>**** **** **** 8654</p>
              <p>Petro Dev</p>
            </PaymentCardBottom>
          </PaymentCardContainer>
        </PaymentContainer>
      </div>
    </>
  );
};
export default Billing;
