import Banner from "@/common/Banner";
import CareerListing from "@/components/Careers/careerListing";
import React from "react";

const Careers = () => {
  return (
    <div>
      <Banner
        src="/images/careers/career-banner.png"
        mobileSrc="/images/careers/career-banner.png"
        title="Careers"
      />
      <CareerListing />
    </div>
  );
};

export default Careers;
