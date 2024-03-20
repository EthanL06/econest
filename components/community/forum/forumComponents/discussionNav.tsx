import React, { useState } from "react";

const DiscussionNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Discussions");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="sm:p-4 w-full rounded-md bg-gray-300">
        <div className="text-black font-bold text-xl">
          Discussions
        </div>
    </div>
  );
};

export default DiscussionNav;
