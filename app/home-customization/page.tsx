"use client"

import React, { useState } from "react";
import CustomizationContainer from "@/components/home-customization/customization-container";
import HomeContainer from "@/components/home-customization/home-container";

export default function Home() {
  const [showSolarPanel, setShowSolarPanel] = useState(false);

  const handleShowSolarPanel  = () =>  {
    setShowSolarPanel(true);
  }

  return (
    <div className="mt-11 flex min-h-screen w-full flex-col items-center gap-y-12">
      <div className="grid min-h-screen w-full grid-cols-6 grid-rows-1 gap-3 text-white px-4 py-4">
        <HomeContainer showSolarPanel={showSolarPanel} />
        <CustomizationContainer handleShowSolarPanel={handleShowSolarPanel} />
      </div>
    </div>
  );
}