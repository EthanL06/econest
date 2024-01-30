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
import { CustomizationDetails } from "@/app/(home-customization)/build-a-home/page";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "../ui/progress";

type Props = {
  handleShowSolarPanel: (details: CustomizationDetails) => void;
  handleShowWindow: (details: CustomizationDetails) => void;
  handleShowWindmill: (details: CustomizationDetails) => void;
  showSolarPanel: CustomizationDetails;
  showWindow: CustomizationDetails;
  showWindMill: CustomizationDetails;
  page: number;
  setPage: (number: number) => void;
};

const CustomizationContainer: React.FC<Props> = ({
  handleShowSolarPanel,
  handleShowWindmill,
  handleShowWindow,
  showSolarPanel,
  showWindMill,
  showWindow,
  page,
  setPage
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

  const containerRef = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    setPage(page + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBackClick = () => {
    setPage(Math.max(page - 1, 1));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full flex-col overflow-auto rounded-xl px-1 lg:w-[26rem] lg:px-9"
    >
      <div className="mb-4 mt-2">
        <Progress className="h-[6px] w-full" max={7} value={page} />
      </div>

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
          selectedSolarCard={selectedSolarCard}
          selectedWindmillCard={selectedWindmillCard}
          selectedWindowCard={selectedWindowCard}
        />
      )}

      <div className="mt-4 flex items-center justify-between">
        <Button
          onClick={handleBackClick}
          className={cn(
            "text-base font-bold text-black",
            page === 1 && "invisible",
          )}
          variant="ghost"
          size={"lg"}
        >
          Previous
        </Button>

        <Button
          onClick={handleNextClick}
          className={cn("text-base font-bold", page === 7 && "invisible")}
          variant="default"
          size={"lg"}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CustomizationContainer;
