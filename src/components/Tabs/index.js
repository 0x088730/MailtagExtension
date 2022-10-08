import React, { useState } from "react";
import TabContent from "./TabContent";
import TabNavItem from "./TabNavItem";

const Tabs = ({ headers, contents, maxWidth, width }) => {
  const [activeTab, setActiveTab] = useState(headers[0]?.id ?? "");

  return (
    <div className="Tabs">
      <ul
        className="nav"
        style={{ maxWidth: maxWidth, width: width, margin: "auto" }}
      >
        {headers.map((item) => {
          return (
            <TabNavItem
              title={item.title}
              id={item.id}
              key={item.id}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          );
        })}
      </ul>

      <div className="outlet">
        {contents.map((item) => {
          return (
            <TabContent id={item.id} key={item.id} activeTab={activeTab}>
              {item.body}
            </TabContent>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
