import React from "react";

const Tabs = ({ tabList, activeTab, onChange }) => {
  return (
    <div className="flex justify-between bg-blue-100 rounded-full p-1 w-fit mx-auto md:px-20">
      {tabList.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-6 py-2 rounded-full transition-all text-sm font-medium
            ${activeTab === tab.id
              ? " bg-gradient-to-r from-[#0052D4] via-[#65C7F7] to-[#9CECFB] text-white shadow-md"
              : "text-blue-900 hover:bg-blue-100"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
