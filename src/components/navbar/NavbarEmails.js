import React from "react";

import avatar from "../../assets/img/mike.jpg";

const NavbarEmails = ({ email }) => {
  return (
    <>
      <img
        src={avatar}
        className="rounded-circle"
        style={{ width: "50px", cursor: "pointer" }}
        alt={email}
      />

      <span style={{ fontWeight: "bold", marginLeft: "5px" }}>{email}</span>
    </>
  );
};
export default NavbarEmails;
