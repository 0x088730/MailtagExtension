import styled from "styled-components";

const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 10px;
  &:not(:last-child) {
    border-bottom: 1px solid #ebebee;
  }
`;

export default AccountContainer;
