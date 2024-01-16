import React from "react";
import HomeModel from "./threejs/HomeModel";
import SolarPanelModel from "./threejs/SolarPanelModel";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

type Props = {
  showSolarPanel: boolean;
};

const ThreeJsEnvironment: React.FC<Props> = ({ showSolarPanel }) => {
    console.log("showSolarPanel:", showSolarPanel);


  return (
    <main className="pointer-events-none flex justify-center items-center h-screen">
      <Canvas className='h-2xl w-2xl'>
        <PerspectiveCamera makeDefault position={[-6, 5, 4]} />
        <OrbitControls target={[0, 0, 0]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <HomeModel />
        {showSolarPanel && <SolarPanelModel />}
      </Canvas>
    </main>
  );
};

export default ThreeJsEnvironment;