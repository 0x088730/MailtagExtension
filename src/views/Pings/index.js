import React from "react";
import config from "../../config";
import { Row, Col } from "reactstrap";
import Tabs from "components/Tabs";
import PingEmails from "./PingEmails";
import PingeSequences from "./PingSequences";
import EmptyPing from "./EmptyPing";
import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";
function Pings() {
  const [emails] = useFetch(config.emails);
  const [pings] = useFetch(config.pingSequences);
  const AddNewPing = () => {
    return (
      <Link
        to={"/admin/pings/new-ping-sequence"}
        style={{ display: "block", width: "300px" }}
        className="btn add-pings-btn btn-md win_btn_padding_top"
      >
        Add new ping sequence
      </Link>
    );
  };
  return (
    <>
      <div className="content ">
        <Row>
          <Col md="12">
            <Tabs
              maxWidth="250px"
              width="250px"
              headers={[
                { id: "emails", title: "Emails" },
                { id: "ping_sequences", title: "Ping Sequences" },
              ]}
              contents={[
                {
                  id: "emails",
                  body:
                    emails && emails?.ength > 0 ? (
                      <PingEmails data={emails} />
                    ) : (
                      <EmptyPing text="You haven't sent any Pings yet." />
                    ),
                },
                {
                  id: "ping_sequences",
                  body:
                    pings && pings?.pingSequences && pings?.pingSequences.length > 0 ? (
                      <>
                        <PingeSequences data={pings.pingSequences} />
                        <AddNewPing />
                      </>
                    ) : (
                      <>
                        <EmptyPing text="You don't have any Ping sequences." />
                        <AddNewPing />
                      </>
                    ),
                },
              ]}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Pings;
