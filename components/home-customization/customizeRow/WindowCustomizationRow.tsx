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
  handleShowWindow: (details: CustomizationDetails) => void;
  showWindow: CustomizationDetails;
};

  
const SolarPanelCustomizationRow: React.FC<Props> = ({ handleShowWindow, showWindow }) => {

  const cardData: CustomizationDetails[] = [
    {
      title: "Window Basic",
      imgUrl:"/images/solar_panel_house.jpg",
      // imgUrl: "/images/window_basic.jpg",
      price: "1487",
      bulletPoints: ["Basic window fitting for energy efficiency", ""], 
      current: "current"
    },
    {
      title: "Window Advanced",
      imgUrl:"/images/solar_panel_house.jpg",
      // imgUrl: "/images/window_advanced.jpg", 
      price: "3126",
      bulletPoints: ["Advanced windows with enhanced insulation", ""], 
      current: "current"
    },
    {
      title: "Window Premium",
      imgUrl:"/images/solar_panel_house.jpg",
      // imgUrl: "/images/window_premium.jpg",
      price: "4470",
      bulletPoints: ["Premium windows for optimal energy savings and aesthetics", ""], 
      current: "current"
    },
  ];

  const handleCardClick = (card: CustomizationDetails) => {
    handleShowWindow(card);
  };



  return (

      <div className="w-full">

<h3 className="text-gray-600 font-bold text-xl m-4 mb-2">Eco-Friendly Windows</h3>
<p className="text-gray-700 text-base m-4 ">Improve insulation and reduce energy costs with sustainable window solutions.</p>


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