"use client";

import React, { useState } from "react";

import FinalSolar from "./ending/FinalSolar";
import PurchaseTab from "../../ui/customizationComponents/PurchaseTab";

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

type Props = {
  showSolarPanel: CustomizationDetails;
};

const FinalizeRow: React.FC<Props> = ({
  showSolarPanel,
}) => {
  const [selectedSolarCard, setSelectedSolarCard] = useState<string | null>(
    null,
  );

  const [selectedPurchase, setSelectedPurchase] = useState("current");


  const handleSolarCardClick = (cardTitle: string) => {
    setSelectedSolarCard(cardTitle);
  };



  return (
    <div className="w-full p-4">
      <h3 className="mb-4 text-xl font-bold text-gray-600">
        Summary of Your Customization
      </h3>

        <PurchaseTab 
          selectedPurchase={selectedPurchase} 
          setSelectedPurchase={setSelectedPurchase}/>


      <div className="mt-4 gap-y-5">
        <FinalSolar
          showSolarPanel={showSolarPanel}
          handleCardClick={handleSolarCardClick}
          selectedCard={selectedSolarCard}
          selectedPurchase={selectedPurchase}
        />

      </div>
    </div>
  );
};

export default FinalizeRow;
