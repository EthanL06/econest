"use client"

import React, { useState } from "react";
import CustomizationContainer from "@/components/home-customization/customization-container";
import HomeContainer from "@/components/home-customization/home-container";

export default function Home() {
  const [showSolarPanel, setShowSolarPanel] = useState("");
  const [showWindow, setShowWindow] = useState("");
  const [showWindMill, setShowWindMill] = useState("");

  const handleShowSolarPanel  = (title: string) =>  {
    setShowSolarPanel(title);
  }

  const handleShowWindow = (title: string) => {
    setShowWindow(title);
  }

  const handleShowWindMill = (title: string) => {
    setShowWindMill(title);
  }

  return (
    <div className="mt-11 flex min-h-screen w-full flex-col items-center gap-y-12">
      <div className="grid min-h-screen w-full grid-cols-6 grid-rows-1 gap-3 text-white px-4 py-4">
        <HomeContainer showSolarPanel={showSolarPanel} showWindMill={showWindMill} showWindow={showWindow}/>
        <CustomizationContainer handleShowSolarPanel={handleShowSolarPanel} handleShowWindmill={handleShowWindMill} handleShowWindow={handleShowWindow} showSolarPanel={showSolarPanel} showWindMill={showWindMill} showWindow={showWindow}/>
      </div>
    </div>
  );
}
