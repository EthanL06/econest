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
    <div className="flex h-full w-full flex-col items-center gap-y-12">
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
// import React, { useState } from "react";
// import { db } from "../../../config/firebase";
// import app from "../../../config/firebase";
// import { doc, setDoc } from "firebase/firestore";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signInWithRedirect,
// } from "firebase/auth";
// import User from "@/types/user";
// import EcoChat from "@/types/ecoChat";

// const SignUpForm = () => {
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     const provider = new GoogleAuthProvider();
//     provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

//     const auth = getAuth();
//     auth.languageCode = "it";

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential ? credential.accessToken : null;
//         const user = result.user;

//         const defaultUser: User = {
//           userID: user.uid,
//           username: user.email ?? "default@email.com",
//           password: "testpassword",
//           name: user.displayName ?? "Default Name",
//           email: user.email ?? "default@email.com",
//           profilePicture: user.photoURL ?? "default/path/to/profilePicture.jpg",
//           ecoPoints: 0,
//           ecoFriends: [],
//           ecoCommunity: [],
//           ecoChats: [],
//           homeAddress: "123 Test Street, Test City, Test Country",
//           electricalBill: 100,
//           blogPosts: [],
//           blogsRead: [],
//           carbonFootprintInfo: {
//             total: 0,
//             transportation: 0,
//             food: 0,
//             housing: 0,
//             goodsAndServices: 0,
//             waste: 0,
//           },
//         };

//         try {
//           setDoc(doc(db, "users", defaultUser.userID), defaultUser).then(() => {
//             localStorage.setItem("userID", user.uid);
//             console.log("User added successfully");
//           });
//         } catch (error) {
//           console.error("Error adding user:", error);
//         }
//       })
//       .catch((error) => {
//         // // Handle Errors here.
//         // const errorCode = error.code;
//         // const errorMessage = error.message;
//         // // The email of the user's account used.
//         // const email = error.customData.email;
//         // // The AuthCredential type that was used.
//         // const credential = GoogleAuthProvider.credentialFromError(error);
//         // // ...
//         console.log(error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Sign Up with Google</button>
//       {error && <div>{error}</div>}
//     </form>
//   );
// };

// export default SignUpForm;
