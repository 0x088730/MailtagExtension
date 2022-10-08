import React from "react";
import { CardBody } from "reactstrap";
import EmptyInbox from "../EmptyInbox";
import InboxElements from "../InboxElements";
const InboxUnead = ({ data }) => {
  return (
    <>
      <CardBody>
        {data && data.length < 1 ? (
          <EmptyInbox />
        ) : (
          <InboxElements data={data} />
        )}
      </CardBody>
      {/* <EmptyInbox /> */}
    </>
  );
};
export default InboxUnead;
