"use client";

import React, { useState } from "react";

import FinalSolar from "./ending/FinalSolar";
import PurchaseTab from "../../ui/customizationComponents/PurchaseTab";
import { CustomizationDetails } from "@/app/(home-customization)/build-a-home/page";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  showSolarPanel: CustomizationDetails;
  selectedSolarCard: string | null;
  setSelectedSolarCard: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSolarPurchase: string;
  setSelectedSolarPurchase: React.Dispatch<React.SetStateAction<string>>;
};

const FinalizeRow: React.FC<Props> = ({
  showSolarPanel,
  selectedSolarCard,
  setSelectedSolarCard,
  selectedSolarPurchase,
  setSelectedSolarPurchase,
}) => {
  const handleSolarCardClick = (cardTitle: string) => {
    setSelectedSolarCard(cardTitle);
  };

  const parsePrice = (price: string, factor: number) => {
    const cleanedPrice = price.replace(/[^\d.]/g, "");
    let finalizePrice = parseFloat(cleanedPrice);
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
        <Tabs
          onValueChange={(val) => {
            setSelectedSolarPurchase(val);
          }}
          defaultValue={selectedSolarPurchase}
          className="w-full"
        >
          <TabsList className="mb-4 w-full px-6 py-9">
            <TabsTrigger className="p-4" value="current">
              Potential Incentives
            </TabsTrigger>
            <TabsTrigger className="p-4" value="future">
              Purchase Price
            </TabsTrigger>
          </TabsList>

          <TabsContent
            className="mt-0 flex flex-col text-black"
            value="current"
          >
            <p className="text-base font-medium">Solar Roof</p>
            <h2 className="text-[1.375rem] font-bold text-black">
              Produce Clean Solar Energy
            </h2>
            <p className="mb-6 mt-1 text-pretty text-sm font-medium text-black/90">
              Luxury roof with integrated solar and battery storage.
            </p>

            <form>
              <label
                className={`flex flex-col rounded border-2 border-border p-4 transition-all hover:cursor-pointer ${
                  selectedSolarCard === "current"
                    ? "has-[:checked]:border-primary has-[:checked]:shadow-md has-[:checked]:shadow-primary/25"
                    : ""
                }`}
              >
                <p className="text-lg font-bold text-black">
                  Meet Current Needs
                </p>
                <p className="text-lg font-medium text-black">
                  ${showSolarPanel.price + ".00"}{" "}
                  <span className="text-sm text-black/60">est.</span>
                </p>

                <h3 className="text-md mb-1 mt-2 font-bold text-gray-600">
                  {showSolarPanel.title}
                </h3>

                <ul className="list-inside list-disc">
                  <li className="text-base font-medium text-black">
                    {showSolarPanel.bulletPoints[0]}
                  </li>

                  <li className="text-base font-medium text-black">
                    100% Energy Offset
                  </li>
                </ul>

                <input
                  type="radio"
                  name="solarPanelSelection"
                  value="current"
                  checked={selectedSolarCard === "current"}
                  onChange={() => setSelectedSolarCard("current")}
                  className="hidden"
                />
              </label>

              <label
                className={`mt-4 flex flex-col rounded border-2 border-border p-4 transition-all hover:cursor-pointer ${
                  selectedSolarCard === "future"
                    ? "has-[:checked]:border-primary has-[:checked]:shadow-md has-[:checked]:shadow-primary/25"
                    : ""
                }`}
              >
                <p className="text-lg font-bold text-black">
                  Meet Future Needs
                </p>
                <p className="text-lg font-medium text-black">
                  ${parsePrice(showSolarPanel.price, 1.11)}{" "}
                  <span className="text-sm text-black/60">est.</span>
                </p>

                <h3 className="text-md mb-1 mt-2 font-bold text-gray-600">
                  {showSolarPanel.title}
                </h3>

                <ul className="list-inside list-disc">
                  <li className="text-base font-medium text-black">
                    {showSolarPanel.bulletPoints[0]}
                  </li>

                  <li className="text-base font-medium text-black">
                    100% Energy Offset
                  </li>
                </ul>

                <input
                  type="radio"
                  name="solarPanelSelection"
                  value="future"
                  checked={selectedSolarCard === "future"}
                  onChange={() => setSelectedSolarCard("future")}
                  className="hidden"
                />
              </label>
            </form>
          </TabsContent>

          <TabsContent className="mt-0 flex flex-col text-black" value="future">
            <p className="text-base font-medium">Solar Roof</p>
            <h2 className="text-[1.375rem] font-bold text-black">
              Produce Clean Solar Energy
            </h2>
            <p className="mb-6 mt-1 text-pretty text-sm font-medium text-black/90">
              Luxury roof with integrated solar and battery storage.
            </p>

            <form>
              <label
                className={`flex flex-col rounded border-2 border-border p-4 transition-all hover:cursor-pointer ${
                  selectedSolarCard === "current"
                    ? "has-[:checked]:border-primary has-[:checked]:shadow-md has-[:checked]:shadow-primary/25"
                    : ""
                }`}
              >
                <p className="text-lg font-bold text-black">
                  Meet Current Needs
                </p>
                <p className="text-lg font-medium text-black">
                  ${parsePrice(showSolarPanel.price, 1.36)}{" "}
                  <span className="text-sm text-black/60">est.</span>
                </p>

                <h3 className="text-md mb-1 mt-2 font-bold text-gray-600">
                  {showSolarPanel.title}
                </h3>

                <ul className="list-inside list-disc">
                  <li className="text-base font-medium text-black">
                    {showSolarPanel.bulletPoints[0]}
                  </li>

                  <li className="text-base font-medium text-black">
                    100% Energy Offset
                  </li>
                </ul>

                <input
                  type="radio"
                  name="solarPanelSelection"
                  value="current"
                  checked={selectedSolarCard === "current"}
                  onChange={() => setSelectedSolarCard("current")}
                  className="hidden"
                />
              </label>

              <label
                className={`mt-4 flex flex-col rounded border-2 border-border p-4 transition-all hover:cursor-pointer ${
                  selectedSolarCard === "future"
                    ? "has-[:checked]:border-primary has-[:checked]:shadow-md has-[:checked]:shadow-primary/25"
                    : ""
                }`}
              >
                <p className="text-lg font-bold text-black">
                  Meet Future Needs
                </p>
                <p className="text-lg font-medium text-black">
                  ${parsePrice(showSolarPanel.price, 1.11 * 1.36)}{" "}
                  <span className="text-sm text-black/60">est.</span>
                </p>

                <h3 className="text-md mb-1 mt-2 font-bold text-gray-600">
                  {showSolarPanel.title}
                </h3>

                <ul className="list-inside list-disc">
                  <li className="text-base font-medium text-black">
                    {showSolarPanel.bulletPoints[0]}
                  </li>

                  <li className="text-base font-medium text-black">
                    100% Energy Offset
                  </li>
                </ul>

                <input
                  type="radio"
                  name="solarPanelSelection"
                  value="future"
                  checked={selectedSolarCard === "future"}
                  onChange={() => setSelectedSolarCard("future")}
                  className="hidden"
                />
              </label>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FinalizeRow;
