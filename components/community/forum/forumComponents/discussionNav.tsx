import React, { useState } from "react";

const DiscussionNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Discussions");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-4 w-full rounded-md">
      <div className="text-2xl font-bold">Discussions</div>
    </div>
  );
};

export default DiscussionNav;
