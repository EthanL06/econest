"use client";
import React, { useState } from "react";

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

type FinalWindmillProps = {};

const Savings: React.FC<FinalWindmillProps> = ({}) => {
  const [cashOrLoan, setCashOrLoan] = useState<string>("cash");
  return (
    <div className="mt-4 flex flex-col justify-center ">
      <h1 className="text-center text-6xl font-bold text-black">
        Order Summary
      </h1>
      <h3 className="text-md text-center font-bold text-gray-600">
        Final price will be provided when your system design is complete.
      </h3>

      <div className="mt-4 flex justify-center space-x-4 rounded bg-gray-200 p-1 transition-all duration-300">
        <button
          className={`rounded px-3 py-1 ${
            cashOrLoan === "cash" ? "bg-white text-gray-700" : "text-gray-700"
          } transition-all duration-300`}
          onClick={() => setCashOrLoan("cash")}
        >
          Cash
        </button>
        <button
          className={`rounded px-3 py-1 ${
            cashOrLoan === "loan" ? "bg-white text-gray-700" : "text-gray-700"
          } transition-all duration-300`}
          onClick={() => setCashOrLoan("loan")}
        >
          Loan
        </button>
      </div>


      <h1 className="text-xl font-bold text-black text-left mt-3">Your System</h1>

      <h1 className="text-l font-bold text-gray-600 text-left mt-3">Solar Panels</h1>
        <div className="flex flex-col items-center">
        <div className="flex justify-between w-full">
            <p className="text-gray-600">79.13 kW Solar Roof</p>
            <p className="text-black">$1,085,100</p>
        </div>
        <div className="flex justify-between w-full">
            <p className="text-gray-600">Roof Tear Off</p>
            <p className="text-black">$53,500</p>
        </div>
        <div className="flex justify-between w-full">
            <p className="text-gray-600">6 Powerwalls</p>
            <p className="text-black">$54,600</p>
        </div>
        <div className="flex justify-between w-full">
            <p className="text-gray-600">Solar & Powerwall Discount</p>
            <p className="text-black">-$10,500</p>
        </div>

        <div className="flex justify-between w-full">
            <p className="text-black font-bold">Estimated Price</p>
            <p className="text-black">$100,500</p>
        </div>
        </div>


        <h1 className="text-l font-bold text-gray-600 text-left mt-3">Windmill</h1>
        <div className="flex flex-col items-center">
        <div className="flex justify-between w-full">
            <p className="text-gray-600">Residential Windmill</p>
            <p className="text-black">$1,085,100</p>
            </div>
        <div className="flex justify-between w-full">
            <p className="text-gray-600">Roof Tear Off</p>
            <p className="text-black">$53,500</p>
        </div>
        <div className="flex justify-between w-full">
            <p className="text-gray-600">6 Powerwalls</p>
            <p className="text-black">$54,600</p>
        </div>
        <div className="flex justify-between w-full">
            <p className="text-gray-600">Solar & Powerwall Discount</p>
            <p className="text-black">-$10,500</p>
        </div>

        <div className="flex justify-between w-full">
            <p className="text-black font-bold">Estimated Price</p>
            <p className="text-black">$100,500</p>
        </div>
        </div>

        <h1 className="text-l font-bold text-gray-600 text-left mt-3">Windows</h1>
        <div className="flex flex-col items-center">
        <div className="flex justify-between w-full">
            <p className="text-gray-600">Residential Windmill</p>
            <p className="text-black">$1,085,100</p>
            </div>
        <div className="flex justify-between w-full">
            <p className="text-gray-600">Roof Tear Off</p>
            <p className="text-black">$53,500</p>
        </div>
        <div className="flex justify-between w-full">
            <p className="text-gray-600">6 Powerwalls</p>
            <p className="text-black">$54,600</p>
        </div>
        <div className="flex justify-between w-full">
            <p className="text-gray-600">Solar & Powerwall Discount</p>
            <p className="text-black">-$10,500</p>
        </div>

        <div className="flex justify-between w-full">
            <p className="text-black font-bold">Estimated Price</p>
            <p className="text-black">$100,500</p>
        </div>
        </div>




</div>
  );
};

export default Savings;
