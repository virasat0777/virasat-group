import BlackButton from "@/common/BlackButton";
import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";
import { slideIn } from "@/Animation/Variants";
import { motion } from "framer-motion";
import { cleanImage } from "@/services/imageHandling";
const ProjectOverview = ({ data }) => {
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
              {data?.image?.data?.attributes?.url && (
                <div className="lg:h-[35.104vw] h-full lg:w-[28.542vw] w-full">
                  <Image
                    src={
                      cleanImage(data?.image?.data?.attributes?.url)
                        ? cleanImage(data?.image?.data?.attributes?.url)
                        : "/images/project-details/projectOverview.png"
                    }
                    width={548}
                    height={674}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </motion.div>
          </div>
          <div className=" lg:w-1/2 flex flex-col lg:gap-[2.083vw] gap-4 lg:mb-0 ">
            {data?.title && (
              <div className="mt-4">
                <SectionTitle title={data?.title} />
              </div>
            )}
            <div>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={slideIn("left", 0.3)}
              >
                {data?.overviewContent && (
                  <div
                    className="lg:text-[1.042vw] text-base lg:leading-[1.667vw] leading-5"
                    dangerouslySetInnerHTML={{ __html: data?.overviewContent }}
                  ></div>
                )}
                {data?.brochure?.data?.attributes?.url && (
                  <BlackButton
                    name="Download Brochure"
                    path={cleanImage(data?.brochure?.data?.attributes?.url)}
                    color="#000000"
                    hoverColor="#C29B5C"
                    textColor="#ffffff"
                    hoverTextColor="#000000"
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
