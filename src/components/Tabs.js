import React from "react";

const Tabs = ({ currentTab, setTab }) => {
  const tabs = ["Upcoming Campaigns", "Live Campaigns", "Past Campaigns"];
  return (
    <div className="flex sm:space-x-4 mb-4">
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



// import React from "react";

// const Tabs = ({ currentTab, setTab }) => {
//   const tabs = ["Upcoming Campaigns", "Live Campaigns", "Past Campaigns"];
//   return (
//     <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 mb-4">
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => setTab(tab)}
//           className={`px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border-b-2 ${
//             currentTab === tab
//               ? "border-blue-500 text-blue-500"
//               : "border-transparent"
//           } hover:text-blue-500`}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Tabs;

