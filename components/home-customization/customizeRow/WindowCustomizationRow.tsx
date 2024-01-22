// CustomizationContainer.tsx
import React, { useState } from "react";
import HomeSelectCard from "../../ui/homeSelectCard";


type Props = {
    handleShowWindow: (title: string) => void;
  };

  
const SolarPanelCustomizationRow: React.FC<Props> = ({ handleShowWindow }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cardData = [
    {
      title: "Window Basic",
      price: "$150 est",
      description: "Basic window fitting for energy efficiency"
    },
    {
      title: "Window Advanced",
      price: "$300 est",
      description: "Advanced windows with enhanced insulation"
    },
    {
      title: "Window Premium",
      price: "$450 est",
      description: "Premium windows for optimal energy savings and aesthetics"
    },
  ];

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    handleShowWindow(title);
  };


  return (

      <div className="w-full">

<h3 className="text-gray-600 font-bold text-xl m-4 mb-2">Eco-Friendly Windows</h3>
<p className="text-gray-700 text-base m-4 ">Improve insulation and reduce energy costs with sustainable window solutions.</p>


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