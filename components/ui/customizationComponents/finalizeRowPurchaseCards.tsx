import React from 'react';

type CustomizationDetails = {
    title: string;
    imgUrl: string;
    price: string;
    bulletPoints: [string, string];
  };
  
  interface FinalizeRowPurchaseCardProps {
    details: CustomizationDetails;
    needs: string;
    selectedPurchase: string;
    onClick: (type: string) => void;
    selected: boolean;
  }
  const FinalizeRowPurchaseCard: React.FC<FinalizeRowPurchaseCardProps> = ({
    details,
    needs,
    selectedPurchase,
    onClick,
    selected
  }) => {

    const parsePrice = (price: string) => {
        const cleanedPrice = price.replace(/[^\d.]/g, '');
        let finalizePrice = parseFloat(cleanedPrice) * 1.136;
        if(selectedPurchase === "future") {
            finalizePrice *= 1.11;
        }
        const roundedPrice = finalizePrice.toFixed(2);
        const formattedPrice = roundedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return formattedPrice;
      };

      const addText = (price: string) => {
            return "$" + price + " est"
      }

      const addFutureToCurrent = (price: string) => {
        const cleanedPrice = price.replace(/[^\d.]/g, '');
        let finalizePrice = parseFloat(cleanedPrice);
        if(selectedPurchase === "future") {
            finalizePrice *= 1.11;
        }
        const roundedPrice = finalizePrice.toFixed(2);
        const formattedPrice = roundedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return formattedPrice;
      }


  return (
    <div
    className={`mt-6 p-4 bg-white shadow rounded-lg cursor-pointer ${selected ? 'ring-2 ring-green-800' : ''}`}
    onClick={() => onClick(details.title)} 
  >
    <div className="flex justify-between items-center">
      <h4 className="text-lg font-bold text-black">Meet {needs} needs</h4>
      <p className="text-lg font-bold text-black">{ needs == "Future" ? addText(parsePrice(details.price)) : addText(addFutureToCurrent(details.price))}</p>
    </div>
    <p className="text-gray-500 mt-2 font-bold">{details.title}</p>
    <ul className="list-disc list-inside mt-2 text-gray-500">
    <li>{details.bulletPoints[0]}</li>
    <li>100% Energy Offset</li>
    </ul>
  </div>
  );
};

export default FinalizeRowPurchaseCard;