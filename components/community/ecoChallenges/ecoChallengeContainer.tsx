"use client";
import React, { useState, useEffect } from "react";
import CustomCard from "./customCard";
import SolutionCard from "./solutionCard";
import TopWave2 from "./svgs/topWave2";
import BottomWave2 from "./svgs/bottomWave2";
import AddFriendCard from "./addFriendCard";
import { promises as fs } from "fs";
import path from "path";
import Blog from "@/types/blog";

type Solution = {
  id: string;
  image: string;
  title: string;
  name: string;
  date: string;
  description: string;
  ecoPoints: number;
};

type Props = {};

const EcoChallengesContainer = (props: Props) => {
  let count = 0;

  const [solutions, setSolutions] = useState<Solution[]>([]);

  const challenges = [
    {
      id: "1",
      image: "./images/ecoCommunity/addSolarPanel.jpeg",
      title: "Add Solar Panel Challenge",
      name: "John Doe",
      date: "2023-04-01",
      description:
        "Embrace renewable energy by installing a solar panel in your home. This challenge encourages you to reduce your carbon footprint and contribute to a sustainable future.",
      ecoPoints: 350,
    },
    {
      id: "2",
      image: "./images/ecoCommunity/diy.jpeg",
      title: "DIY Eco-Friendly Project Challenge",
      name: "Jane Doe",
      date: "2023-04-02",
      description:
        "Embark on a DIY project that promotes eco-friendliness. Build your very own eco-friendly home project. This challenge rewards creativity and sustainability.",
      ecoPoints: 200,
    },

    {
      id: "3",
      image: "./images/ecoCommunity/growPlant.png",
      title: "Grow Your Own Plant Challenge",
      name: "Alice Smith",
      date: "2023-04-03",
      description:
        "Start a gardening journey by growing your own plant. This challenge not only helps in reducing waste but also provides a sense of accomplishment and connection with nature.",
      ecoPoints: 150,
    },
    {
      id: "4",
      image: "./images/ecoCommunity/growYourOwnGarden.jpeg",
      title: "Grow Your Own Garden Challenge",
      name: "Bob Johnson",
      date: "2023-04-04",
      description:
        "Transform a patch of land into a thriving eco-friendly garden. This challenge encourages you to learn about sustainable gardening practices and contribute to a healthier planet.",
      ecoPoints: 250,
    },
    {
      id: "5",
      image: "./images/ecoCommunity/pickUpTrash.jpeg",
      title: "Pick Up Trash Challenge",
      name: "Charlie Brown",
      date: "2023-04-05",
      description:
        "Make a difference in your community by picking up trash. This simple yet impactful challenge helps in keeping our environment clean and reduces pollution.",
      ecoPoints: 100,
    },
    {
      id: "6",
      image: "./images/ecoCommunity/recycle.jpeg",
      title: "Recycle Challenge",
      name: "Diana Prince",
      date: "2023-04-06",
      description:
        "Commit to recycling regularly to reduce waste and protect our natural resources. This challenge rewards you for making a positive change in your local community.",
      ecoPoints: 150,
    },
    {
      id: "7",
      image: "./images/ecoCommunity/ecoTransport.jpeg",
      title: "Eco-Friendly Transport Challenge",
      name: "Eve Green",
      date: "2023-04-07",
      description:
        "Commit to using public transportation, carpooling, or biking for at least one week. This challenge encourages you to reduce your carbon footprint and contribute to a healthier environment. ",
      ecoPoints: 120,
    },
    {
      id: "8",
      image: "./images/ecoCommunity/composting.jpeg",
      title: "Composting Challenge",
      name: "Garden Guru",
      date: "2023-04-09",
      description:
        "Start a composting project at home. This encourages recycling organic waste into nutrient-rich compost, contributing to a healthier soil and reducing your carbon footprint.",
      ecoPoints: 140,
    },
    // Add more challenges as needed
  ];

  const friends = [
    {
      id: 1,
      userId: "53BK7w3TTfUjIaHXezpaGBIersX2",
    },
    {
      id: 2,
      userId: "I6vrpUZeKzQgtHWnDjOh3arwEGs2",
    },
    {
      id: 3,
      userId: "N3v8Bb3GmmSwPOJ9s7DmtnrtvS13",
    },
    {
      id: 4,
      userId: "cLylZoeq65hIilcvYcnrWDG5sro2",
    },
  ];

  const blogs = [
    {
      href: "solar-panels",
      writer: "John Doe",
      date: "03/01/2023",
      name: "Solar Panels",
      description:
        "Installing solar panels allows you to generate clean, renewable electricity from sunlight to power your home.  High-efficiency solar modules can provide over 90% of a household's energy needs.",
      content:
        "<h1>Harnessing the Power of the Sun: A Comprehensive Guide to Solar Panels for Sustainable Living</h1><p>Solar panels have emerged as a groundbreaking solution for individuals seeking to adopt clean and green energy sources. This article aims to provide an in-depth analysis of key factors influencing the adoption of solar panels, covering how they work, their environmental benefits, potential cost considerations, available tax rebates and incentives, and the tradeoffs between upfront costs and long-term savings.</p><h2>How Solar Panels Work</h2><p>Installing solar panels enables the generation of clean, renewable electricity by harnessing sunlight to power homes. High-efficiency solar modules have the capability to fulfill over 90% of a household's energy needs. Solar energy installation companies conduct thorough site assessments to determine the ideal panel system size and configuration for each roof. The panels feed into an inverter, converting DC power into usable AC electricity. Excess solar energy produced can be distributed back to the grid, allowing households to earn bill credits through net metering programs.</p><h2>Environmental Benefits</h2><p>One of the primary advantages of solar panels is their contribution to environmental sustainability. By relying on sunlight, solar energy minimizes dependence on traditional fossil fuels, reducing greenhouse gas emissions and mitigating climate change. The US Department of Energy highlights that solar power is not only financially attractive but also environmentally sustainable, making it a compelling choice for homeowners committed to a greener future.</p><h2>Cost Considerations and Financial Incentives</h2><p>While solar panel systems require a significant upfront investment, the costs have witnessed a remarkable decline over the past decade. Federal and state tax credits play a pivotal role in offsetting installation costs, often reducing them by 25-30%. Additionally, financing options such as PACE loans or solar leases offer flexibility, with monthly payments typically lower than the energy savings. The US Department of Energy reports that solar systems can yield impressive returns of 10-20% over their 25-30-year lifespan.</p><h2>Tradeoffs and Long-Term Savings</h2><p>Exploring the tradeoffs between upfront costs and long-term savings is essential for individuals considering solar panel adoption. Although the initial investment may seem substantial, the decreasing cost of panels combined with available financial incentives makes solar power an economically viable option. Homeowners can experience immediate positive cash flow when financing through mechanisms like PACE loans or solar leases.</p><h2>Challenges in Installation and Maintenance</h2><p>While solar panels offer numerous benefits, it is important to address challenges associated with their installation and maintenance. Factors such as roof condition, shading, and local regulations can impact the feasibility of solar panel installation. Regular maintenance is necessary to ensure optimal performance and longevity, requiring periodic inspections and potential replacements.</p><h2>Conclusion</h2><p>In conclusion, solar panels present a sustainable and financially attractive investment for homeowners. The clean and renewable energy generated, coupled with the potential for substantial long-term savings, makes solar power an increasingly popular choice. By considering environmental impact, energy efficiency, and available financial incentives, individuals can make informed decisions that benefit both their homes and the planet. Embracing solar panels is not just an investment in electricity; it's an investment in a cleaner, greener future for all.</p>",
      image:
        "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/fl36293687126-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=cd947b996a2f2d8d8bdb050330dd4b90",
      slug: "solar-panels",
      ecoPoints: 200,
    },
    {
      href: "wind-power",
      writer: "Gary Green",
      date: "03/03/2024",
      name: "Wind Power",
      description:
        "Wind power is a clean and renewable energy source that utilizes the natural force of the wind to generate electricity. By harnessing this abundant resource, homes can significantly reduce their reliance on non-renewable fossil fuels, contributing to a cleaner and greener environment.",

      content:
        "<h1>Harnessing the Wind: A Comprehensive Guide to Wind Power for Sustainable Living</h1><p>Wind power stands as a prominent and viable alternative for homeowners seeking sustainable living solutions. Harnessing the energy of the wind through wind turbines has gained traction due to its potential to provide clean and green energy. This article aims to provide homeowners with a thorough analysis of wind power, covering its basic principles, cost considerations, tax rebates, environmental benefits, and challenges associated with integration into existing energy grids.</p><h2>Basic Principles of Wind Power</h2><p>At its core, wind power involves converting the kinetic energy of the wind into electricity. Wind turbines, equipped with blades that rotate when exposed to the wind, drive a generator to produce electrical power. The efficiency of this process is influenced by factors such as wind speed, turbine design, and site location.</p><h2>Cost Considerations</h2><p>Investing in wind power for residential use requires an initial financial commitment. The cost of purchasing and installing a wind turbine can vary based on factors like turbine size, tower height, and installation complexity. Homeowners should conduct a careful cost-benefit analysis, factoring in maintenance expenses, potential savings on electricity bills, and available financial incentives.</p><h2>Tax Rebate Information</h2><p>Governments often incentivize the adoption of renewable energy sources through tax rebates. Homeowners can benefit from federal and state tax credits that offset the initial costs of installing wind turbines. It is crucial to stay informed about existing rebate programs, as they can significantly contribute to making wind power more financially feasible for homeowners.</p><h2>Tradeoffs and Environmental Benefits</h2><p>Balancing the initial investment in wind turbines against long-term environmental benefits requires careful consideration. While the upfront costs can be substantial, the long-term advantages include reduced reliance on non-renewable energy sources, lower carbon footprints, and potential energy bill savings. Homeowners should weigh these tradeoffs to make informed decisions aligned with their sustainability goals.</p><h2>Challenges in Integration</h2><p>Integrating wind power into existing energy grids poses challenges. The intermittency of wind and fluctuations in wind speed can affect the stability of the electrical grid. Advanced grid management technologies and energy storage solutions are being developed to address these challenges and ensure a reliable power supply from wind sources.</p><h2>Environmental Impact Considerations</h2><p>Choosing wind power involves considering its environmental impact. While wind energy is clean and renewable, the manufacturing and disposal of turbines can have ecological consequences. Proper disposal and recycling practices are essential to minimize the environmental footprint of wind power systems.</p><h2>Conclusion</h2><p>Wind power stands as a promising avenue for homeowners committed to sustainable living. By understanding the basic principles, assessing costs, leveraging tax rebates, and considering tradeoffs, homeowners can make informed decisions about integrating wind power into their homes. Embracing wind energy not only contributes to a greener future but also aligns with the global effort to mitigate climate change and promote environmental sustainability.</p>",
      image:
        "https://i2.pickpik.com/photos/735/816/924/pinwheel-energy-wind-power-environmental-technology-preview.jpg",
      slug: "wind-power",
      ecoPoints: 120,
    },
    {
      href: "green-roofs",
      writer: "Gary Green",
      date: "02/21/2024",
      name: "Green Roofs",
      description:
        "Green roofs provide eco-friendly insulation and stormwater management by covering buildingtops with hardy,  low-maintenance vegetation. A layered system of waterproofing membranes, drainage mats, lightweight soil mixtures, and native plants is installed",
      content:
        "<h1>Green Roofs - A Sustainable Investment in Urban Living</h1><p>Green roofs, also known as living roofs, have emerged as a sustainable and innovative solution to urban environmental challenges. By covering building tops with resilient vegetation, these roofs offer a host of benefits ranging from eco-friendly insulation to stormwater management. This article delves into the key factors influencing green roofs, including their basic information, cost considerations, tax rebate opportunities, and clean energy practices.</p><h2>Basic Information</h2><p>Green roofs are built on a layered system, incorporating waterproofing membranes, drainage mats, lightweight soil mixtures, and native plants. This combination creates a robust structure that not only enhances the aesthetic appeal of buildings but also contributes significantly to environmental sustainability.</p><h2>Cost Considerations</h2><p>While the initial installation costs of green roofs may range from $15 to $25 per square foot, the long-term benefits far outweigh the upfront expenses. Studies indicate that these roofs can reduce heating and cooling demands by up to 25%, resulting in annual energy savings of $5 to $10 per square foot. The short payback periods make green roofs a smart and financially sound investment in the quest for sustainability.</p><h2>Tax Rebate Opportunities</h2><p>Incentives provided by various cities further sweeten the deal for adopting green roofs. Many municipalities offer grants or incentives to encourage the installation of green roofs, especially for their stormwater management benefits. These financial perks not only make green roofs economically viable but also contribute to the broader goal of creating resilient urban environments.</p><h2>Clean Energy Practices</h2><p>Beyond cost considerations, green roofs play a crucial role in promoting clean energy practices. By moderating interior temperatures, they contribute to improved building energy efficiency. This, in turn, reduces reliance on traditional heating and cooling systems, leading to a decreased carbon footprint.</p><h2>Tradeoffs and Challenges</h2><p>Balancing the upfront costs of installing green roofs with their long-term benefits involves careful consideration. Different green roof approaches, such as extensive and intensive systems, present unique challenges. Extensive systems, with their lightweight soil mixtures and low-maintenance vegetation, may have lower upfront costs but might offer fewer environmental benefits compared to intensive systems. The decision to implement green roofs should also factor in local climate conditions, ensuring that the chosen approach aligns with the region's unique challenges and advantages.</p><h2>Environmental Impact</h2><p>The positive impact of green roofs extends beyond financial considerations. These roofs act as nature-centric solutions, mitigating the urban heat island effect, improving air quality, and increasing biodiversity. By absorbing and filtering rainfall, green roofs prevent runoff pollution, contributing to a more sustainable and resilient urban environment.</p><h2>Conclusion</h2><p>In conclusion, green roofs represent a forward-thinking investment in sustainable living. The blend of eco-friendly insulation, stormwater management, and clean energy practices makes them a compelling choice for environmentally conscious individuals and communities. By considering the tradeoffs, understanding cost implications, and leveraging available incentives, individuals can contribute to a greener and healthier urban landscape. Green roofs, with their tangible benefits and positive environmental impact, stand as a testament to the potential for sustainable solutions in our built environment.</p>",
      image: "https://live.staticflickr.com/65535/51255410824_d99f55f8a3_b.jpg",
      slug: "green-roofs",
      ecoPoints: 180,
    },
    {
      href: "high-efficiency-windows",
      writer: "Barry Brown",
      date: "02/29/2024",
      name: "High-Efficiency Windows",
      description:
        "Replacing aging, inefficient windows with new double or triple-pane ENERGY STAR models can dramatically reduce energy loss and lower heating and cooling bills. Advanced glazing provides better insulation, preventing hot or cold outdoor air from entering the home",

      content:
        "<h1>Enhancing Sustainable Living: The Comprehensive Guide to High-Efficiency Windows</h1><p>In the pursuit of sustainable living, the role of high-efficiency windows cannot be overstated. Upgrading from aging, inefficient windows to modern, double or triple-pane ENERGY STAR models offers a transformative impact on energy consumption, resulting in lower heating and cooling bills. This article explores the key factors that contribute to energy efficiency in homes, delving into window insulation, frame materials, advanced glazing technologies, and the associated tradeoffs.</p><h2>Window Insulation and Advanced Glazing Technologies</h2><p>Replacing windows goes beyond aesthetics, with advanced glazing technologies playing a crucial role in energy conservation. These technologies provide superior insulation, preventing the intrusion of hot or cold outdoor air into the home. Low-emissivity coatings, for example, reflect heat back into the living space and limit UV damage, contributing to both energy savings and enhanced durability.</p><h2>Frame Materials and Proper Installation</h2><p>The choice of frame materials is paramount in achieving energy efficiency. UPVC frames, known for their durability and insulating properties, are a popular choice. However, the effectiveness of these materials hinges on proper installation, ensuring moisture sealing and the preservation of indoor air quality. The synergy between frame materials and installation is fundamental to maximizing the benefits of high-efficiency windows.</p><h2>Smart Window Positioning for Passive Solar Heating</h2><p>Strategic window positioning is a key strategy for harnessing passive solar heating and maximizing natural light during colder months. This intelligent design approach not only enhances energy efficiency but also contributes to the overall comfort of the living space.</p><h2>Cost Considerations and Long-Term Savings</h2><p>While the upfront cost of high-efficiency windows may seem significant, the long-term savings in energy bills make them a wise investment. On average, installing these windows yields energy savings ranging from 7-15% annually. The payback period for replacing all single-pane windows with ENERGY STAR models can be as short as 4 years, making it a financially viable choice.</p><h2>Environmental Benefits and Incentives</h2><p>Beyond cost savings, the environmental benefits of high-efficiency windows are substantial. Reduced energy consumption translates to a lower carbon footprint. Homeowners are also incentivized to make eco-friendly choices through federal tax credits covering 10% of the materials cost and utility rebates ranging from $2-$8 per square foot. These incentives make sustainable living accessible and financially rewarding.</p><h2>Integration of Clean and Green Energy Practices</h2><p>High-efficiency windows play a pivotal role in integrating clean and green energy practices. Maximizing natural light through well-designed windows reduces the need for artificial lighting, promoting a more energy-efficient and eco-friendly lifestyle.</p><h2>Conclusion</h2><p>In conclusion, the selection of high-efficiency windows is a conscious decision that goes beyond aesthetics. It is a step towards sustainable living, with significant energy savings, environmental benefits, and financial incentives. By understanding the key factors influencing energy efficiency, homeowners can make informed choices that contribute to a greener and more eco-friendly future.</p>",

      image: "https://live.staticflickr.com/3131/2825699407_517715f8be_b.jpg",
      slug: "high-efficiency-windows",
      ecoPoints: 220,
    },
    {
      href: "smart-home-technology",
      writer: "Fikky Fly",
      date: "02/27/2024",
      name: "Smart Home Technology",
      description:
        "Smart Home Technology optimizes energy consumption by dynamically controlling lighting, HVAC, appliances, and other systems. Networked sensors monitor occupancy, temperature, humidity, and lighting needs in different zones",
      content:
        "<h1>Smart Home Technology: A Sustainable Living Revolution</h1><p>In recent years, the adoption of smart home technology has surged, offering users not only convenience but also the promise of sustainable living. This article delves into the key factors influencing the adoption of smart home solutions, including their functionalities, cost implications, potential tax rebates, and the positive environmental impact associated with clean and green energy practices.</p><h2>Basic Functionalities</h2><p>Smart home technology operates on the principle of building automation, optimizing energy consumption by dynamically controlling various systems such as lighting, HVAC (Heating, Ventilation, and Air Conditioning), and appliances. Networked sensors monitor occupancy, temperature, humidity, and lighting needs in different zones of the home. These sensors communicate with a central controller, which, based on conditions and pre-programmed settings, turns equipment on/off, adjusts temperature set points, and controls lighting brightness.</p><h2>Energy Efficiency</h2><p>One of the key advantages of smart home technology is its ability to significantly reduce energy consumption. Building automation techniques, such as dimming, zone control, and scheduling around operating hours, contribute to a 15-30% reduction in lighting, cooling, and heating energy use. This translates to not only lower utility bills but also a decreased carbon footprint, aligning with global efforts to combat climate change.</p><h2>Cost Implications and Tax Rebates</h2><p>The upfront costs of implementing smart home devices depend on the scope of the system but generally average around $2-$5 per square foot. However, the investment pays off in the long run, with incentives like accelerated depreciation helping users recoup costs in just a few years. Beyond energy savings, smart home technology can lead to improved occupant comfort and productivity through customized conditions.</p><h2>Clean and Green Energy Practices</h2><p>Smart homes contribute to clean and green energy practices by optimizing energy usage and incorporating renewable energy sources. By integrating solar panels, wind turbines, and other clean energy solutions, users can further reduce their dependence on traditional energy grids. This not only promotes sustainability but also positions smart homes as contributors to a cleaner and greener future.</p><h2>Tradeoffs and Challenges</h2><p>While the benefits of smart home technology are substantial, users may encounter challenges such as interoperability and privacy concerns. Ensuring that devices from different manufacturers can seamlessly communicate and addressing privacy issues are crucial considerations. Striking a balance between the upfront costs and long-term energy savings is also a tradeoff that users must carefully navigate.</p><h2>Conclusion</h2><p>Smart home technology presents an exciting opportunity for sustainable living, combining innovative functionalities with environmental consciousness. As users consider integrating these solutions into their homes, weighing the upfront costs against long-term benefits, and addressing interoperability and privacy concerns will be essential. By embracing smart home technology, individuals contribute not only to their own comfort and efficiency but also to a more sustainable and energy-efficient future for all.</p>",
      image: "https://live.staticflickr.com/3691/19636174774_6c2a8a167c_b.jpg",
      slug: "smart-home-technology",
      ecoPoints: 150,
    },
  ];

  return (
    <div className="flex h-full w-full flex-col ">
      <h1 className="mt-4 px-4 text-left text-4xl font-bold">Eco Challenges</h1>
      <div className="flex flex-wrap justify-center  ">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="w-full cursor-pointer p-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4"
          >
            <CustomCard challenge={challenge} />
          </div>
        ))}
      </div>

      <div className="ml-[-32px] mt-4 w-screen">
        <TopWave2 />

        <div className="my-[-3px] flex flex-wrap justify-center bg-[#5FA25E] py-12 pr-3">
          {friends.map((user) => (
            <div
              key={user.id}
              className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            >
              <AddFriendCard userId={user.userId} />
            </div>
          ))}
        </div>
        <BottomWave2 />
      </div>

      <h1 className="my-8 px-4 text-left text-4xl font-bold">
        Discover Solutions
      </h1>
      <div className="flex flex-wrap justify-center ">
        {blogs.map((blog) => (
          <div
            key={blog.href}
            className="w-full cursor-pointer p-4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 "
          >
            <SolutionCard challenge={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoChallengesContainer;
