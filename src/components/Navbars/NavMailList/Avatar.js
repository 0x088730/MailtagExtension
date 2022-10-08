import React from "react";

import AvatarImageContainer from "./AvatarImageContainer";
const Avatar = ({ src, sm, md, lg }) => {
  return <AvatarImageContainer src={src} sm={!!sm} md={!!md} lg={!!lg} />;
};
export default Avatar;
