"use client";
import BouncingDotsLoader from "@/components/loadingAnim/BouncingDotsLoader";
import React, { useState } from "react";
import "./index.css";

const Chatbot = () => {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [msgArr, setMsgArr] = useState<string[]>([]);
  const [clicked, setClicked] = useState(false)

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(true)
    setText("")
    e.preventDefault();
    setMsgArr((prevArr) => [...prevArr, text]);
    setMsgArr((prevArr) => [...prevArr, " "]);
    let response: string = "";

    if (text.toLowerCase().includes("help")) {
      response = "About: information about us | Features: list of all the features the website has to offer ";
    } else if (text.toLowerCase().includes("about")) {
      response = "We are ecoNest, a passionate group committed to transforming homes into eco-friendly havens. With a focus on green and clean energy solutions, we aim to guide homeowners toward sustainable choices the benefit both their wallets and the planet.   \n   Our mission is to create a more sustainable future by making eco-friendly living accessible and rewarding. We envision a world where people embrace green solutions not just because it is the right thing to do, but because it benefits them financially and improves their quality of life. ";
    } else if (text.toLowerCase().includes('features')) {
      response = "Articles, Build A Home, Social Network. You can ask for more information about each feature using its name"
    } else if (text.toLowerCase().includes('articles')) {
      response = "Our website has many articles, each one containing concise yet comprehensive guide to renewable energy. Here, visitors will find insightful articles covering the latest in solar, wind, hydroelectric, geothermal, and biomass energy technologies. Each piece aims to educate readers on the science, efficiency, and potential of these green energy sources, alongside discussing the importance of energy storage and regulatory support."
    } else if (text.toLowerCase().includes('build') || text.toLowerCase().includes('home')) {
      response = "The Build-A-Home section of our website is a dynamic platform that empowers users to envision and plan their dream homes with a strong emphasis on sustainability and eco-friendly technology. This interactive space allows visitors to explore a variety of green building options, from energy-efficient appliances and smart home systems to sustainable construction materials and renewable energy installations. With detailed descriptions, visual aids, and customizable tools, users can easily incorporate the latest in eco-friendly technology into their home designs, ensuring not only aesthetic appeal but also environmental responsibility and cost savings. Whether you're a first-time homeowner or looking to renovate, this section provides the knowledge and inspiration needed to create a living space that harmonizes with nature and supports a healthier planet."
    } else if (text.toLowerCase().includes('social network')) {
      response = "Our website's social network contains a forum, where people can search for different community discussions regarding eco-friendly topics by selecting from many different popular tags, a challenges section, which contains countless number of Eco Challenges that people can parttake in in order to improve their community and claim Eco Points, and a chat section where members can log in and communicate with other members through text messages."
    } else {
      response = "Sending your question to the company, you will get your answer shortly"
    }
    setLoading(true);

    await new Promise<void>((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
    setMsgArr((prevArr) => [...prevArr, response]);
    
  };

  return (
    <div id='sty'>
      <form id="search">
        {
          <>
            {msgArr.map((item, index) => {
              const isEvenIndex = (index + 1) % 3 === 0;

              if (loading && index === msgArr.length - 1) {
                return (
                  <BouncingDotsLoader key={index}></BouncingDotsLoader>
                  // <p>Loading</p>
                );

                console.log("loading");
              }
              return (
                <p
                  key={index}
                  id="chats"
                  className={isEvenIndex ? "first" : "notFirst"}
                >
                  {item}
                </p>
              );
            })}
          </>
        }
        <div id='group'>
          <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem] translate-y-400px">
            <button
              className="!absolute right-1 top-1 z-10 select-none rounded bg-green-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
              onClick={onSubmit}
            >
              send
            </button>
            <input
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              value={text}
              id='textBar'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setText(e.target.value);
              }
              }
            ></input>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Chatbot;
