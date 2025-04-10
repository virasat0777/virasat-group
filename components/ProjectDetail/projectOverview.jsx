import BlackButton from "@/common/BlackButton";
import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";
import { slideIn } from "@/Animation/Variants";
import { motion } from "framer-motion";
const ProjectOverview = () => {
  return (
    <div
      className={`relative bg-cover bg-no-repeat  bg-center w-full  lg:py-[4.167vw] lg:px-[10.417vw] py-4 px-4 z-10 `}
    >
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <div className="flex justify-between lg:flex-row flex-col items-center">
          <div className="overflow-x-hidden">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={slideIn("right", 0.3)}
            >
              <div className="lg:h-[35.104vw] h-full lg:w-[28.542vw] w-full">
                <Image
                  src={"/images/project-details/projectOverview.png"}
                  width={548}
                  height={674}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className=" lg:w-1/2 flex flex-col lg:gap-[2.083vw] gap-4 lg:mb-0 ">
            <div className="mt-4">
              <SectionTitle title="OVERVIEW" />
            </div>
            <div>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={slideIn("left", 0.3)}
              >
                <p className="lg:text-[1.042vw] text-base lg:leading-[1.667vw] leading-5">
                  Lorem ipsum dolor sit amet consectetur. Et bibendum diam
                  volutpat nibh sagittis orci dolor. Ipsum amet et elementum
                  ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu
                  egestas. Lorem ipsum dolor sit amet consectetur. Et bibendum
                  diam volutpat nibh sagittis orci dolor. Ipsum amet et
                  elementum ipsum. Condimentum faucibus lacinia tempus vulputate
                  sit arcu egestas.
                </p>
                <BlackButton
                  name="Download Brochure"
                  path="/learn"
                  color="#000000"
                  hoverColor="#C29B5C"
                  textColor="#ffffff"
                  hoverTextColor="#000000"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
