import React, { useEffect, useState } from "react";
import HomeSelectCard from "../../ui/customizationComponents/homeSelectCard";
import { CustomizationDetails } from "@/app/(home-customization)/build-a-home/page";

type Props = {
  handleShowWindow: (details: CustomizationDetails) => void;
  showWindow: CustomizationDetails;
};

const SolarPanelCustomizationRow: React.FC<Props> = ({
  handleShowWindow,
  showWindow,
}) => {
  const cardData: CustomizationDetails[] = [
    {
      title: "Window Basic",
      imgUrl: "/images/solar_panel_house.jpg",
      // imgUrl: "/images/window_basic.jpg",
      price: "1,487",
      bulletPoints: ["Basic window fitting for energy efficiency", ""],
      current: "current",
    },
    {
      title: "Window Advanced",
      imgUrl: "/images/solar_panel_house.jpg",
      // imgUrl: "/images/window_advanced.jpg",
      price: "3,126",
      bulletPoints: ["Advanced windows with enhanced insulation", ""],
      current: "current",
    },
    {
      title: "Window Premium",
      imgUrl: "/images/solar_panel_house.jpg",
      // imgUrl: "/images/window_premium.jpg",
      price: "4,470",
      bulletPoints: [
        "Premium windows for optimal energy savings and aesthetics",
        "",
      ],
      current: "current",
    },
  ];

  // useEffect(() => {
  //   handleShowWindow(cardData[0]);
  // }, []);

  const handleCardClick = (card: CustomizationDetails) => {
    handleShowWindow(card);
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-bold text-black">Eco-Friendly Windows</h3>
      <p className="mb-6 mt-1 text-pretty text-sm font-medium text-black/90">
        Improve insulation and reduce energy costs with sustainable window
        solutions.
      </p>

      {cardData.map((card) => (
        <HomeSelectCard
          key={card.title}
          img={card.imgUrl}
          title={card.title}
          price={card.price}
          description={card.bulletPoints[0]}
          selected={showWindow.title === card.title}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
};

export default SolarPanelCustomizationRow;
