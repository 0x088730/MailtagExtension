import React from "react";
const AvatarImageContainer = ({ src }) => {
  return (
    <img
      src={src}
      style={{
        backgroundColor: "#fff",
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        margin: "auto",
        fontSize: "2rem",
      }}
      alt="avatar"
    />
  );
};
export default AvatarImageContainer;
