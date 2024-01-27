"use client";

import React, { useState } from "react";
import CustomizationContainer from "@/components/home-customization/customization-container";
import HomeContainer from "@/components/home-customization/home-container";

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

function Home() {
  const [showSolarPanel, setShowSolarPanel] = useState<CustomizationDetails>({
    title: "",
    imgUrl: "",
    price: "",
    bulletPoints: ["", ""],
  });
  const [showWindow, setShowWindow] = useState<CustomizationDetails>({
    title: "",
    imgUrl: "",
    price: "",
    bulletPoints: ["", ""],
  });
  const [showWindMill, setShowWindMill] = useState<CustomizationDetails>({
    title: "",
    imgUrl: "",
    price: "",
    bulletPoints: ["", ""],
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
    <div className="flex min-h-screen w-full flex-col items-center gap-y-12 overflow-hidden">
      <div
        className="grid w-full grid-cols-6 grid-rows-1 gap-3  text-white"
        style={{
          maxHeight: "calc(100vh)",
          overflow: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onWheel={(e) => {
          e.currentTarget.scrollBy({
            top: e.deltaY < 0 ? -30 : 30,
            behavior: "smooth",
          });
        }}
      >
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
