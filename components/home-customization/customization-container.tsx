// CustomizationContainer.tsx
import React, { useState } from "react";
import SolarPanelCustomizationRow from "./customizeRow/SolarPanelCustomizationRow"; 
import WindowCustomizationRow from "./customizeRow/WindowCustomizationRow";
import WindmillCustomizationRow from "./customizeRow/WindmillCustomizationRow";
import FinalizeRow from "./customizeRow/FinalizeRow";
import AddressInput from "../landing/address-input";

type Props = {
  handleShowSolarPanel: (title: string) => void;
  handleShowWindow: (title: string) => void;
  handleShowWindmill: (title: string) => void;
  showSolarPanel: string;
  showWindow: string;
  showWindMill: string;
};

const CustomizationContainer: React.FC<Props> = ({ handleShowSolarPanel, handleShowWindmill, handleShowWindow, showSolarPanel, showWindMill, showWindow }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
 

  const handleNextClick = () => {
      setPage(page + 1)
  };

  const handleBackClick = () => {
      setPage(Math.max(page-1, 1))
  };

  return (
<div className="col-span-2 bg-slate-100 rounded-xl p-4 flex flex-col">

<p className="text-gray-700 text-base cursor-pointer self-start" onClick={handleBackClick}><u>&lt; back</u></p>
      { page === 1 && <SolarPanelCustomizationRow handleShowSolarPanel={handleShowSolarPanel}/>}
      { page === 2 && <WindowCustomizationRow handleShowWindow={handleShowWindow}/>}
      { page === 3 && <WindmillCustomizationRow handleShowWindmill={handleShowWindmill}/>}
      { page === 4 && <FinalizeRow showSolarPanel={showSolarPanel} showWindow={showWindow} showWindMill={showWindMill}/>}

      <button
        className="w-5/6 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-150 ease-in-out mx-auto mt-4"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default CustomizationContainer;