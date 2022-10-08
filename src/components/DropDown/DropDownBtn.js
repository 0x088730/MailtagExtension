import styled from "styled-components";
import downImg from "../../assets/img/downarrow.svg";
const DropDownBtn = styled.button`
  width: 245px;
  text-align: left;
  color: #222642;
  font-size: 14px;
  border-radius: 50px;
  padding: 10px 30px 8px 20px;
  outline: none;
  border: 1px solid #ebebee;
  cursor: pointer;
  background: url(${downImg}) no-repeat;
  -webkit-appearance: none;
  background-position-x: 95%;
  background-position-y: center;
`;
export default DropDownBtn;
