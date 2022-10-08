import SimpleCard from "components/FixedPlugin/Dashboard/SimpleCard";
import React from "react";

export default function SimpleCardGroups({ infoData }) {
  return (
    <>
      <SimpleCard
        lg="3"
        md="6"
        sm="6"
        text={"Emails Sent Today"}
        value={infoData && infoData?.emailsSentToday?.count}
        state={infoData && infoData?.emailsSentToday?.state}
        index={`simple_card_${"1"}`}
      />
      <SimpleCard
        lg="3"
        md="6"
        sm="6"
        text={"Emails Sent This Month"}
        value={infoData && infoData?.emailsSentThisMonth?.count}
        state={infoData && infoData?.emailsSentThisMonth?.state}
        index={`simple_card_${"2"}`}
      />
      <SimpleCard
        lg="3"
        md="6"
        sm="6"
        text={"Average Open Rate"}
        value={infoData && infoData?.averageOpenRate?.rate + "%"}
        state={infoData && infoData?.averageOpenRate?.state}
        index={`simple_card_${"3"}`}
      />
      <SimpleCard
        lg="3"
        md="6"
        sm="6"
        text={"Average Link-Click Rate"}
        value={infoData && infoData?.averageLinkClickRate?.rate + "%"}
        state={infoData && infoData?.averageLinkClickRate?.state}
        index={`simple_card_${"4"}`}
      />
    </>
  );
}
