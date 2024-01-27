"use client";

import React, { useState } from "react";

import FinalSolar from "./ending/FinalSolar";
import PurchaseTab from "../../ui/customizationComponents/PurchaseTab";

type CustomizationDetails = {
 title: string;
 imgUrl: string;
 price: string;
 bulletPoints: [string, string];
 current: string;
};

type Props = {
 showSolarPanel: CustomizationDetails;
 selectedSolarCard: string | null;
 setSelectedSolarCard: React.Dispatch<React.SetStateAction<string | null>>;
 selectedSolarPurchase: string;
 setSelectedSolarPurchase: React.Dispatch<React.SetStateAction<string>>;
};

const FinalizeRow: React.FC<Props> = ({
 showSolarPanel,
 selectedSolarCard,
 setSelectedSolarCard,
 selectedSolarPurchase,
 setSelectedSolarPurchase,
}) => {
 const handleSolarCardClick = (cardTitle: string) => {
    setSelectedSolarCard(cardTitle);
 };

 return (
    <div className="w-full p-4">
      <h3 className="mb-4 text-xl font-bold text-gray-600">
        Summary of Your Customization
      </h3>

        <PurchaseTab 
          selectedPurchase={selectedSolarPurchase} 
          setSelectedPurchase={setSelectedSolarPurchase}/>

      <div className="mt-4 gap-y-5">
        <FinalSolar
          showSolarPanel={showSolarPanel}
          handleCardClick={handleSolarCardClick}
          selectedCard={selectedSolarCard}
          selectedPurchase={selectedSolarPurchase}
        />
      </div>
    </div>
 );
};

export default FinalizeRow;