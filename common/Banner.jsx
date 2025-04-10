import Image from "next/image";
import React from "react";

const Banner = ({
  src = "/images/project-details/project-details-banner.png",
  mobileSrc = "/images/project-details/project-details-banner.png",
  title = "Project Detail Page",
}) => {
  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      {/* Desktop Image */}
      <div className="hidden md:block w-full h-full">
        <Image src={src} alt="banner" fill className="object-cover" priority />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden w-full h-full">
        <Image
          src={mobileSrc || src}
          alt="banner-mobile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title Overlay */}
      {title && (
        <div className="absolute lg:bottom-[4vw] lg:left-[4vw] bottom-[2.5vw] w-fit left-[2.5vw]">
          <h1 className="text-white text-3xl lg:text-[1.042vw] font-bold drop-shadow-md">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
