import SectionTitle from "@/common/SectionTitle";
import { cleanImage } from "@/services/imageHandling";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const BlogList = ({ data }) => {
  const router = useRouter();
  return (
    <div className="lg:py-[4.167vw] py-6 lg:px-[13.333vw] px-4 relative">
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
          alt="background pattern"
        />
      </div>
      <div>
        <div className="text-center lg:mb-[3.125vw] mb-4">
          <SectionTitle title="Blogs" />
        </div>

        <div className="flex flex-wrap lg:gap-[3.167vw] gap-3 mt-6 lg:mt-[3.333vw] justify-center">
          {data?.map((item, index) => (
            <div
              className="lg:p-[1.25vw] p-2 border-[1px] border-black w-full lg:w-[20.563vw] md:w-1/2 "
              key={index}
            >
              {item?.attributes?.thumbnailImage?.data?.attributes?.url && (
                <div className="lg:w-full  lg:h-auto w-full h-auto lg:mb-[2.083vw] mb-2">
                  <Image
                    src={cleanImage(
                      item?.attributes?.thumbnailImage?.data?.attributes?.url
                    )}
                    width={350}
                    height={366}
                    className="w-full h-full object-cover"
                    alt="blog image"
                  />
                </div>
              )}
              <p className="lg:text-[1.25vw] lg:leading-[1.667vw] leading-[5.208vw] font-bold  text-black text-[20px] lg:mb-[1.25vw] mb-2">
                {item?.attributes?.title}
              </p>
              <p className=" lg:text-[1.042vw] lg:leading-[1.667vw] leading-[5.208vw]  text-black text-[16px] lg:mb-[1.25vw] mb-2">
                {item?.attributes?.description
                  ?.split(" ")
                  ?.slice(0, 10)
                  ?.join(" ")}
                ...
              </p>
              <p
                className=" lg:text-[1.042vw] lg:leading-[1.667vw] leading-[5.208vw] font-bold cursor-pointer hover:text-blue-600 text-black text-[16px] "
                onClick={() => {
                  router.push(`/blogs/${item?.attributes?.slug}`, undefined, { scroll: true });
                }}
              >
                Read more
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
