import usePost from "hooks/usePost";
import React from "react";

import { Redirect } from "react-router";
import config from "../../config";

export default function Logout() {
  const [data] = usePost(config.logout);

  return data && <Redirect to="/login" />;
}
