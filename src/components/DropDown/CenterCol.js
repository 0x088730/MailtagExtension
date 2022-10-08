import styled from "styled-components";

export const CenterCol = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    margin: 20px auto;
  }
`;
export default CenterCol;
