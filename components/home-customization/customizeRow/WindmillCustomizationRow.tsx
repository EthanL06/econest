// CustomizationContainer.tsx
import React, { useState } from "react";
import HomeSelectCard from "../../ui/homeSelectCard";


type Props = {
  handleShowWindmill: (title: string) => void;
  };

  
const SolarPanelCustomizationRow: React.FC<Props> = ({ handleShowWindmill }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cardData = [
    {
      title: "Windmill Basic",
      price: "$1,200 est",
      description: "Basic wind energy solution for small homes"
    },
    {
      title: "Windmill Advanced",
      price: "$4,750 est",
      description: "Enhanced wind energy system with increased capacity"
    },
    {
      title: "Windmill Premium",
      price: "$9,300 est",
      description: "Premium wind energy setup with maximum efficiency"
    },
  ];

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    handleShowWindmill(title);
  };

  return (

      <div className="w-full">

<h3 className="text-gray-600 font-bold text-xl m-4 mb-2">Wind Power for Your Home</h3>
<p className="text-gray-700 text-base m-4 ">Harness the power of the wind to generate clean, renewable energy.</p>

        {cardData.map((card) => (
          <HomeSelectCard
            key={card.title}
            img="/images/solar_panel_house.jpg"
            title={card.title}
            price={card.price || "$0"}
            description={`${card.title} description`}
            selected={selectedCard === card.title}
            onClick={() => handleCardClick(card.title)}
          />
        ))}
      </div>
  );
};

export default SolarPanelCustomizationRow;