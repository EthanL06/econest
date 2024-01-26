"use client";

import React, { useState } from "react";
import PurchaseTab from "../../ui/customizationComponents/PurchaseTab";
import FinalWindmill from "./ending/FinalWindmill";

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

type Props = {
  showWindMill: CustomizationDetails;
};

const FinalizeRow: React.FC<Props> = ({
  showWindMill,
}) => {
 
  const [selectedWindmillCard, setSelectedWindmillCard] = useState<
    string | null
  >(null);

  const [selectedPurchase, setSelectedPurchase] = useState("current");



  const handleWindmillCardClick = (cardTitle: string) => {
    setSelectedWindmillCard(cardTitle);
  };

  return (
    <div className="w-full p-4">
      <h3 className="mb-4 text-xl font-bold text-gray-600">
        Summary of Your Customization
      </h3>

      <PurchaseTab 
          selectedPurchase={selectedPurchase} 
          setSelectedPurchase={setSelectedPurchase}
      />

      <div className="mt-4 gap-y-5">
      
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
