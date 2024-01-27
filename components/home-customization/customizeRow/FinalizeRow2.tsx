"use client";

import React, { useState } from "react";
import FinalWindow from "./ending/finalWindow";
import PurchaseTab from "../../ui/customizationComponents/PurchaseTab";

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
  current: string;
};

type Props = {
    showWindow: CustomizationDetails;
    selectedWindowCard: string | null;
    setSelectedWindowCard: React.Dispatch<React.SetStateAction<string | null>>;
    selectedWindowPurchase: string;
    setSelectedWindowPurchase: React.Dispatch<React.SetStateAction<string>>;
   };

   const FinalizeRow2: React.FC<Props> = ({
    showWindow,
    selectedWindowCard,
    setSelectedWindowCard,
    selectedWindowPurchase,
    setSelectedWindowPurchase,
   }) => {



  const handleWindowCardClick = (cardTitle: string) => {
    setSelectedWindowCard(cardTitle);
  };



  return (
    <div className="w-full p-4">
      <h3 className="mb-4 text-xl font-bold text-gray-600">
        Summary of Your Customization
      </h3>

      <PurchaseTab 
          selectedPurchase={selectedWindowPurchase} 
          setSelectedPurchase={setSelectedWindowPurchase}
      />

      <div className="mt-4 gap-y-5">

        <FinalWindow
          showWindow={showWindow}
          handleCardClick={handleWindowCardClick}
          selectedCard={selectedWindowCard}
          selectedPurchase={selectedWindowPurchase}
        />
   
      </div>
    </div>
  );
};

export default FinalizeRow2;
