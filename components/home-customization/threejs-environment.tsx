import React from "react";
import HomeModel from "./threejs/HomeModel";
import SolarPanelModel from "./threejs/SolarPanelModel";
import WindMillModel from "./threejs/WindMillModel";
import WindowModel from "./threejs/WindowModel";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

type CustomizationDetails = {
  title: string;
  imgUrl: string;
  price: string;
  bulletPoints: [string, string];
};

type Props = {
  showSolarPanel: CustomizationDetails;
  showWindow: CustomizationDetails;
  showWindMill: CustomizationDetails;
};
   
const ThreeJsEnvironment: React.FC<Props> = ({ showSolarPanel, showWindMill, showWindow }) => {

  
  return (
    <main className="pointer-events-none flex justify-center items-center h-screen">
      <Canvas className='h-xl w-xl'>
        <PerspectiveCamera makeDefault position={[-6, 5, 4]} />
        <OrbitControls target={[0, 0, 0]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <HomeModel />
        {showWindMill.title !== "" && <WindMillModel/> }
        {showWindow.title !== "" && <WindowModel/> }
        {showSolarPanel.title !== "" && <SolarPanelModel />}
      </Canvas>
    </main>
  );
};

export default ThreeJsEnvironment;