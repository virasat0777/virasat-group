import BlackButton from "@/common/BlackButton";
import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div className="lg:px-[10.208vw] px-4 lg:py-[4.167vw] py-4 relative">
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex lg:gap-[2.188vw] lg:flex-row flex-col">
        <div className="lg:mt-[10.625vw]">
          <div className="lg:w-[18.958vw] w-full lg:h-[21.25vw] h-auto  flex justify-center">
            <Image
              width={364}
              height={408}
              src={`/images/about/abOverview2.png`}
              alt="about overview image one"
            />
          </div>
        </div>
        <div>
          <div className="text-center lg:mt-[3.75vw] mt-4">
            <div className="lg:mb-[2.083vw] mb-4">
              <SectionTitle title={"ABOUT VIRASAT"} />
            </div>
            <p className="lg:mb-[2.083vw] mb-4 lg:text-[1.042vw] text-12px ">
              Virasat Group commenced operation in 2010, and has emerged as an
              organization that is synonymous to trust, quality, Innovation, and
              Customer Satisfaction. We have maintained our prerequisite of
              delivering quality and affordable housing solution to people, and
              are constantly striving for perfection. With the city emerging as
              a promising real estate hub, Virasat Group is consistently
              providing elegant and affordable housing structures, with no
              compromise on the promise of modern and spacious living,
              Guaranteeing satisfaction and meeting expectations with Virasat
              Group.
            </p>
            <BlackButton name="Download Brochure" />
          </div>
        </div>
        <div className="">
          <div className="lg:w-[18.958vw] w-full lg:h-[21.25vw] h-auto flex justify-center">
            <Image
              width={364}
              height={408}
              src={`/images/about/abOverview1.png`}
              alt="about overview image one"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
