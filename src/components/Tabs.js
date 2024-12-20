import React from "react";

const Tabs = ({ currentTab, setTab }) => {
  const tabs = ["Upcoming Campaigns", "Live Campaigns", "Past Campaigns"];
  return (
    <div className="flex space-x-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setTab(tab)}
          className={`px-4 py-2 border-b-2 ${
            currentTab === tab ? "border-blue-500 text-blue-500" : "border-transparent"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
