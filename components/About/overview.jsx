import BlackButton from "@/common/BlackButton";
import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";
import { slideIn } from "@/Animation/Variants";
import { motion } from "framer-motion";
import { cleanImage } from "@/services/imageHandling";
const Overview = ({ data }) => {
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

      <div className="flex lg:gap-[2.188vw] lg:flex-row flex-col overflow-x-hidden">
        <div className="lg:mt-[10.625vw] ">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn("right", 0.3)}
          >
            {data?.leftImage && (
              <div className="lg:w-[18.958vw] w-full lg:h-[21.25vw] h-auto  flex justify-center">
                <Image
                  width={364}
                  height={408}
                  src={cleanImage(data?.leftImage?.data?.attributes?.url)}
                  alt="about overview image one"
                />
              </div>
            )}
          </motion.div>
        </div>
        <div>
          <div className="text-center lg:mt-[3.75vw] mt-4">
            {data?.title && (
              <div className="lg:mb-[2.083vw] mb-4">
                <SectionTitle title={data?.title} />
              </div>
            )}
            <p
              className="lg:mb-[2.083vw] mb-4 lg:text-[1.042vw] text-12px"
              dangerouslySetInnerHTML={{ __html: data?.overview }}
            ></p>
            {/* <BlackButton name="Download Brochure" /> */}
          </div>
        </div>
        <div className="">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={slideIn("left", 0.3)}
          >
            {data?.rightImage && (
              <div className="lg:w-[18.958vw] w-full lg:h-[21.25vw] h-auto flex justify-center">
                <Image
                  width={364}
                  height={408}
                  src={cleanImage(data?.rightImage?.data?.attributes?.url)}
                  alt="about overview image one"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
