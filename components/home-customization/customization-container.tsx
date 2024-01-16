"use client";

import React from "react";

type Props = {
  setShowSolarPanel: (show: boolean) => void;
};



const CustomizationContainer: React.FC<Props> = ({ setShowSolarPanel }) => {
  const clicked = () => {
    console.log('clicked');
    setShowSolarPanel(true);
  }
  return (
    <button
    className="p-2 bg-blue-500 text-white rounded z-50"
    onClick={() => clicked()}
  >
    Add Solar Panel
  </button>
  );
};

export default CustomizationContainer;