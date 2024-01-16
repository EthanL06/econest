import React from "react";
import ThreeJsEnvironment from "./threejs-environment";

type Props = {
  showSolarPanel: boolean;
};

const HomeContainer: React.FC<Props> = ({ showSolarPanel }) => {
  return (
    <div className="card col-span-5 pointer-events-none">
      <ThreeJsEnvironment showSolarPanel={showSolarPanel} />
    </div>
  );
};

export default HomeContainer;