import SectionTitle from "@/common/SectionTitle";
import { cleanImage } from "@/services/imageHandling";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const NewsList = ({ newsData }) => {
  const router = useRouter();

  return (
    <div className={`lg:pt-[2.133vw] pt-6 lg:px-[12.292vw] px-4 relative`}>
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center mb-8 lg:mb-[2.083vw]">
        <SectionTitle title={"NEWS AND EVENTS"} />
      </div>

      <div className="flex flex-wrap lg:gap-[2.133vw] lg:justify-start justify-center">
        {newsData &&
          newsData?.map((item, index) => (
            <div key={index} className="lg:w-[34.458vw] w-full h-auto mb-8">
              {item?.attributes?.thumbnailImage?.data?.attributes?.url && (
                <div className="lg:w-[34.458vw] w-full h-auto">
                  <Image
                    className="h-full w-full object-cover"
                    width={700}
                    height={350}
                    src={cleanImage(
                      item?.attributes?.thumbnailImage?.data?.attributes?.url
                    )}
                    alt="news image"
                  />
                </div>
              )}
              {item?.attributes?.title && (
                <p className="lg:text-[1.25vw] lg:leading-[1.667vw] leading-[24px] font-bold  text-black text-[20px] lg:my-[1.083vw] my-2">
                  {item?.attributes?.title}
                </p>
              )}
              {item?.attributes?.description && (
                <p className=" lg:text-[1.042vw] lg:leading-[1.667vw] leading-[20px]  text-black text-[16px] lg:mb-[0.725vw] mb-2">
                  {item?.attributes?.description
                    .split(" ")
                    .slice(0, 10)
                    .join(" ")}
                  ...
                </p>
              )}
              <p
                className=" lg:text-[1.042vw] lg:leading-[1.667vw] leading-[5.208vw] font-bold cursor-pointer hover:text-blue-600 text-black text-[16px] "
                onClick={() => {
                  item?.attributes?.redirect
                    ? window.open(item?.attributes?.redirect, "_blank")
                    : router.push(`/news/${item?.attributes?.slug}`, undefined, { scroll: true });
                }}
              >
                Read more
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsList;
