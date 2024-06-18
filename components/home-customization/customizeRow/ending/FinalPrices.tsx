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

  const getTotalMoney = (card: CustomizationDetails, purchaseType: string, cardType: string, factor: number) => {
    let mult = 1;
    if (cardType === "future") {
      mult *= 1.11;
    }
    if(purchaseType === "future") {
      mult *= 1.36;
    }
    const finalizePrice = Number(parsePrice(card.price)) * mult * factor;
    return finalizePrice;
  };

  const formatPrice =  (price: number) => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  const totalPrice = () => {
      let totalMoney = Number(getTotalMoney(props.showWindMill, props.selectedWidmillPurchase, props.selectedWindowCard || "", .74 || 1)) + getTotalMoney(props.showWindow, props.selectedWindowPurchase, props.selectedWindowCard || "", .74 || 1) + getTotalMoney(props.showSolarPanel, props.selectedSolarPurchase, props.selectedSolarCard || "", .74 || 1);

      return totalMoney.toFixed(2);
  }

  return (
    <>
      <h2 className="text-[1.375rem] font-bold text-black">Your System</h2>

      <h3 className="mt-3 text-left font-semibold text-black">Solar Panels</h3>
      <div className="flex flex-col items-center text-sm text-black">
        <div className="flex w-full justify-between">
          <p className="font-medium">79.13 kW Solar Roof</p>
          <p className="font-semibold">${formatPrice(getTotalMoney(props.showSolarPanel, props.selectedSolarPurchase, props.selectedSolarCard || "", .5 || 1)) }</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Roof Tear Off</p>
          <p className="font-semibold">${formatPrice(getTotalMoney(props.showSolarPanel, props.selectedSolarPurchase, props.selectedSolarCard || "", .2 || 1)) }</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">6 Powerwalls</p>
          <p className="font-semibold">${formatPrice(getTotalMoney(props.showSolarPanel, props.selectedSolarPurchase, props.selectedSolarCard || "", .3 || 1)) }</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Tax Rebate</p>
          <p className="font-semibold text-red-500">-${formatPrice(getTotalMoney(props.showSolarPanel, props.selectedSolarPurchase, props.selectedSolarCard || "", .26 || 1)) }</p>
        </div>

        <Separator className="my-2" />

        <div className="flex w-full justify-between">
          <p className="font-medium">Estimated Price</p>
          <p className="font-semibold text-black">${formatPrice(getTotalMoney(props.showSolarPanel, props.selectedSolarPurchase, props.selectedSolarCard || "", .74 || 1)) }</p>
        </div>
      </div>

      <h3 className="mt-3 text-left font-semibold text-black">Window</h3>
      <div className="flex flex-col items-center text-sm text-black">
        <div className="flex w-full justify-between">
          <p className="font-medium">Insulated Window</p>
          <p className="font-semibold">${formatPrice(getTotalMoney(props.showWindow, props.selectedWindowPurchase, props.selectedWindowCard || "", .5 || 1)) }</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Window Installation</p>
          <p className="font-semibold">${formatPrice(getTotalMoney(props.showWindow, props.selectedWindowPurchase, props.selectedWindowCard || "", .2 || 1)) }</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Window Chargers</p>
          <p className="font-semibold">${formatPrice(getTotalMoney(props.showWindow, props.selectedWindowPurchase, props.selectedWindowCard || "", .3 || 1)) }</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Tax Rebate</p>
          <p className="font-semibold text-red-500">-${formatPrice(getTotalMoney(props.showWindow, props.selectedWindowPurchase, props.selectedWindowCard || "", .26 || 1)) }</p>
        </div>

        <Separator className="my-2" />

        <div className="flex w-full justify-between">
          <p className="font-medium">Estimated Price</p>
          <p className="font-semibold text-black">${formatPrice(getTotalMoney(props.showWindow, props.selectedWindowPurchase, props.selectedWindowCard || "", .74 || 1)) }</p>
        </div>
      </div>

      <h3 className="mt-3 text-left font-semibold text-black">Windmill</h3>
      <div className="flex flex-col items-center text-sm text-black">
        <div className="flex w-full justify-between">
          <p className="font-medium">Energy Efficient Windmill</p>
          <p className="font-semibold">${formatPrice(getTotalMoney(props.showWindMill, props.selectedWidmillPurchase, props.selectedWindmillCard || "", .5 || 1)) }</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Installation</p>
          <p className="font-semibold">${formatPrice(getTotalMoney(props.showWindMill, props.selectedWidmillPurchase, props.selectedWindmillCard || "", .2 || 1)) }</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium"> Energy Converters</p>
          <p className="font-semibold">${formatPrice(getTotalMoney(props.showWindMill, props.selectedWidmillPurchase, props.selectedWindmillCard || "", .3 || 1)) }</p>
        </div>

        <div className="flex w-full justify-between">
          <p className="font-medium">Tax Rebate</p>
          <p className="font-semibold text-red-500">-${formatPrice(getTotalMoney(props.showWindMill, props.selectedWidmillPurchase, props.selectedWindmillCard || "", .26 || 1)) }</p>
        </div>

        <Separator className="my-2" />

        <div className="flex w-full justify-between">
          <p className="font-medium">Estimated Price</p>
          <p className="font-semibold text-black">${formatPrice(getTotalMoney(props.showWindMill, props.selectedWidmillPurchase, props.selectedWindmillCard || "", .74 || 1)) }</p>
        </div>
      </div>

      <div className="p-5 rounded-lg border text-center font-bold mt-4">
          Total Price: ${totalPrice()}
      </div>


      <div className="p-5 rounded-lg bg-gradient-to-r text-gray-500 from-green-100 to-green-200 text-center font-bold mt-4 ">
          You Can Save 30% From Federal Tax Credit
      </div>

    </>
  );
};

export default Savings;
