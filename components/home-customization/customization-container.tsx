import React, { useState } from "react";
import SolarPanelCustomizationRow from "./customizeRow/SolarPanelCustomizationRow";
import WindowCustomizationRow from "./customizeRow/WindowCustomizationRow";
import WindmillCustomizationRow from "./customizeRow/WindmillCustomizationRow";
import FinalizeRow from "./customizeRow/FinalizeRow";
import AddressInput from "../landing/address-input";

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

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
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handleBackClick = () => {
    setPage(Math.max(page - 1, 1));
  };

  return (
    <div className="col-span-2 flex flex-col rounded-xl bg-slate-100 p-4 overflow-auto max-height-100">
      <p
        className="cursor-pointer self-start text-base text-gray-700"
        onClick={handleBackClick}
      >
        <u>&lt; back</u>
      </p>
      {page === 1 && (
        <SolarPanelCustomizationRow
          handleShowSolarPanel={handleShowSolarPanel}
        />
      )}
      {page === 2 && (
        <WindowCustomizationRow handleShowWindow={handleShowWindow} />
      )}
      {page === 3 && (
        <WindmillCustomizationRow handleShowWindmill={handleShowWindmill} />
      )}
      {page === 4 && (
        <FinalizeRow
          showSolarPanel={showSolarPanel}
          showWindow={showWindow}
          showWindMill={showWindMill}
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
