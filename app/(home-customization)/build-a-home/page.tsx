"use client";

import React, { useState } from "react";
import CustomizationContainer from "@/components/home-customization/customization-container";
import HomeContainer from "@/components/home-customization/home-container";

export type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
  current: string;
};

function Home() {
  const [showSolarPanel, setShowSolarPanel] = useState<CustomizationDetails>({
    title: "Powerwall Only",
    imgUrl: "/images/solar_panel_house.jpg",
    price: "6,365",
    bulletPoints: ["Energy backup for your home", ""] as [string, string],
    current: "current",
  });

  const [showWindow, setShowWindow] = useState<CustomizationDetails>({
    title: "Window Basic",
    imgUrl: "/images/solar_panel_house.jpg",
    price: "1,487",
    bulletPoints: ["Basic window fitting for energy efficiency", ""],
    current: "current",
  });
  const [showWindMill, setShowWindMill] = useState<CustomizationDetails>({
    title: "Windmill Basic",
    imgUrl: "/images/solar_panel_house.jpg",
    price: "1,200",
    bulletPoints: ["Basic wind energy solution for small homes", ""],
    current: "current",
  });

  const [page, setPage] = useState<number>(0);

  const handleShowSolarPanel = (details: CustomizationDetails) => {
    setShowSolarPanel(details);
  };

  const handleShowWindow = (details: CustomizationDetails) => {
    setShowWindow(details);
  };

  const handleShowWindMill = (details: CustomizationDetails) => {
    setShowWindMill(details);
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-54px)] w-full flex-col items-center gap-y-12">
      <div className="relative flex min-h-screen w-full flex-col gap-3 text-white lg:flex-row">
        <HomeContainer
          showSolarPanel={showSolarPanel}
          showWindMill={showWindMill}
          showWindow={showWindow}
          page={page}
        />
        <CustomizationContainer
          handleShowSolarPanel={handleShowSolarPanel}
          handleShowWindmill={handleShowWindMill}
          handleShowWindow={handleShowWindow}
          showSolarPanel={showSolarPanel}
          showWindMill={showWindMill}
          showWindow={showWindow}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default Home;

// TESTING OUT THE BACKEND HERE. USER CREATED

// "use client"

// import React, { useState } from 'react';
// import { db } from '../../../config/firebase';
// import { doc, setDoc } from "firebase/firestore";

// import User from '@/types/user';

// const SignUpForm = () => {

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     const defaultUser: User = {
//       username: 'testuser',
//       password: 'testpassword',
//       name: 'Test User',
//       email: 'testuser@example.com',
//       profilePicture: 'https://example.com/default-profile-picture.jpg',
//       ecoPoints:  0,
//       ecoFriends: [],
//       ecoCommunity: [],
//       homeAddress: '123 Test Street, Test City, Test Country',
//       electricalBill:  100,
//       blogPosts: [],
//       blogsRead: [],
//       carbonFootprintInfo: {
//         total:  0,
//         transportation:  0,
//         food:  0,
//         housing:  0,
//         goodsAndServices:  0,
//         waste:  0,
//       },
//     };

//     try {
//       await setDoc(doc(db, "users", defaultUser.username), defaultUser);
//       console.log('User added successfully');
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;
