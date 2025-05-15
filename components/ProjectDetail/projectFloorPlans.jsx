import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";
import { CircularLeftArrow, CircularRightArrow } from "@/public/icon/arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { cleanImage } from "@/services/imageHandling";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";

const ProjectFloorPlans = ({ data }) => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      Toolbar: {
        display: [
          { id: "counter", position: "center" },
          "zoom",
          "slideshow",
          "fullscreen",
          "download",
          "thumbs",
          "close",
        ],
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="pt-4 lg:pb-[4.167vw] pb-4 lg:pt-[0.167vw] px-4 lg:px-[13.333vw]">
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      {data?.title && (
        <div className="text-center mb-4 lg:mb-[3vw]">
          <SectionTitle title={data?.title} />
        </div>
      )}

      <div className="w-full ">
        <div className="w-full h-full">
          <div className="w-full h-full">
            <div className="flex justify-between items-center gap-4">
              <div className="button-border group button-floor-prev-con cursor-pointer z-10 lg:block hidden">
                <CircularLeftArrow />
              </div>
              <div className="h-full overflow-x-hidden w-full">
                <Swiper
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  spaceBetween={25}
                  navigation={{
                    nextEl: ".button-floor-next-con",
                    prevEl: ".button-floor-prev-con",
                  }}
                  modules={[Navigation, Autoplay]}
                  className="awards-swiper"
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                >
                  {data?.images?.data &&
                    data?.images?.data?.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="">
                          {item?.attributes?.url && (
                            <div className="lg:w-full  lg:h-[16.021vw] w-full h-auto ">
                              <a
                                href={cleanImage(item?.attributes?.url)}
                                data-fancybox="gallery"
                              >
                                <Image
                                  src={cleanImage(item?.attributes?.url)}
                                  width={432}
                                  height={328}
                                  className="w-full h-full object-cover"
                                  alt={`floor-plan-${index}`}
                                />
                              </a>
                            </div>
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="button-border group button-floor-next-con cursor-pointer z-10 lg:block hidden">
                <CircularRightArrow />
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:hidden flex justify-center  gap-4 mt-6 lg:justify-between items-center w-full ">
          <div className="button-border group button-floor-prev-con cursor-pointer z-10">
            <CircularLeftArrow />
          </div>
          <div className="button-border group button-floor-next-con cursor-pointer z-10">
            <CircularRightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFloorPlans;
