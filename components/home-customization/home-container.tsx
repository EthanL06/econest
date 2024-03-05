import React from "react";
import ThreeJsEnvironment from "./threejs-environment";
import { CustomizationDetails } from "@/app/(home-customization)/build-a-home/page";

import SavingStats from "@/components/home-customization/statistics/savingsStat";

type Props = {
  showSolarPanel: CustomizationDetails;
  showWindow: CustomizationDetails;
  showWindMill: CustomizationDetails;
  page: number;
};

const HomeContainer: React.FC<Props> = ({
  showSolarPanel,
  showWindow,
  showWindMill,
  page
}) => {
  return (
    <div className="pointer-events-none aspect-video grow overflow-hidden rounded-2xl border border-border lg:sticky lg:top-12 lg:h-[calc(100vh-80px)] w-full">
      <SavingStats/>
      {/* <ThreeJsEnvironment
        showSolarPanel={showSolarPanel}
        showWindMill={showWindMill}
        showWindow={showWindow}
        page={page}
      /> */}
    </div>
  );
};

export default HomeContainer;
