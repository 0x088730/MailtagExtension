import styled from "styled-components";
import shadow from "../../../../../assets/img/shadow.png";
// import React from 'react'
// const PaymentContainer=()=>{
//     return (
//         <>
//         </>
//     )
// }
// export default PaymentContainer;
const PaymentContainer = styled.div`
  margin: 0 auto;
  position: relative;
  text-align: center;
  padding: 40px 0;
  border-bottom: 1px solid #efefef;
  background: url(${shadow}) no-repeat;
  background-position: bottom;
  & h1 {
    color: #222642;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 30px;
  }
`;
export default PaymentContainer;
