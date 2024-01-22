import React from 'react';

type Props = {
    showSolarPanel: string;
  showWindow: string;
  showWindMill: string;

};

const FinalizeRow: React.FC<Props> = ({
    showSolarPanel,
    showWindow,
    showWindMill,
}) => {
  return (
    <div className="w-full p-4">
      <h3 className="text-xl font-bold text-gray-600 mb-4">Summary of Your Customization</h3>
      <ul className="list-disc list-inside">
        <li>Solar Panel: {showSolarPanel}</li>
        <li>Window: {showWindow}</li>
        <li>Windmill: {showWindMill}</li>
      </ul>
      <div className="mt-4">
        <p className="text-lg font-semibold">Total Cost: 10 bucks</p>
        <p className="text-lg">Estimated Improvement: not much</p>
      </div>
      <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Confirm Customization
      </button>
    </div>
  );
};

export default FinalizeRow;