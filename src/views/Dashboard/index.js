import CustomCard from "components/Card";
import SimpleCard from "components/FixedPlugin/Dashboard/SimpleCard";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import mixpanel from "mixpanel-browser";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { dashboardNASDAQChart } from "variables/charts";
import DropDown from "components/DropDown";
import useFetch from "hooks/useFetch";
import config from "../../config";
import SimpleCardGroups from "components/SimpleCardsGroup";
import moment from "moment";
function Dashboard() {
  useEffect(() => {}, [selectBox]);
  const [selectBox, setSelectBox] = useState({
    id: "this_month",
    label: "This Month",
    start: moment().startOf("month").format("DD-MM-YYYY"),
    end: moment().format("DD-MM-YYYY"),
  });
  const [infoData] = useFetch(config.dashboardData);
  const [recentlyRead] = useFetch(config.recentReadEmails);
  const [recentlyUnread] = useFetch(config.recentUnreadEmails);
  const [chartInfo] = useFetch(
    `${config.chart}?${`start=${selectBox.start}&end=${selectBox.end}`}`
  );

  mixpanel.track("Dashboard", {
    source: "A user navigated to Dashboard",
  });

  // if (isLoadingInfo || isLoadingRead || isLoadingUnread || isLoadingChart)
  //   return <Spinner />;
  return (
    <>
      <div className="content">
        <br />
        <br />
        <Row>
          <SimpleCardGroups infoData={infoData} />
        </Row>
        <Row>
          <CustomCard
            key={`custom_card_1`}
            text="Recently Opened Emails"
            valueText={`You have ${
              infoData && infoData?.recentlyRead?.emails
            } opened emails`}
            link="/admin/inbox"
            data={recentlyRead && recentlyRead?.emails}
          />
          <CustomCard
            key={`custom_card_2`}
            text="Unread Emails"
            data={recentlyUnread && recentlyUnread?.emails}
            valueText={`You have ${
              infoData && infoData?.recentlyUnreadEmails
            } unread emails`}
            link="/admin/inbox"
          />
          <CustomCard
            key={`custom_card_3`}
            text="Signature clicks"
            valueText={`You have ${
              infoData && infoData?.signatureClicks
            } signature clicks`}
            link="/admin/signature"
          />
          <CustomCard
            key={`custom_card_4`}
            text="Scheduled Pings"
            valueText={`You have ${infoData && infoData?.pings} ping emails`}
            link="/admin/pings"
          />
        </Row>
        <Row>
          <Col md="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5" className="d-flex">
                  <p className="align-center align-self-center mb-0">
                    Emails Sent and Opened{" "}
                  </p>
                  <div className="chart-legend ms-auto d-flex">
                    <div>
                      <i className="fa fa-circle text-info" /> Sent
                    </div>
                    <div>
                      <i className="fa fa-circle text-success" /> Opened
                    </div>
                    <div>
                      <i className="fa fa-circle text-danger" /> Unopened
                    </div>
                  </div>
                  <div >
                  <DropDown  setSelectBox={setSelectBox} selectBox={selectBox} />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart?.data(
                    selectBox.start,
                    selectBox.end
                  )}
                  options={dashboardNASDAQChart?.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
