"use client";

import React, { useState } from "react";
import FinalWindow from "./ending/finalWindow";
import PurchaseTab from "../../ui/customizationComponents/PurchaseTab";


type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

type Props = {
  showWindow: CustomizationDetails;
};

const FinalizeRow: React.FC<Props> = ({
  showWindow,
}) => {

  const [selectedWindowCard, setSelectedWindowCard] = useState<string | null>(
    null,
  );

  const [selectedPurchase, setSelectedPurchase] = useState("current");


  const handleWindowCardClick = (cardTitle: string) => {
    setSelectedWindowCard(cardTitle);
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

        <FinalWindow
          showWindow={showWindow}
          handleCardClick={handleWindowCardClick}
          selectedCard={selectedWindowCard}
          selectedPurchase={selectedPurchase}
        />
   
      </div>
    </div>
  );
};

export default FinalizeRow;
