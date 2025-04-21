import ProjectListing from "@/components/ProjectListing/projectListing";
import ProjectListingBanner from "@/components/ProjectListing/projectListingBanner";
import { fetchProjectList } from "@/redux/slices/projectListSlice";
import { store } from "@/redux/store";
import React from "react";

const Projects = ({ projects }) => {
  console.log(projects, "project listing");
  return (
    <div>
      <ProjectListingBanner />
      <ProjectListing projects={projects} />
    </div>
  );
};

export default Projects;

export async function getServerSideProps() {
  await store.dispatch(fetchProjectList());
  const projects = store.getState()?.projectList?.data?.data;
  return {
    props: {
      projects: projects,
    },
  };
}
