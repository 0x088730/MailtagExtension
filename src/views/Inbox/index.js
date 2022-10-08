import Tabs from "components/Tabs";
import useFetch from "hooks/useFetch";
import React from "react";
import config from "../../config";
import { Row, Col, Card } from "reactstrap";
import EmptyInbox from "./EmptyInbox";
import InboxRead from "./Tabs/InboxRead";
import InboxUnead from "./Tabs/InboxUnread";
function Inbox() {
  // const { data, isLoading } = useQuery("getInboxEmails", getInboxEmails);
  // if (isLoading) return "is loading...";
  const [data] = useFetch(config.inboxEmails);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <Tabs
                maxWidth="190px"
                width="190px"
                headers={[
                  { id: "read", title: "Read" },
                  { id: "unread", title: "Unread" },
                ]}
                contents={[
                  {
                    id: "read",
                    body:
                      data && data?.readEmails?.length < 1 ? (
                        <EmptyInbox text="None of your emails have been read yet." />
                      ) : (
                        <InboxRead data={data && data?.readEmails} />
                      ),
                  },
                  {
                    id: "unread",
                    body:
                      data && data?.unreadEmails?.length < 1 ? (
                        <EmptyInbox text="Hooray!!! All of your emails have been opened." />
                      ) : (
                        <InboxUnead data={data && data?.unreadEmails} />
                      ),
                  },
                ]}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Inbox;
