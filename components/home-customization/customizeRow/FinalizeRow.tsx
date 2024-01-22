"use client";

import React, { useState } from "react";

import FinalizeRowPurchaseCard from "../../ui/customizationComponents/finalizeRowPurchaseCards";

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
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedPurchase, setSelectedPurchase] = useState("current");

  const handleButtonClick = (choice: string) => {
    setSelectedPurchase(choice);
  };

  const handleCardClick = (cardTitle: string) => {
    setSelectedCard(cardTitle);
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

      <div className="mt-4 flex  flex-col justify-center ">
        <FinalizeRowPurchaseCard
          details={showSolarPanel}
          needs="Current"
          // solarRoof="65.38 kW Solar Roof"
          // solarProduction="84,209 kWh /yr Solar Production"
          // energyOffset="100% Energy Offset"
          onClick={() => handleCardClick("Meet Current Needs")}
          selected={selectedCard === "Meet Current Needs"}
        />

        <FinalizeRowPurchaseCard
          details={showSolarPanel}
          needs="Future"
          // solarRoof="65.38 kW Solar Roof"
          // solarProduction="84,209 kWh /yr Solar Production"
          // energyOffset="100% Energy Offset"
          onClick={() => handleCardClick("Meet Future Needs")}
          selected={selectedCard === "Meet Future Needs"}
        />
      </div>

      <div className="mt-4">
        <p className="text-lg font-semibold">Total Cost: 10 bucks</p>
        <p className="text-lg">Estimated Improvement: not much</p>
      </div>
      <button className="mt-6 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        Confirm Customization
      </button>
    </div>
  );
};

export default FinalizeRow;
