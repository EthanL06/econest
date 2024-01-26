"use client";

import React, { useState } from "react";

import FinalizeRowPurchaseCard from "../../ui/customizationComponents/finalizeRowPurchaseCards";
import FinalSolar from "./ending/FinalSolar";
import FinalWindmill from "./ending/FinalWindmill";
import FinalWindow from "./ending/finalWindow";


type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

type Props = {
  showSolarPanel: CustomizationDetails;
  showWindow: CustomizationDetails;
  showWindMill: CustomizationDetails;
};

const FinalizeRow: React.FC<Props> = ({
  showSolarPanel,
  showWindow,
  showWindMill,
}) => {
  const [selectedSolarCard, setSelectedSolarCard] = useState<string | null>(null);
const [selectedWindowCard, setSelectedWindowCard] = useState<string | null>(null);
const [selectedWindmillCard, setSelectedWindmillCard] = useState<string | null>(null);


  const [selectedPurchase, setSelectedPurchase] = useState("current");

  const handleButtonClick = (choice: string) => {
    setSelectedPurchase(choice);
  };


  const handleSolarCardClick = (cardTitle: string) => {
    setSelectedSolarCard(cardTitle);
  };
  
  const handleWindowCardClick = (cardTitle: string) => {
    setSelectedWindowCard(cardTitle);
  };
  
  const handleWindmillCardClick = (cardTitle: string) => {
    setSelectedWindmillCard(cardTitle);
  };


  return (
    <div className="w-full p-4">
      <h3 className="mb-4 text-xl font-bold text-gray-600">
        Summary of Your Customization
      </h3>

      <div className="mt-4 flex justify-center space-x-4 rounded bg-gray-200 p-1 transition-all duration-300">
        <button
          className={`rounded px-3 py-1 ${
            selectedPurchase === "current"
              ? "bg-white text-gray-700"
              : "text-gray-700"
          } transition-all duration-300`}
          onClick={() => handleButtonClick("current")}
        >
          Potential Insentives
        </button>
        <button
          className={`rounded px-3 py-1 ${
            selectedPurchase === "future"
              ? "bg-white text-gray-700"
              : "text-gray-700"
          } transition-all duration-300`}
          onClick={() => handleButtonClick("future")}
        >
          Purchase Price
        </button>
      </div>

      <div className="mt-4 gap-y-5">
      <FinalSolar
  showSolarPanel={showSolarPanel}
  handleCardClick={handleSolarCardClick}
  selectedCard={selectedSolarCard}
  selectedPurchase={selectedPurchase}
/>

<FinalWindow
  showWindow={showWindow}
  handleCardClick={handleWindowCardClick}
  selectedCard={selectedWindowCard}
  selectedPurchase={selectedPurchase}
/>

<FinalWindmill
  showWindmill={showWindMill}
  handleCardClick={handleWindmillCardClick}
  selectedCard={selectedWindmillCard}
  selectedPurchase={selectedPurchase}
/>

      </div>
    </div>
  );
};

export default FinalizeRow;
