import ProjectListing from "@/components/ProjectListing/projectListing";
import ProjectListingBanner from "@/components/ProjectListing/projectListingBanner";
import React from "react";

const Projects = () => {
  return (
    <div>
      <ProjectListingBanner />
      <ProjectListing />
    </div>
  );
};

export default Projects;
