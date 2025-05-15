import ProjectListing from "@/components/ProjectListing/projectListing";
import ProjectListingBanner from "@/components/ProjectListing/projectListingBanner";
import Seo from "@/components/Seo/Seo";
import { fetchProjectListingPageData } from "@/redux/slices/projectListPageSlice";
import { fetchProjectList } from "@/redux/slices/projectListSlice";
import { store } from "@/redux/store";
import React, { useEffect } from "react";

const Projects = ({ projects, banner }) => {
  useEffect(() => {
    if (window && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, []);
  return (
    <div>
      <Seo seo={banner?.Seo} />
      {banner && <ProjectListingBanner banner={banner?.banner} />}
      {projects && <ProjectListing projects={projects} />}
    </div>
  );
};

export default Projects;

export async function getServerSideProps() {
  await store.dispatch(fetchProjectList());
  const projects = store.getState()?.projectList?.data?.data;

  await store.dispatch(fetchProjectListingPageData());
  const banner = store.getState()?.projectListPage?.data?.attributes;

  return {
    props: {
      projects: projects,
      banner: banner,
    },
  };
}
