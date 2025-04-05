import BlackButton from "@/common/BlackButton";
import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";

const HomeOverview = () => {
  return (
    <div className={`relative bg-cover bg-no-repeat  bg-center w-full `}>
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`lg:px-[10.417vw] px-[12px] lg:py-[4.375vw] py-4`}>
        <div className="text-center">
          <SectionTitle title={"Discover the Magic of the Virasat"} />
        </div>
        <div className="w-full flex flex-row justify-between lg:mt-[3.125vw] mt-4">
          <div className="lg:block hidden">
            <Image
              src={`/images/home/overviewOne.png`}
              width={370}
              height={370}
              className="lg:mt-[3.383vw] mt-1 lg:w-[19.271vw] lg:h-[19.271vw] "
            />
          </div>
          <div>
            <Image
              src={`/images/home/overviewThree.png`}
              width={487}
              height={600}
              className="lg:w-[25.365vw] lg:h-[31.25vw] w-full h-auto"
            />
          </div>
          <div className="lg:block hidden ">
            <Image
              src={`/images/home/overviewOne.png`}
              width={370}
              height={370}
              className="lg:mt-[10.942vw] mt-1 lg:w-[19.271vw] lg:h-[19.271vw]"
            />
          </div>
        </div>
        <div className="lg:mt-[2.083vw] mt-4 text-center">
          <p className="lg:text-[0.938vw] text-base text-center lg:mb-[2.917vw] mb-4 font-light">
            Virasat Group commenced operation in 2010, and has emerged as an
            organization that is synonymous to trust, quality, Innovation, and
            Customer Satisfaction. We have maintained our prerequisite of
            delivering quality and affordable housing solution to people, and
            are constantly striving for perfection. With the city emerging as a
            promising real estate hub, Virasat Group is consistently providing
            elegant and affordable housing structures, with no compromise on the
            promise of modern and spacious living, Guaranteeing satisfaction and
            meeting expectations with Virasat Group.
          </p>

          <BlackButton
            name="Download Brochure"
            path="/learn"
            color="#000000"
            hoverColor="#C29B5C"
            textColor="#ffffff"
            hoverTextColor="#000000"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeOverview;
