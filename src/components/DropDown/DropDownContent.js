import styled from "styled-components";

const DropDownContent = styled.ul`
  position: absolute;
  top: 50px;
  right: -16px;
  background-color: #fff;
  width: 275px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 111111;
  display: block;
  color: #222642;
  font-size: 14px;
  padding: 5px 0;
  & li {
    color: black;
    padding: 15px 30px 10px 30px;
    text-decoration: none;
    display: block;
    color: #222642;
    font-size: 14px;
    cursor: pointer;
  }
  & div:not(:last-child) {
    border-bottom: 1px solid #ebebee;
  }
`;
export default DropDownContent;
