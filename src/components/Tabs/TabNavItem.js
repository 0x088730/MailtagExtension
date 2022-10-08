import React from "react";
const TabNavItem = ({ id, title,  activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };
 
  return (
    <li
      key={`tabNavItem${Math.floor(Math.random() * 300)}`}
      onClick={handleClick}
      className={activeTab === id ? "active" : ""}
    >
      {title}
    </li>
  );
};
export default TabNavItem;
