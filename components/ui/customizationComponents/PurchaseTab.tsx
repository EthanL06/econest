"use client";

import React, { useState } from "react";
import PurchaseTab from "../../ui/customizationComponents/PurchaseTab";

type Props = {
  selectedPurchase: string;
  setSelectedPurchase: (selectedPurchase: string) => void;
};

const FinalizeRow: React.FC<Props> = ({
  selectedPurchase,
  setSelectedPurchase,
}) => {
  const handleButtonClick = (choice: string) => {
    setSelectedPurchase(choice);
  };

  return (
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
  );
};

export default FinalizeRow;
