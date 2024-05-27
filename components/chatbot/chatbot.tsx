"use client";
import BouncingDotsLoader from "@/components/loadingAnim/BouncingDotsLoader";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
// import "./index.css";

const Chatbot = () => {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [msgArr, setMsgArr] = useState<string[]>([]);
  const [clicked, setClicked] = useState(false);

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(true);
    setText("");
    e.preventDefault();
    setMsgArr((prevArr) => [...prevArr, text]);
    setMsgArr((prevArr) => [...prevArr, " "]);
    let response: string = "";

    if (text.toLowerCase().includes("help")) {
      response =
        "About: information about us | Features: list of all the features the website has to offer ";
    } else if (text.toLowerCase().includes("about")) {
      response =
        "We are ecoNest, a passionate group committed to transforming homes into eco-friendly havens. With a focus on green and clean energy solutions, we aim to guide homeowners toward sustainable choices the benefit both their wallets and the planet.   \n   Our mission is to create a more sustainable future by making eco-friendly living accessible and rewarding. We envision a world where people embrace green solutions not just because it is the right thing to do, but because it benefits them financially and improves their quality of life. ";
    } else if (text.toLowerCase().includes("features")) {
      response =
        "Articles, Build A Home, Social Network. You can ask for more information about each feature using its name";
    } else if (text.toLowerCase().includes("articles")) {
      response =
        "Our website has many articles, each one containing concise yet comprehensive guide to renewable energy. Here, visitors will find insightful articles covering the latest in solar, wind, hydroelectric, geothermal, and biomass energy technologies. Each piece aims to educate readers on the science, efficiency, and potential of these green energy sources, alongside discussing the importance of energy storage and regulatory support.";
    } else if (
      text.toLowerCase().includes("build") ||
      text.toLowerCase().includes("home")
    ) {
      response =
        "The Build-A-Home section of our website is a dynamic platform that empowers users to envision and plan their dream homes with a strong emphasis on sustainability and eco-friendly technology. This interactive space allows visitors to explore a variety of green building options, from energy-efficient appliances and smart home systems to sustainable construction materials and renewable energy installations. With detailed descriptions, visual aids, and customizable tools, users can easily incorporate the latest in eco-friendly technology into their home designs, ensuring not only aesthetic appeal but also environmental responsibility and cost savings. Whether you're a first-time homeowner or looking to renovate, this section provides the knowledge and inspiration needed to create a living space that harmonizes with nature and supports a healthier planet.";
    } else if (text.toLowerCase().includes("social network")) {
      response =
        "Our website's social network contains a forum, where people can search for different community discussions regarding eco-friendly topics by selecting from many different popular tags, a challenges section, which contains countless number of Eco Challenges that people can parttake in in order to improve their community and claim Eco Points, and a chat section where members can log in and communicate with other members through text messages.";
    } else {
      response =
        "Sending your question to the company, you will get your answer shortly";
    }
    setLoading(true);

    await new Promise<void>((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
    const newMessageArr = [...msgArr, response];
    setMsgArr((prevArr) => {
      const newArr = [...prevArr, response];
      return newArr.filter((item) => item !== " ");
    });
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 min-w-[12rem] max-w-[24rem]"
      id="sty"
    >
      <form
        className="rounded-lg border border-gray-300 bg-white p-4 shadow-md shadow-green-500/20 transition-all "
        id="search"
      >
        <div className="mb-2 flex w-full items-center justify-between border-b pb-2">
          <h1 className="text-2xl font-bold text-black">Chatbot</h1>

          <Button
            className="flex size-8 items-center justify-center rounded-full p-0.5"
            variant={"outline"}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <XIcon className="scale-75 stroke-gray-500" />
          </Button>
        </div>

        <div className=" relative max-h-[20rem] overflow-y-auto">
          <div
            style={{
              content: '""',
              position: "sticky",
              top: 0,
              left: 0,
              right: 0,
              height: "80px",
              background: "linear-gradient(to bottom, #fff, transparent)",
              pointerEvents: "none",
            }}
          />
          <div
            className="flex flex-col gap-y-0.5"
            style={{ marginTop: "-80px" }}
          >
            {msgArr.map((item, index) => {
              const isEvenIndex = (index + 1) % 3 === 0;

              if (loading && index === msgArr.length - 1) {
                return (
                  <div className="mt-4" key={index}>
                    <BouncingDotsLoader></BouncingDotsLoader>
                  </div>
                  // <p>Loading</p>
                );

                console.log("loading");
              }
              return (
                <p
                  key={index}
                  id="chats"
                  className={cn(
                    "m-2 rounded-lg bg-gray-50 p-3 font-medium transition-all hover:bg-gray-100",
                    isEvenIndex ? "first" : "notFirst",
                  )}
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>

        <div id="group" className="mt-3">
          <div className="relative flex h-10 w-full">
            {/* <button
              className="peer-placeholder-shown:bg-blue-gray-500 !absolute right-1 top-1 z-10 select-none rounded bg-green-500 px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
              onClick={onSubmit}
            >
              send
            </button> */}

            <Button onClick={onSubmit} className="absolute right-0 rounded-sm">
              Send
            </Button>
            <input
              className="w-full min-w-[18rem] max-w-[22rem] rounded-sm px-3 py-2.5 pr-20 font-sans outline outline-1 outline-gray-300 focus:outline-2 focus:outline-primary/50 active:outline-2 active:outline-primary/50"
              id="textBar"
              value={text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setText(e.target.value);
              }}
              autoComplete="off"
              placeholder="Type your message here"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;
