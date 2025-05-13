import ProjectListing from "@/components/ProjectListing/projectListing";
import ProjectListingBanner from "@/components/ProjectListing/projectListingBanner";
import { fetchProjectListingPageData } from "@/redux/slices/projectListPageSlice";
import { fetchProjectList } from "@/redux/slices/projectListSlice";
import { store } from "@/redux/store";
import React from "react";

const Projects = ({ projects, banner }) => {
  console.log(banner, "project listing");
  return (
    <div>
      {banner && <ProjectListingBanner banner={banner} />}
      {projects && <ProjectListing projects={projects} />}
    </div>
  );
};

export default Projects;

export async function getServerSideProps() {
  await store.dispatch(fetchProjectList());
  const projects = store.getState()?.projectList?.data?.data;

  await store.dispatch(fetchProjectListingPageData());
  const banner = store.getState()?.projectListPage?.data?.attributes?.banner;

  return {
    props: {
      projects: projects,
      banner: banner,
    },
  };
}
