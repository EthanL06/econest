import React from 'react';
import FinalizeRowPurchaseCard from '../../../ui/customizationComponents/finalizeRowPurchaseCards';

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

type FinalWindmillProps = {

};

const Savings: React.FC<FinalWindmillProps> = ({

}) => {
  return (
    <div className="mt-4 flex flex-col justify-center ">
        <h3 className="text-md font-bold text-gray-600">Residential Windmill</h3>
<h1 className="text-2xl font-bold text-black">Harness Wind Energy</h1>
<h3 className="text-md font-bold text-gray-600">Sustainable power with a modern windmill solution.</h3>

    </div>
  );
};

export default Savings;