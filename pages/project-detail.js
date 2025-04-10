import Banner from "@/common/Banner";
import ConstructionUpdates from "@/components/ProjectDetail/constructionUpdates";
import LocationAdvantage from "@/components/ProjectDetail/locationAdvantage";
import ProjectAmenities from "@/components/ProjectDetail/projectAmenities";
import ProjectBanner from "@/components/ProjectDetail/projectBanner";
import ProjectConfiguration from "@/components/ProjectDetail/projectConfiguration";
import ProjectFloorPlans from "@/components/ProjectDetail/projectFloorPlans";
import ProjectGallery from "@/components/ProjectDetail/projectGallery";
import ProjectOverview from "@/components/ProjectDetail/projectOverview";

import React from "react";

const ProjectDetail = () => {
  return (
    <div>
      <ProjectBanner />
      <ProjectOverview />
      <ProjectConfiguration />
      <ProjectAmenities />
      <ProjectFloorPlans />
      <LocationAdvantage />
      <ProjectGallery />
      <ConstructionUpdates />
    </div>
  );
};

export default ProjectDetail;
