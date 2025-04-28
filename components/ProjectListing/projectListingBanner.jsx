import Banner from "@/common/Banner";
import { cleanImage } from "@/services/imageHandling";
import React from "react";

const ProjectListingBanner = ({ banner }) => {
  return (
    <div>
      <Banner
        src={cleanImage(banner?.desktopBanner?.data?.attributes?.url)}
        mobileSrc={cleanImage(banner?.mobileBanner?.data?.attributes?.url)}
        title={banner?.title}
      />
    </div>
  );
};

export default ProjectListingBanner;
