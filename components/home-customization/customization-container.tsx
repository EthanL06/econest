// CustomizationContainer.tsx
import React, { useState } from "react";
import HomeSelectCard from "../ui/homeSelectCard";
import AddressInput from "../landing/address-input";

type Props = {
  handleShowSolarPanel: () => void;
};

const CustomizationContainer: React.FC<Props> = ({ handleShowSolarPanel }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    handleShowSolarPanel();
  };

  const handleNextClick = () => {
    // Add logic for what should happen when "Next" is clicked
  };

  return (
    <div className="col-span-2 bg-slate-100 rounded-xl p-4 flex flex-col items-center">


      {/* <h3 className="text-gray-600 font-bold text-xl mb-2">Choose A Product</h3>
      <p className="text-gray-700 text-base">Hello</p> */}

      <div className="w-full">
        {['Title 1', 'Title 2', 'Title 3'].map((title) => (
          <HomeSelectCard
            key={title}
            img="/images/solar_panel_house.jpg"
            title={title}
            description={`${title} description`}
            selected={selectedCard === title}
            onClick={() => handleCardClick(title)}
          />
        ))}
      </div>

      <button
        className="w-4/5 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-150 ease-in-out mx-auto mt-4"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default CustomizationContainer;