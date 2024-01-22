"use client";

import React from "react";

type Props = {
  // setShowSolarPanel: (show: boolean) => void;
  handleShowSolarPanel: () => void;
};



const CustomizationContainer: React.FC<Props> = ({ handleShowSolarPanel }) => {
  const clicked = () => {
    console.log('clicked');
    handleShowSolarPanel();
  }


    //   <button
  //   className="p-2 bg-blue-500 text-white rounded z-50"
  //   onClick={() => clicked()}
  // >
  //   Add Solar Panel
  // </button>

  return (

    <div className="card col-span-1 ">
      <div className="flex flex-col justify-center items-center h-full">
        <button
          className="p-2 bg-blue-500 text-white rounded z-50"
          onClick={() => clicked()}
        >
          Add Solar Panel
        </button>
      </div>
    </div>
  );
};

export default CustomizationContainer;