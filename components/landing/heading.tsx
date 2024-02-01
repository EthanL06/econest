"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CircleDollarSign, Home, MapPin } from "lucide-react";
import AddressInput from "./address-input";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Heading = (props: Props) => {
  const baseDelay = 0.5;
  const [address, setAddress] = useState("");
  const [bill, setBill] = useState(0);

  return (
    <div className="flex w-full items-center justify-around gap-x-4">
      <div className="relative mr-auto hidden flex-1 -scale-x-100 justify-end lg:flex xl:justify-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.3, delay: baseDelay * 2 }}
          className="flex size-40 items-center"
        >
          <Bird />
        </motion.div>
      </div>

      <div className="relative flex flex-1 basis-auto flex-col items-center justify-center gap-y-8">
        <div className=" flex flex-col items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-medium text-primary"
          >
            One Home at a Time
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay }}
            className=" text-center text-3xl font-bold sm:text-4xl"
          >
            Sustainable Living Starts{" "}
            <span className="text-primary hover:text-primary/90">Here.</span>
          </motion.div>
        </div>

        <div className="flex w-full max-w-3xl flex-col items-center gap-y-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay * 2 }}
            className="self-start text-sm font-semibold"
          >
            Discover{" "}
            <span className="text-primary">Eco-Friendly Solutions</span> for
            Your Home
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay * 2 }}
            className="flex w-full flex-col items-center  justify-center gap-3 rounded-lg border border-border bg-white p-4 shadow sm:flex-row "
          >
            <div className="w-full">
              <AddressInput
                onAddressChange={(address) => {
                  setAddress(address);
                }}
              />
            </div>

            <div className="flex w-full gap-3">
              <Input
                placeholder="Enter monthly electric bill"
                pattern="[0-9]"
                type="number"
                min={0}
                onInput={(event) => {
                  if (!event.currentTarget.validity.valid) {
                    event.currentTarget.value = "";
                  } else {
                    setBill(parseInt(event.currentTarget.value));
                  }
                }}
              >
                <CircleDollarSign className="h-5 w-5" />
              </Input>
              <Link
                href={{
                  pathname: "/build-a-home",
                  query: { address: address, bill: bill },
                }}
              >
                <Button className="font-bold">Discover</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative ml-auto hidden flex-1  justify-end lg:flex xl:justify-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.3, delay: baseDelay * 2 }}
          className="flex size-40 items-end "
        >
          <Bird />
        </motion.div>
      </div>
    </div>
  );
};

const Bird = () => {
  return (
    <svg viewBox="0 0 273 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M260.467 41.2466L252.097 34.5522C258.6 33.8349 261.271 37.3811 262.365 40.1879C267.445 38.0786 272.975 40.843 272.975 40.843L256.228 46.9227C257.073 44.6661 258.543 42.6971 260.467 41.2466Z"
        fill="#3F3D56"
      />
      <path
        d="M8.36999 6.78815L1.90735e-05 0.0937522C6.50229 -0.623626 9.17394 2.92257 10.2673 5.72942C15.3472 3.62008 20.8772 6.38447 20.8772 6.38447L4.13039 12.4642C4.97524 10.2076 6.44591 8.23862 8.36999 6.78815Z"
        fill="#3F3D56"
      />
      <path
        d="M56.5673 95.626L48.1973 88.9316C54.6996 88.2143 57.3712 91.7605 58.4646 94.5673C63.5445 92.458 69.0745 95.2224 69.0745 95.2224L52.3277 101.302C53.1725 99.0455 54.6432 97.0765 56.5673 95.626Z"
        fill="#3F3D56"
      />
    </svg>
  );
};

export default Heading;
