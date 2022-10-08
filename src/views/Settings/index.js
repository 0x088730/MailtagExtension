import config from "../../config";
import Tabs from "components/Tabs";
import React from "react";
import { Col, Row } from "reactstrap";
import Accounts from "./tabs/Accounts";
import Billing from "./tabs/Billing";
import Preferences from "./tabs/Perferences";
import Profile from "./tabs/Profile";
import useFetch from "hooks/useFetch";
const Settings = () => {
  const [data] = useFetch(config.settings);
  return (
    <>
      <div className="content container">
        <br />
        <Row>
          <Col md="12" className="m-auto">
            <Tabs
              maxWidth="482px"
              width="480px"
              headers={[
                { id: "accounts", title: "Accounts" },
                { id: "profile", title: "Profile" },
                { id: "preferences", title: "Preferences" },
                { id: "billing", title: "Billing" },
              ]}
              contents={[
                {
                  id: "accounts",
                  body: <Accounts />,
                },
                { id: "profile", body: <Profile data={data} /> },
                { id: "preferences", body: <Preferences data={data} /> },
                { id: "billing", body: <Billing /> },
              ]}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Settings;
