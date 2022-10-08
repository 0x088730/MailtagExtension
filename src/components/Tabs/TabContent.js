import React from "react";

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div
      key={`tabContent_${Math.floor(Math.random() * 300)}`}
      className="TabContent"
    >
      {children}
    </div>
  ) : null;
};

export default TabContent;
