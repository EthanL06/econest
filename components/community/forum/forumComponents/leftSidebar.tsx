import React from "react";

const quickLinks = [
  "All Categories",
  "Recent Discussions",
  "Unread",
  "Best Of",
];
const popularTags = [
  "Sustainability",
  "Eco-Friendly",
  "Home Customization",
  "Green Living",
  "Renewable Energy",
  "Recycling",
  "Organic Farming",
  "Water Conservation",
  "Energy Efficiency",
  "Solar Power",
  "Wind Power",
  "Hydro Power",
  "Geothermal Energy",
  "Biofuel",
  "Composting",
  "Permaculture",
  "Zero Waste",
  "Carbon Offsetting",
  "Sustainable Fashion",
  "Sustainable Tourism",
  "Sustainable Agriculture",
  "Sustainable Cities",
  "Sustainable Business",
  "Sustainable Food",
  "Sustainable Water",
  "Sustainable Energy",
  "Sustainable Transportation",
  "Sustainable Housing",
  "Sustainable Communities",

 ];

const LeftSidebar: React.FC = () => {
  return (
    <div className="py-4">
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-bold">Popular Links</h3>
        <ul>
          {quickLinks.map((link, index) => (
            <li key={index} className="bold mb-1 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 gap-3 md:mt-0">
        <h3 className="mb-2 text-lg font-bold">Popular Tags</h3>
        {popularTags.map((tag, index) => (
          <button
            key={index}
            className="mr-2 mt-2 rounded-sm bg-gray-200 px-2 py-1 text-sm text-gray-700"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
