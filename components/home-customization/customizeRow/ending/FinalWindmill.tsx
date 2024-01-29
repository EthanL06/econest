import React from "react";
import FinalizeRowPurchaseCard from "../../../ui/customizationComponents/finalizeRowPurchaseCards";
import { CustomizationDetails } from "@/app/(home-customization)/build-a-home/page";

type FinalWindmillProps = {
  showWindmill: CustomizationDetails;
  handleCardClick: (cardTitle: string) => void;
  selectedCard: string | null;
  selectedPurchase: string;
};

const FinalWindmill: React.FC<FinalWindmillProps> = ({
  showWindmill,
  handleCardClick,
  selectedCard,
  selectedPurchase,
}) => {
  return (
    <div className="mt-6 flex flex-col justify-center ">
      <h3 className="text-md font-bold text-gray-600">Residential Windmill</h3>
      <h1 className="text-2xl font-bold text-black">Harness Wind Energy</h1>
      <h3 className="text-md font-bold text-gray-600">
        Sustainable power with a modern windmill solution.
      </h3>

      <FinalizeRowPurchaseCard
        details={showWindmill}
        needs="Current"
        selectedPurchase={selectedPurchase}
        onClick={() => handleCardClick("Meet Current Windmill Needs")}
        selected={selectedCard === "Meet Current Windmill Needs"}
      />

      <FinalizeRowPurchaseCard
        details={showWindmill}
        needs="Future"
        selectedPurchase={selectedPurchase}
        onClick={() => handleCardClick("Meet Future Windmill Needs")}
        selected={selectedCard === "Meet Future Windmill Needs"}
      />
    </div>
  );
};

export default FinalWindmill;
