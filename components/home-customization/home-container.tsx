import React from "react";
import ThreeJsEnvironment from "./threejs-environment";

type Props = {
  showSolarPanel: boolean;
  showWindow: boolean;
  showWindMill: boolean;
};

const HomeContainer: React.FC<Props> = ({ showSolarPanel, showWindow, showWindMill }) => {
  return (
    <div className="card col-span-4 pointer-events-none">
      <ThreeJsEnvironment showSolarPanel={showSolarPanel} showWindMill={showWindMill} showWindow={showWindow} />
    </div>
  );
};

export default HomeContainer;