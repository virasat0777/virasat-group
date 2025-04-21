import Banner from "@/common/Banner";
import { cleanImage } from "@/services/imageHandling";
import React from "react";

const ProjectBanner = ({ data }) => {
  return (
    <div>
      <Banner
        src={cleanImage(data?.desktopBanner?.data?.attributes?.url)}
        mobileSrc={cleanImage(data?.mobileBanner?.data?.attributes?.url)}
      />
    </div>
  );
};

export default ProjectBanner;
