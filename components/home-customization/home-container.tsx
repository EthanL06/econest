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
    <div className="pointer-events-none aspect-video grow overflow-hidden rounded-2xl border border-border lg:sticky lg:top-12 lg:h-[calc(100vh-80px)]">
      <ThreeJsEnvironment
        showSolarPanel={showSolarPanel}
        showWindMill={showWindMill}
        showWindow={showWindow}
      />
    </div>
  );
};

export default HomeContainer;
