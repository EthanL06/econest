import React from "react";
import ThreeJsEnvironment from "./threejs-environment";
import { CustomizationDetails } from "@/app/(home-customization)/home-customization/page";

type Props = {
  showSolarPanel: CustomizationDetails;
  showWindow: CustomizationDetails;
  showWindMill: CustomizationDetails;
};

const HomeContainer: React.FC<Props> = ({
  showSolarPanel,
  showWindow,
  showWindMill,
}) => {
  return (
    <div className="pointer-events-none col-span-4 overflow-hidden rounded-lg border-2 border-border">
      <ThreeJsEnvironment
        showSolarPanel={showSolarPanel}
        showWindMill={showWindMill}
        showWindow={showWindow}
      />
    </div>
  );
};

export default HomeContainer;
