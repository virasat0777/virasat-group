import ConstructionUpdates from "@/components/ProjectDetail/constructionUpdates";
import LocationAdvantage from "@/components/ProjectDetail/locationAdvantage";
import ProjectAmenities from "@/components/ProjectDetail/projectAmenities";
import ProjectBanner from "@/components/ProjectDetail/projectBanner";
import ProjectConfiguration from "@/components/ProjectDetail/projectConfiguration";
import ProjectFloorPlans from "@/components/ProjectDetail/projectFloorPlans";
import ProjectGallery from "@/components/ProjectDetail/projectGallery";
import ProjectOverview from "@/components/ProjectDetail/projectOverview";
import axios from "axios";
import React, { useEffect } from "react";
import qs from "qs";
import { cleanImage } from "@/services/imageHandling";
import Seo from "@/components/Seo/Seo";

const ProjectDetail = ({ project }) => {
  useEffect(() => {
    if (window && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // Delay helps ensure images/layout are ready
      }
    }
  }, []);
  return (
    <div className="overflow-hidden">
      <Seo seo={project?.Seo} />
      {project?.banner && <ProjectBanner data={project?.banner} />}
      {project?.overview && (
        <ProjectOverview data={project?.overview} title={project?.title} />
      )}
      {project?.configuration && (
        <ProjectConfiguration
          data={project?.configuration}
          title={project?.title}
        />
      )}
      {project?.amenitySection && (
        <ProjectAmenities
          title={project?.amenitySection?.amenityTitle}
          data={project?.amenitySection?.amenities?.data}
          bg={cleanImage(
            project?.amenitySection?.amenityBg?.data?.attributes?.url
          )}
        />
      )}
      {project?.floorPlan && <ProjectFloorPlans data={project?.floorPlan} />}
      {project?.locationAdvantage && (
        <LocationAdvantage
          data={project?.locationAdvantage}
          maplink={project?.locationMap}
          title={project?.locationTitle}
        />
      )}
      {project?.gallery && <ProjectGallery data={project?.gallery} />}
      {project?.constructionUpdates && (
        <ConstructionUpdates data={project?.constructionUpdates} />
      )}
    </div>
  );
};

export default ProjectDetail;

export async function getServerSideProps(params) {
  const query = {
    filters: {
      slug: {
        $eq: params?.params?.slug,
      },
    },
    populate: [
      // "seo",
      // "seo.metaImage",
      // "seo.schema",
      // "seo.metaSocial",
      // "seo.metaSocial.image",
      "banner.desktopBanner",
      "banner.mobileBanner",
      "overview.image",
      "overview.brochure",
      "configuration.primaryImage",
      "configuration.secondaryImage",
      "configuration.areas",
      "amenitySection.amenities.image",
      "amenitySection.amenityBg",
      "floorPlan",
      "floorPlan.images",
      "locationAdvantage.details",
      "gallery.images",
      "constructionUpdates.constructionItems.image",
    ],
  };
  const queryString = qs.stringify(query, {
    encodeValuesOnly: true,
  });
  const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/projects?${queryString}`;
  const response = await axios.get(endpoint);
  const data = response.data?.data[0]?.attributes;

  return {
    props: {
      project: data,
    },
  };
}
