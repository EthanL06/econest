"use client";
import { CustomizationDetails } from "@/app/(home-customization)/build-a-home/page";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React, { useState } from "react";


type Props = {
  showSolarPanel: CustomizationDetails;
  showWindow: CustomizationDetails;
  showWindMill: CustomizationDetails;
  selectedSolarPurchase: string;
  selectedWindowPurchase: string;
  selectedWidmillPurchase: string;
  selectedSolarCard: string | null;
  selectedWindowCard: string | null;
  selectedWindmillCard: string | null;
};

const Savings: React.FC<Props> = (props) => {
  const [cashOrLoan, setCashOrLoan] = useState<string>("cash");

  

  return (
    <div className="mt-4 flex flex-col justify-center ">
      <h1 className="text-center text-3xl font-bold text-black">
        Order Summary
      </h1>
      <p className="mb-6 mt-2 text-pretty text-center text-sm font-medium text-black/90">
        Final price will be provided when your system design is complete.
      </p>

      <Tabs defaultValue="cash" className="w-full">
        <TabsList className="mb-4 w-full px-6 py-9">
          <TabsTrigger className="w-full p-4" value="cash">
            Cash
          </TabsTrigger>
          <TabsTrigger className="w-full p-4" value="loan">
            Loan
          </TabsTrigger>
        </TabsList>

        <TabsContent className="mt-0 flex flex-col text-black" value="cash">
        <Summary {...props} />
        </TabsContent>

        <TabsContent className="mt-0 flex flex-col text-black" value="loan">
        <Summary {...props} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const Summary = (props: Props) => {

  const parsePrice = (price: string) => {
    const cleanedPrice = price.replace(/[^\d.]/g, "");
    let finalizePrice = parseFloat(cleanedPrice) ;
    const roundedPrice = finalizePrice.toFixed(2);
    return roundedPrice;
  };

  const getTotalMoney = (card: CustomizationDetails, purchaseType: string, cardType: string) => {
    let mult = 1;
    if (purchaseType === "future") {
      mult *= 1.11;
    }
    if(cardType === "future") {
      mult *= 1.36;
    }
    return parsePrice(card.price) * mult;
  };

  return (
    <>
      <h2 className="text-[1.375rem] font-bold text-black">Your System</h2>

      <h3 className="mt-3 text-left font-semibold text-black">Solar Panels</h3>
      <div className="flex flex-col items-center text-sm text-black">
        <div className="flex w-full justify-between">
          <p className="font-medium">79.13 kW Solar Roof</p>
          <p className="font-semibold">${getTotalMoney(props.showSolarPanel,props.selectedSolarPurchase, props.selectedSolarCard)}</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Roof Tear Off</p>
          <p className="font-semibold">$53,500</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">6 Powerwalls</p>
          <p className="font-semibold">$54,600</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Solar & Powerwall Discount</p>
          <p className="font-semibold text-red-500">-$10,500</p>
        </div>

        <Separator className="my-2" />

        <div className="flex w-full justify-between">
          <p className="font-medium">Estimated Price</p>
          <p className="font-semibold text-black">$100,500</p>
        </div>
      </div>

      <h3 className="mt-3 text-left font-semibold text-black">Windmill</h3>
      <div className="flex flex-col items-center text-sm text-black">
        <div className="flex w-full justify-between">
          <p className="font-medium">79.13 kW Solar Roof</p>
          <p className="font-semibold">$1,085,100</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Roof Tear Off</p>
          <p className="font-semibold">$53,500</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">6 Powerwalls</p>
          <p className="font-semibold">$54,600</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Solar & Powerwall Discount</p>
          <p className="font-semibold text-red-500">-$10,500</p>
        </div>

        <Separator className="my-2" />

        <div className="flex w-full justify-between">
          <p className="font-medium">Estimated Price</p>
          <p className="font-semibold text-black">$100,500</p>
        </div>
      </div>

      <h3 className="mt-3 text-left font-semibold text-black">Windows</h3>
      <div className="flex flex-col items-center text-sm text-black">
        <div className="flex w-full justify-between">
          <p className="font-medium">79.13 kW Solar Roof</p>
          <p className="font-semibold">$1,085,100</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Roof Tear Off</p>
          <p className="font-semibold">$53,500</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">6 Powerwalls</p>
          <p className="font-semibold">$54,600</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Solar & Powerwall Discount</p>
          <p className="font-semibold text-red-500">-$10,500</p>
        </div>

        <Separator className="my-2" />

        <div className="flex w-full justify-between">
          <p className="font-medium">Estimated Price</p>
          <p className="font-semibold text-black">$100,500</p>
        </div>
      </div>
    </>
  );
};

export default Savings;
