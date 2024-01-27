"use client";
import React, { useState, useRef } from "react";
import SolarPanelCustomizationRow from "./customizeRow/SolarPanelCustomizationRow";
import WindowCustomizationRow from "./customizeRow/WindowCustomizationRow";
import WindmillCustomizationRow from "./customizeRow/WindmillCustomizationRow";
import FinalizeRow from "./customizeRow/FinalizeRow";
import FinalizeRow2 from "./customizeRow/FinalizeRow2";
import FinalizeRow3 from "./customizeRow/FinalizeRow3";
import FinalPrices from "./customizeRow/ending/FinalPrices";
import AddressInput from "../landing/address-input";
import { CustomizationDetails } from "@/app/(home-customization)/home-customization/page";

type Props = {
  handleShowSolarPanel: (details: CustomizationDetails) => void;
  handleShowWindow: (details: CustomizationDetails) => void;
  handleShowWindmill: (details: CustomizationDetails) => void;
  showSolarPanel: CustomizationDetails;
  showWindow: CustomizationDetails;
  showWindMill: CustomizationDetails;
};

const CustomizationContainer: React.FC<Props> = ({
  handleShowSolarPanel,
  handleShowWindmill,
  handleShowWindow,
  showSolarPanel,
  showWindMill,
  showWindow,
}) => {
  const [selectedSolarCard, setSelectedSolarCard] = useState<string | null>(
    null,
  );
  const [selectedWindmillCard, setSelectedWindmillCard] = useState<
    string | null
  >(null);
  const [selectedWindowCard, setSelectedWindowCard] = useState<string | null>(
    null,
  );

  const [selectedWindowPurchase, setSelectedWindowPurchase] =
    useState("current");
  const [selectedWidmillPurchase, setSelectedWidmillPurchase] =
    useState("current");
  const [selectedSolarPurchase, setSelectedSolarPurchase] = useState("current");

  const [page, setPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    setPage(page + 1);
    containerRef.current?.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setPage(Math.max(page - 1, 1));
  };

  return (
    <div
      ref={containerRef}
      className="max-height-100 col-span-2 flex flex-col overflow-auto rounded-xl bg-slate-100 p-4"
    >
      <p
        className="cursor-pointer self-start text-base text-gray-700"
        onClick={handleBackClick}
      >
        <u>&lt; back</u>
      </p>
      {page === 1 && (
        <SolarPanelCustomizationRow
          showSolarPanel={showSolarPanel}
          handleShowSolarPanel={handleShowSolarPanel}
        />
      )}
      {page === 2 && (
        <WindowCustomizationRow
          handleShowWindow={handleShowWindow}
          showWindow={showWindow}
        />
      )}
      {page === 3 && (
        <WindmillCustomizationRow
          handleShowWindmill={handleShowWindmill}
          showWindMill={showWindMill}
        />
      )}
      {page === 4 && (
        <FinalizeRow
          showSolarPanel={showSolarPanel}
          selectedSolarCard={selectedSolarCard}
          setSelectedSolarCard={setSelectedSolarCard}
          selectedSolarPurchase={selectedSolarPurchase}
          setSelectedSolarPurchase={setSelectedSolarPurchase}
        />
      )}
      {page === 5 && (
        <FinalizeRow2
          showWindow={showWindow}
          selectedWindowCard={selectedWindowCard}
          setSelectedWindowCard={setSelectedWindowCard}
          selectedWindowPurchase={selectedWindowPurchase}
          setSelectedWindowPurchase={setSelectedWindowPurchase}
        />
      )}
      {page === 6 && (
        <FinalizeRow3
          showWindMill={showWindMill}
          selectedWindmillCard={selectedWindmillCard}
          setSelectedWindmillCard={setSelectedWindmillCard}
          selectedWidmillPurchase={selectedWidmillPurchase}
          setSelectedWidmillPurchase={setSelectedWidmillPurchase}
        />
      )}
      {page === 7 && (
        <FinalPrices
          showSolarPanel={showSolarPanel}
          showWindow={showWindow}
          showWindMill={showWindMill}
          selectedWindowPurchase={selectedWindowPurchase}
          selectedWidmillPurchase={selectedWidmillPurchase}
          selectedSolarPurchase={selectedSolarPurchase}
        />
      )}

      <button
        className="focus:shadow-outline mx-auto mt-4 w-5/6 transform rounded bg-gray-200 px-4 py-2 font-bold text-black transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default CustomizationContainer;
