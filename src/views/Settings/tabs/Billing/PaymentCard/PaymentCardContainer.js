import styled from "styled-components";
const PaymentCardContainer = styled.div`
  position: relative;
  background: linear-gradient(134deg, #3e446f 0%, #222642 100%);
  padding: 35px;
  width: 350px;
  margin: 0 auto;
  height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* box-shadow: 0px 20px 30px -13px #111; */

  @media only screen and (max-width: 490px) {
    width: auto;
    height: auto;
  }
`;
export default PaymentCardContainer;
