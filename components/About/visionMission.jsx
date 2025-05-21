import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";
import { slideIn } from "@/Animation/Variants";
import { motion } from "framer-motion";
import { cleanImage } from "@/services/imageHandling";
const VisionMission = ({ data }) => {
  const visionMissionArray = [
    {
      title: "Vision",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
      image: "/images/about/visionVirasat.png",
    },
    {
      title: "Mission",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
      image: "/images/about/missionVirasat.png",
    },
  ];
  return (
    <div className="lg:px-[12.135vw] px-4 lg:py-[5.979vw] py-6">
      <div className="flex flex-col justify-center items-center relative after:absolute after:h-full after:w-[2px] after:bg-gradient-to-b from-white from-1% via-black  via-98%  to-white to-99%   max-lg:after:content-none">
        <div
          className={`lg:flex items-center justify-center lg:gap-[8.542vw] overflow-x-hidden relative after:absolute after:z-[1] after:size-5 after:bg-black after:rounded-full after:border-4  max-lg:after:content-none after:border-white `}
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn("right", 0.3)}
          >
            <div className=" ">
              {data?.visionImage?.data?.attributes?.url && (
                <div className={`lg:w-[33.229vw] w-full lg:h-[20.99vw] h-auto`}>
                  <Image
                    width={638}
                    height={407}
                    className="h-full w-full"
                    src={cleanImage(data?.visionImage?.data?.attributes?.url)}
                    alt="about vision image one"
                  />
                </div>
              )}
            </div>
          </motion.div>
          <div className="">
            <div className="w-full lg:p-[2.917vw] p-4">
              {data?.visionTitle && (
                <div className="lg:mb-[1.25vw] mb-4">
                  <SectionTitle title={data?.visionTitle} />
                </div>
              )}
              {data?.visionDescription && <p>{data?.visionDescription}</p>}
            </div>
          </div>
        </div>
        <div
          className={`lg:flex items-center justify-center lg:gap-[8.542vw] overflow-x-hidden relative after:absolute after:z-[1] after:size-5 after:bg-black after:rounded-full after:border-4  max-lg:after:content-none after:border-white flex-row-reverse`}
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn("right", 0.3)}
          >
            <div className=" ">
              {data?.missionImage?.data?.attributes?.url && (
                <div className={`lg:w-[33.229vw] w-full lg:h-[20.99vw] h-auto`}>
                  <Image
                    width={638}
                    height={407}
                    className="h-full w-full"
                    src={cleanImage(data?.missionImage?.data?.attributes?.url)}
                    alt="about mission image one"
                  />
                </div>
              )}
            </div>
          </motion.div>
          <div className="">
            <div className="w-full lg:p-[2.917vw] p-4">
              {data?.missionTitle && (
                <div className="lg:mb-[1.25vw] mb-4">
                  <SectionTitle title={data?.missionTitle} />
                </div>
              )}
              {data?.missionDescription && <p>{data?.missionDescription}</p>}
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default VisionMission;
