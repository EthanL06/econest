import React, { useEffect, useState } from "react";
import HomeSelectCard from "../../ui/customizationComponents/homeSelectCard";
import { CustomizationDetails } from "@/app/(home-customization)/build-a-home/page";

type Props = {
  handleShowSolarPanel: (details: CustomizationDetails) => void;
  showSolarPanel: CustomizationDetails;
};

const SolarPanelCustomizationRow: React.FC<Props> = ({
  handleShowSolarPanel,
  showSolarPanel,
}) => {
  const cardData = [
    {
      title: "Powerwall Only",
      imgUrl: "/images/solarPanel/solar-low.jpeg",
      price: "6,365",
      bulletPoints: ["Energy backup for your home", ""] as [string, string],
      current: "current",
    },
    {
      title: "Solar Panels + Powerwall",
      imgUrl: "/images/solarPanel/solar-mid.jpeg",
      price: "8,572",
      bulletPoints: [
        "Panels for your existing roof with backup protection",
        "",
      ] as [string, string],
      current: "current",
    },
    {
      title: "Solar Roof + Powerwall",
      imgUrl: "/images/solarPanel/solar-roof.jpeg",
      price: "12,128",
      bulletPoints: [
        "New luxury integrated solar roof with backup protection",
        "",
      ] as [string, string],
      current: "current",
    },
  ];

  // useEffect(() => {
    
  //   handleShowSolarPanel(cardData[0]);
  // }, []);

  const handleCardClick = (card: CustomizationDetails) => {
    handleShowSolarPanel(card);
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-bold text-black">Harness Solar Energy</h3>
      <p className="mb-6 mt-1 text-pretty text-sm font-medium text-black/90">
        Maximize energy efficiency with cutting-edge solar panels.
      </p>

      {cardData.map((card) => (
        <HomeSelectCard
          key={card.title}
          img={card.imgUrl}
          title={card.title}
          price={card.price}
          description={card.bulletPoints[0]}
          selected={showSolarPanel.title === card.title}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
};

export default SolarPanelCustomizationRow;
