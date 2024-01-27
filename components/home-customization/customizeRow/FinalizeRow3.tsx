"use client";

import React, { useState } from "react";
import PurchaseTab from "../../ui/customizationComponents/PurchaseTab";
import FinalWindmill from "./ending/FinalWindmill";

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
  current: string;
};

type Props = {
    showWindMill: CustomizationDetails;
    selectedWindmillCard: string | null;
    setSelectedWindmillCard: React.Dispatch<React.SetStateAction<string | null>>;
    selectedWidmillPurchase: string;
    setSelectedWidmillPurchase: React.Dispatch<React.SetStateAction<string>>;
   };
   
   const FinalizeRow3: React.FC<Props> = ({
    showWindMill,
    selectedWindmillCard,
    setSelectedWindmillCard,
    selectedWidmillPurchase,
    setSelectedWidmillPurchase,
   }) => {
 


  const handleWindmillCardClick = (cardTitle: string) => {
    setSelectedWindmillCard(cardTitle);
  };

  return (
    <div className="w-full p-4">
      <h3 className="mb-4 text-xl font-bold text-gray-600">
        Summary of Your Customization
      </h3>

      <PurchaseTab 
          selectedPurchase={selectedWidmillPurchase} 
          setSelectedPurchase={setSelectedWidmillPurchase}
      />

      <div className="mt-4 gap-y-5">
      
        <FinalWindmill
          showWindmill={showWindMill}
          handleCardClick={handleWindmillCardClick}
          selectedCard={selectedWindmillCard}
          selectedPurchase={selectedWidmillPurchase}
        />
      </div>
    </div>
  );
};

export default FinalizeRow3;
