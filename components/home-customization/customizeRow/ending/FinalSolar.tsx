import React from 'react';
import FinalizeRowPurchaseCard from '../../../ui/customizationComponents/finalizeRowPurchaseCards';

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

type FinalSolarProps = {
  showSolarPanel: CustomizationDetails;
  handleCardClick: (cardTitle: string) => void;
  selectedCard: string | null;
  selectedPurchase: string;
};

const FinalSolar: React.FC<FinalSolarProps> = ({
  showSolarPanel,
  handleCardClick,
  selectedCard,
  selectedPurchase
}) => {
  return (
    <div className="mt-6 flex flex-col justify-center ">
        <h3 className="text-md font-bold text-gray-600">Solar Roof</h3>
        <h1 className="text-2xl font-bold text-black">Produce Clean Solar Energy</h1>
        <h3 className="text-md font-bold text-gray-600">Luxury roof with integrated solar and battery storage.</h3>

      <FinalizeRowPurchaseCard
        details={showSolarPanel}
           // solarRoof="65.38 kW Solar Roof"
          // solarProduction="84,209 kWh /yr Solar Production"
          // energyOffset="100% Energy Offset"
        selectedPurchase={selectedPurchase}
        needs="Current"
        onClick={() => handleCardClick("Meet Current Needs")}
        selected={selectedCard === "Meet Current Needs"}
      />

      <FinalizeRowPurchaseCard
        details={showSolarPanel}
        needs="Future"
        selectedPurchase={selectedPurchase}
        onClick={() => handleCardClick("Meet Future Needs")}
        selected={selectedCard === "Meet Future Needs"}
      />
    </div>
  );
};

export default FinalSolar;