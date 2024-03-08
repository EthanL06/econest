import React from 'react';

const quickLinks = ['All Categories', 'Recent Discussions', 'Unread', 'Best Of'];
const popularTags = ['Sustainability', 'Eco-Friendly', 'Home Customization', 'Green Living'];

const LeftSidebar: React.FC = () => {
 return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="font-bold text-lg mb-2">Quick Links</h3>
        <ul>
          {quickLinks.map((link, index) => (
            <li key={index} className="mb-1 cursor-pointer bold">{link}</li>
          ))}
        </ul>
      </div>
      <div className="gap-3 mt-4 md:mt-0">
        <h3 className="font-bold text-lg mb-2">Popular Tags</h3>
        {popularTags.map((tag, index) => (
          <button key={index} className="bg-gray-200 text-gray-700 rounded-sm px-2 py-1 mr-2 mt-2 text-sm">{tag}</button>
        ))} 
      </div>
    </div>
 );
};

export default LeftSidebar;