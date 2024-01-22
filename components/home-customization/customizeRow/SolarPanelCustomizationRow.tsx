import React, { useState } from "react";
import HomeSelectCard from "../../ui/homeSelectCard";

type Props = {
  handleShowSolarPanel: (title: string) => void;
};

const SolarPanelCustomizationRow: React.FC<Props> = ({
  handleShowSolarPanel,
}) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cardData = [
    {
      title: "Powerwall Only",
      price: "$6,365 est",
      description: "Energy backup for your home",
    },
    {
      title: "Solar Panels + Powerwall",
      price: "$92,476 est",
      description: "Panels for your existing roof with backup protection",
    },
    {
      title: "Solar Roof + Powerwall",
      price: "$843,500 est",
      description: "New luxury integrated solar roof with backup protection",
    },
  ];

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    handleShowSolarPanel(title);
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
