"use client";

import React, { useState } from "react";
import PurchaseTab from "../../ui/customizationComponents/PurchaseTab";
import FinalWindmill from "./ending/FinalWindmill";
import { CustomizationDetails } from "@/app/(home-customization)/home-customization/page";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  showWindMill: CustomizationDetails;
  selectedWindmillCard: string | null;
  setSelectedWindmillCard: React.Dispatch<React.SetStateAction<string | null>>;
  selectedWidmillPurchase: string;
  setSelectedWidmillPurchase: React.Dispatch<React.SetStateAction<string>>;
};

const FinalizeRow3: React.FC<Props> = ({
  showWindMill,
  selectedWindmillCard,
  setSelectedWindmillCard,
  selectedWidmillPurchase,
  setSelectedWidmillPurchase,
}) => {
  const handleWindmillCardClick = (cardTitle: string) => {
    setSelectedWindmillCard(cardTitle);
  };

  const parsePrice = (price: string, factor: number) => {
    const cleanedPrice = price.replace(/[^\d.]/g, "");
    let finalizePrice = parseFloat(cleanedPrice) * 1.136;
    finalizePrice *= factor;
    const roundedPrice = finalizePrice.toFixed(2);
    const formattedPrice = roundedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedPrice;
  };

  return (
    <div className="w-full">
      <h1 className="mb-4 text-center text-3xl font-bold text-black">
        Purchase Summary
      </h1>

      <div>
        <Tabs defaultValue="incentives" className="w-full">
          <TabsList className="mb-4 w-full px-6 py-9">
            <TabsTrigger className="p-4" value="incentives">
              Potential Incentives
            </TabsTrigger>
            <TabsTrigger className="p-4" value="purchase">
              Purchase Price
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className="mt-0 flex flex-col text-black"
            value="incentives"
          >
            <p className="text-base font-medium">Residential Windmill</p>
            <h2 className="text-[1.375rem] font-bold text-black">
              Harness Wind Energy
            </h2>
            <p className="mb-6 mt-1 text-pretty text-sm font-medium text-black/90">
              Sustainable power with a modern windmill solution.
            </p>

            <form>
              <label className=" flex flex-col rounded border-2 border-border p-4 transition-all hover:cursor-pointer has-[:checked]:border-primary  has-[:checked]:shadow-md has-[:checked]:shadow-primary/25">
                <p className="text-lg font-bold text-black">
                  Meet Current Needs
                </p>
                <p className="text-lg font-medium text-black">
                  ${showWindMill.price + ".00"}{" "}
                  <span className="text-sm text-black/60">est.</span>
                </p>

                <h3 className="text-md mb-1 mt-2 font-bold text-gray-600">
                  {showWindMill.title}
                </h3>

                <ul className="list-inside list-disc">
                  <li className="text-base font-medium text-black">
                    {showWindMill.bulletPoints[0]}
                  </li>

                  <li className="text-base font-medium text-black">
                    100% Energy Offset
                  </li>
                </ul>

                <input
                  type="radio"
                  name="windMillSelection"
                  className="hidden"
                />
              </label>

              <label className=" mt-4 flex flex-col rounded border-2 border-border p-4 transition-all hover:cursor-pointer has-[:checked]:border-primary has-[:checked]:shadow-md has-[:checked]:shadow-primary/25">
                <p className="text-lg font-bold text-black">
                  Meet Future Needs
                </p>
                <p className="text-lg font-medium text-black">
                  ${parsePrice(showWindMill.price, 1.11)}{" "}
                  <span className="text-sm text-black/60">est.</span>
                </p>

                <h3 className="text-md mb-1 mt-2 font-bold text-gray-600">
                  {showWindMill.title}
                </h3>

                <ul className="list-inside list-disc">
                  <li className="text-base font-medium text-black">
                    {showWindMill.bulletPoints[0]}
                  </li>

                  <li className="text-base font-medium text-black">
                    100% Energy Offset
                  </li>
                </ul>

                <input
                  type="radio"
                  name="windMillSelection"
                  className="hidden"
                />
              </label>
            </form>
          </TabsContent>

          <TabsContent
            className="mt-0 flex flex-col text-black"
            value="purchase"
          >
            <p className="text-base font-medium">Residential Windmill</p>
            <h2 className="text-[1.375rem] font-bold text-black">
              Harness Wind Energy
            </h2>
            <p className="mb-6 mt-1 text-pretty text-sm font-medium text-black/90">
              Sustainable power with a modern windmill solution.
            </p>

            <form>
              <label className=" flex flex-col rounded border-2 border-border p-4 transition-all hover:cursor-pointer has-[:checked]:border-primary  has-[:checked]:shadow-md has-[:checked]:shadow-primary/25">
                <p className="text-lg font-bold text-black">
                  Meet Current Needs
                </p>
                <p className="text-lg font-medium text-black">
                  ${showWindMill.price + ".00"}{" "}
                  <span className="text-sm text-black/60">est.</span>
                </p>

                <h3 className="text-md mb-1 mt-2 font-bold text-gray-600">
                  {showWindMill.title}
                </h3>

                <ul className="list-inside list-disc">
                  <li className="text-base font-medium text-black">
                    {showWindMill.bulletPoints[0]}
                  </li>

                  <li className="text-base font-medium text-black">
                    100% Energy Offset
                  </li>
                </ul>

                <input
                  type="radio"
                  name="windMillSelection"
                  className="hidden"
                />
              </label>

              <label className=" mt-4 flex flex-col rounded border-2 border-border p-4 transition-all hover:cursor-pointer has-[:checked]:border-primary has-[:checked]:shadow-md has-[:checked]:shadow-primary/25">
                <p className="text-lg font-bold text-black">
                  Meet Future Needs
                </p>
                <p className="text-lg font-medium text-black">
                  ${parsePrice(showWindMill.price, 1.11)}{" "}
                  <span className="text-sm text-black/60">est.</span>
                </p>

                <h3 className="text-md mb-1 mt-2 font-bold text-gray-600">
                  {showWindMill.title}
                </h3>

                <ul className="list-inside list-disc">
                  <li className="text-base font-medium text-black">
                    {showWindMill.bulletPoints[0]}
                  </li>

                  <li className="text-base font-medium text-black">
                    100% Energy Offset
                  </li>
                </ul>

                <input
                  type="radio"
                  name="windMillSelection"
                  className="hidden"
                />
              </label>
            </form>
          </TabsContent>
        </Tabs>
      </div>

      {/* <PurchaseTab
        selectedPurchase={selectedWidmillPurchase}
        setSelectedPurchase={setSelectedWidmillPurchase}
      />

      <div className="mt-4 gap-y-5">
        <FinalWindmill
          showWindmill={showWindMill}
          handleCardClick={handleWindmillCardClick}
          selectedCard={selectedWindmillCard}
          selectedPurchase={selectedWidmillPurchase}
        />
      </div> */}
    </div>
  );
};

export default FinalizeRow3;
