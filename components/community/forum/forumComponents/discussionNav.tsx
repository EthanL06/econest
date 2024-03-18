import React, { useState } from "react";

const DiscussionNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Discussions");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="sm:p-4">
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-2 text-2xl sm:gap-4	text-gray-500 underline">
          Discussions
        </div>
        {/* <div className="flex flex-wrap gap-2 text-2xl sm:gap-4	">
          <button
            onClick={() => handleClick("Discussions")}
            className={`text-gray-500  ${
              activeTab === "Discussions" ? "underline " : ""
            }`}
          >
            Discussions
          </button>
          <button
            onClick={() => handleClick("Trending")}
            className={`text-gray-500  ${
              activeTab === "Trending" ? "underline " : ""
            }`}
          >
            Trending
          </button>
          <button
            onClick={() => handleClick("Announced")}
            className={`text-gray-500  ${
              activeTab === "Announced" ? "0 underline" : ""
            }`}
          >
            Announced
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default DiscussionNav;
