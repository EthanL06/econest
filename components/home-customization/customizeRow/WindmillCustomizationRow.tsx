import React, { useState } from "react";
import HomeSelectCard from "../../ui/customizationComponents/homeSelectCard";

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
  current: string;
};

type Props = {
  handleShowWindmill: (details: CustomizationDetails) => void;
  showWindMill: CustomizationDetails;
};

const SolarPanelCustomizationRow: React.FC<Props> = ({
  handleShowWindmill,
  showWindMill
}) => {

  const cardData: CustomizationDetails[] = [
    {
      title: "Windmill Basic",
      imgUrl:"/images/solar_panel_house.jpg",
      // imgUrl: "/images/windmill_basic.jpg",
      price: "1,200",
      bulletPoints: ["Basic wind energy solution for small homes", ""],
      current: "current"
    },
    {
      title: "Windmill Advanced",
      imgUrl:"/images/solar_panel_house.jpg",
      // imgUrl: "/images/windmill_advanced.jpg",
      price: "4,750",
      bulletPoints: ["Enhanced wind energy system with increased capacity", ""],
      current: "current"
    },
    {
      title: "Windmill Premium",
      imgUrl:"/images/solar_panel_house.jpg",
      // imgUrl: "/images/windmill_premium.jpg",
      price: "9,300",
      bulletPoints: ["Premium wind energy setup with maximum efficiency", ""],
      current: "current"
    },
  ];

  const handleCardClick = (card: CustomizationDetails) => {
    handleShowWindmill(card);
  };

  return (
    <div className="w-full">
      <h3 className="m-4 mb-2 text-xl font-bold text-gray-600">
        Wind Power for Your Home
      </h3>
      <p className="m-4 text-base text-gray-700 ">
        Harness the power of the wind to generate clean, renewable energy.
      </p>

      {cardData.map((card) => (
        <HomeSelectCard
          key={card.title}
          img={card.imgUrl}
          title={card.title}
          price={card.price}
          description={card.bulletPoints[0]}
          selected={showWindMill.title === card.title}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
};

export default SolarPanelCustomizationRow;
