import React from "react";
import ThreeJsEnvironment from "./threejs-environment";

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


const HomeContainer: React.FC<Props> = ({ showSolarPanel, showWindow, showWindMill }) => {
  return (
    <div className="card col-span-4 pointer-events-none">
      <ThreeJsEnvironment showSolarPanel={showSolarPanel} showWindMill={showWindMill} showWindow={showWindow} />
    </div>
  );
};

export default HomeContainer;