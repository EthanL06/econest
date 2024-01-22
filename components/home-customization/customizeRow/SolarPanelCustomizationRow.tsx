import React, { useState } from "react";
import HomeSelectCard from "../../ui/customizationComponents/homeSelectCard";

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

type Props = {
  handleShowSolarPanel: (details: CustomizationDetails) => void;
};

const SolarPanelCustomizationRow: React.FC<Props> = ({
  handleShowSolarPanel,
}) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cardData = [
    {
      title: "Powerwall Only",
      imgUrl:"/images/solar_panel_house.jpg",
      price: "6,365",
      bulletPoints: ["Energy backup for your home", ""] as [string, string], 
    },
    {
      title: "Solar Panels + Powerwall",
      imgUrl:"/images/solar_panel_house.jpg",
      price: "92,476",
      bulletPoints: ["Panels for your existing roof with backup protection", ""] as [string, string], 
    },
    {
      title: "Solar Roof + Powerwall",
      imgUrl:"/images/solar_panel_house.jpg",
      price: "843,500",
      bulletPoints: ["New luxury integrated solar roof with backup protection", ""] as [string, string],
    },
  ];

  const handleCardClick = (card: CustomizationDetails) => {
    setSelectedCard(card.title);
    handleShowSolarPanel(card);
  };

  return (
    <div className="w-full">
      <h3 className="m-4 mb-2 text-xl font-bold text-gray-600">
        Harness Solar Energy
      </h3>
      <p className="m-4 text-base text-gray-700 ">
        Maximize your home &apos; s energy efficiency with cutting-edge solar panels.
      </p>

      {cardData.map((card) => (
        <HomeSelectCard
          key={card.title}
          img={card.imgUrl}
          title={card.title}
          price={card.price}
          description={card.bulletPoints[0]}
          selected={selectedCard === card.title}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
};

export default SolarPanelCustomizationRow;
