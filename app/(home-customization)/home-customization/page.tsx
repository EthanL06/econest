"use client";

import React, { useState } from "react";
import CustomizationContainer from "@/components/home-customization/customization-container";
import HomeContainer from "@/components/home-customization/home-container";

export type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
  current: string;
};

function Home() {
  const [showSolarPanel, setShowSolarPanel] = useState<CustomizationDetails>({
    title: "",
    imgUrl: "",
    price: "",
    bulletPoints: ["", ""],
    current: "",
  });
  const [showWindow, setShowWindow] = useState<CustomizationDetails>({
    title: "",
    imgUrl: "",
    price: "",
    bulletPoints: ["", ""],
    current: "",
  });
  const [showWindMill, setShowWindMill] = useState<CustomizationDetails>({
    title: "",
    imgUrl: "",
    price: "",
    bulletPoints: ["", ""],
    current: "",
  });

  const handleShowSolarPanel = (details: CustomizationDetails) => {
    setShowSolarPanel(details);
  };

  const handleShowWindow = (details: CustomizationDetails) => {
    setShowWindow(details);
  };

  const handleShowWindMill = (details: CustomizationDetails) => {
    setShowWindMill(details);
  };

  return (
    <div className="flex h-full w-full flex-col items-center gap-y-12">
      <div className="relative flex min-h-screen w-full flex-col gap-3 text-white lg:flex-row">
        <HomeContainer
          showSolarPanel={showSolarPanel}
          showWindMill={showWindMill}
          showWindow={showWindow}
        />
        <CustomizationContainer
          handleShowSolarPanel={handleShowSolarPanel}
          handleShowWindmill={handleShowWindMill}
          handleShowWindow={handleShowWindow}
          showSolarPanel={showSolarPanel}
          showWindMill={showWindMill}
          showWindow={showWindow}
        />
      </div>
    </div>
  );
}

export default Home;
