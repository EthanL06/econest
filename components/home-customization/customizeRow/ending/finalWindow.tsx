import React from 'react';
import FinalizeRowPurchaseCard from '../../../ui/customizationComponents/finalizeRowPurchaseCards';

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

type FinalWindowProps = {
  showWindow: CustomizationDetails;
  handleCardClick: (cardTitle: string) => void;
  selectedCard: string | null;
  selectedPurchase: string;
};

const FinalWindow: React.FC<FinalWindowProps> = ({
  showWindow,
  handleCardClick,
  selectedCard,
  selectedPurchase,
}) => {
  return (
    <div className="mt-4 flex flex-col justify-center ">

<h3 className="text-md font-bold text-gray-600">Energy Efficient Windows</h3>
<h1 className="text-2xl font-bold text-black">Reduce Energy Costs</h1>
<h3 className="text-md font-bold text-gray-600">High-quality windows designed for maximum insulation.</h3>

        
      <FinalizeRowPurchaseCard
        details={showWindow}
        needs="Current"
        selectedPurchase={selectedPurchase}
        onClick={() => handleCardClick("Meet Current Window Needs")}
        selected={selectedCard === "Meet Current Window Needs"}
      />

      <FinalizeRowPurchaseCard
        details={showWindow}
        needs="Future"
        selectedPurchase={selectedPurchase}
        onClick={() => handleCardClick("Meet Future Window Needs")}
        selected={selectedCard === "Meet Future Window Needs"}
      />
    </div>
  );
};

export default FinalWindow;