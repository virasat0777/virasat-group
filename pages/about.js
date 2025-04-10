import Banner from "@/common/Banner";
import Bank from "@/components/About/bank";
import LoanPartners from "@/components/About/loanPartners";
import Management from "@/components/About/management";
import Overview from "@/components/About/overview";
import VisionMission from "@/components/About/visionMission";

import React from "react";

const About = () => {
  return (
    <div>
      <Banner src="/images/about/aboutDesktopBanner.png" />
      <Overview />
      <Management />
      <VisionMission />
      <LoanPartners />
      <Bank />
    </div>
  );
};

export default About;
