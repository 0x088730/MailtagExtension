import React, { useState } from "react";
import AccountContainer from "./AccountContainer";
import AddIconContainer from "./AddIconContainer";
import AddNewEmail from "./AddNewEmail";
import Avatar from "./Avatar";
import { AvatarContainer } from "./AvatarContainer";
import { ChipContainer } from "./ChipContainer";
import DownIcon from "./DownIcon";
import DownIconContainer from "./DownIconContainer";
import EmailListContent from "./EmailListContent";
import EmailText from "./EmailText";
import EmailContainer from "./EmailContainer";
import { useSelector } from "react-redux";
import GoogleAuthModal from "components/GoogleAuthModal";
import config from "../../../config";
import openInNewTab from "utils/openNewTab";
const NavMailList = ({ emails }) => {
  const [accountSelectiIsOpen, setAccountSelectiIsOpen] = useState(false);
  const toogleFeedbackModal = () => {
    setAccountSelectiIsOpen((prevRes) => !prevRes);
  };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const { user } = useSelector((state) => state.auth);
  return (
    <EmailContainer>
      <GoogleAuthModal modal={modal} toggle={toggle} />
      <ChipContainer onClick={toogleFeedbackModal}>
        <AvatarContainer>
          <Avatar md src={user && user?.avatarUrl} />
        </AvatarContainer>
        <EmailText> {user && user?.email}</EmailText>
        <DownIconContainer>
          <DownIcon className={`fas fa-angle-down`}></DownIcon>
        </DownIconContainer>
        {accountSelectiIsOpen && (
          <EmailListContent>
            {/* <AccountContainer>
              <AvatarContainer>
                <Avatar md src={avatar} />
              </AvatarContainer>
              <SelectEmail>petro@hotmail.com</SelectEmail>
            </AccountContainer> */}
            {/* <AccountContainer>
              <AvatarContainer>
                <Avatar md src={avatar} />
              </AvatarContainer>
              <SelectEmail>petro@liev.com</SelectEmail>
            </AccountContainer> */}
            <AccountContainer
              onClick={() => openInNewTab(`${config.api}/${config.auth}`)}
            >
              <AddIconContainer>
                {/* <BsPlus style={{ fontSize: "30px" }} /> */}{" "}
                <span style={{ fontSize: "25px" }}>+</span>
              </AddIconContainer>
              <AddNewEmail style={{ fontSize: "14px" }}>
                Add New Email
              </AddNewEmail>
            </AccountContainer>
          </EmailListContent>
        )}
      </ChipContainer>
    </EmailContainer>
  );
};
export default NavMailList;
