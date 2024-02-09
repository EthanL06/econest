import React, { useEffect, useState } from "react";
import HomeSelectCard from "../../ui/customizationComponents/homeSelectCard";
import { CustomizationDetails } from "@/app/(home-customization)/build-a-home/page";
type Props = {
  handleShowWindmill: (details: CustomizationDetails) => void;
  showWindMill: CustomizationDetails;
};

const SolarPanelCustomizationRow: React.FC<Props> = ({
  handleShowWindmill,
  showWindMill,
}) => {
  const cardData: CustomizationDetails[] = [
    {
      title: "Windmill Basic",
      imgUrl: "/images/windMill/windmill-low2.jpeg",
      // imgUrl: "/images/windmill_basic.jpg",
      price: "1,200",
      bulletPoints: ["Basic wind energy solution for small homes", ""],
      current: "current",
    },
    {
      title: "Windmill Advanced",
      imgUrl: "/images/windMill/windmill-mid2.png",
      // imgUrl: "/images/windmill_advanced.jpg",
      price: "4,750",
      bulletPoints: ["Enhanced wind energy system with increased capacity", ""],
      current: "current",
    },
    {
      title: "Windmill Premium",
      imgUrl: "/images/windMill/windmill-high.jpeg",
      // imgUrl: "/images/windmill_premium.jpg",
      price: "9,300",
      bulletPoints: ["Premium wind energy setup with maximum efficiency", ""],
      current: "current",
    },
  ];

  // useEffect(() => {
  //   handleShowWindmill(cardData[0]);
  // }, []);

  const handleCardClick = (card: CustomizationDetails) => {
    handleShowWindmill(card);
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-bold text-black">Utilize The Wind</h3>
      <p className="mb-6 mt-1 text-pretty text-sm font-medium text-black/90">
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
