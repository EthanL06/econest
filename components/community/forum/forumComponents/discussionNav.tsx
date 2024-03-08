import React, { useState } from 'react';

const DiscussionNav: React.FC = () => {
 const [activeTab, setActiveTab] = useState('Discussions');

 const handleClick = (tab: string) => {
    setActiveTab(tab);
 };

 return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="flex space-x-4 text-2xl	">
          <button
            onClick={() => handleClick('Discussions')}
            className={`text-gray-500  ${activeTab === 'Discussions' ? 'underline ' : ''}`}
          >
            Discussions
          </button>
          <button
            onClick={() => handleClick('Trending')}
            className={`text-gray-500  ${activeTab === 'Trending' ? 'underline ' : ''}`}
          >
            Trending
          </button>
          <button
            onClick={() => handleClick('Announced')}
            className={`text-gray-500  ${activeTab === 'Announced' ? 'underline 0' : ''}`}
          >
            Announced
          </button>
        </div>
      </div>
    </div>
 );
};

export default DiscussionNav;