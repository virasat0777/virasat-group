import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "@/common/SectionTitle";
import { RightArrow, LeftArrow } from "@/public/icon/arrows";
import BlackButton from "@/common/BlackButton";
import { cleanImage } from "@/services/imageHandling";

const HomeProjects = ({ projects }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const featuredProjectData = projects?.filter(
    (item) => item?.attributes?.projectStatus.toLowerCase() === "ongoing"
  );
  return (
    <div
      className={`lg:pt-[4.167vw] pt-4 lg:overflow-x-hidden relative bg-cover bg-no-repeat  bg-center w-full  `}
    >
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
          alt="background pattern"
        />
      </div>
      <div className="lg:flex lg:justify-end">
        {/* Left Swiper (Image 1) */}
        <div className="lg:w-[40%] w-full">
          <div className="lg:w-[80%] w-full flex justify-between items-center flex-col ">
            <SectionTitle title={"OUR PROJECTS"} />
            <div className="lg:mt-[0vw] mt-2 w-full flex flex-col items-center ">
              <div className="lg:w-[31.406vw]  lg:flex-row  w-full justify-center h-auto items-center lg:mt-20 mt-4  relative  flex md:justify-between md:items-center">
                {/* <div className="button-border group button-prev-con hidden lg:block ">
                  <LeftArrow />
                </div> */}
                <div className="w-full">
                  <Swiper
                    slidesPerView={1}
                    loop={true}
                    modules={[Navigation, Controller, Autoplay]}
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper }}
                    navigation={{
                      nextEl: ".button-next-con",
                      prevEl: ".button-prev-con",
                    }}
                    className="featured-project-swiper "
                    onRealIndexChange={(e) => {
                      setActiveSlide(e.realIndex);
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                  >
                    {featuredProjectData.map((item, index) => (
                      <SwiperSlide
                        key={index}
                        className="lg:flex lg:justify-center"
                      >
                        {item?.attributes?.featuredSection?.primaryImage?.data
                          ?.attributes?.url && (
                          <div className="lg:h-[26.042vw] lg:w-[21.875vw] w-[100%] h-auto  mx-auto text-center">
                            <Image
                              height={500}
                              width={420}
                              className="w-full h-auto"
                              src={cleanImage(
                                item?.attributes?.featuredSection?.primaryImage
                                  ?.data?.attributes?.url
                              )}
                              alt={item?.attributes?.title}

                            />
                          </div>
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className=" lg:flex hidden   justify-center lg:justify-between items-center w-full lg:absolute">
                  <div className="button-border group button-prev-con cursor-pointer z-10">
                    <LeftArrow />
                  </div>
                  <div className="button-border group button-next-con cursor-pointer z-10">
                    <RightArrow />
                  </div>
                </div>
                {/* <div className="button-border group button-next-con hidden lg:block">
                  <RightArrow />
                </div> */}
              </div>
              <div className="text-center lg:w-[21.875vw] w-full ">
                {featuredProjectData[activeSlide]?.attributes?.projectTitle && (
                  <p className="mt-2 text-center kenoky lg:text-[1.25vw] text-[24px]">
                    {featuredProjectData[activeSlide]?.attributes?.projectTitle}
                  </p>
                )}
                {featuredProjectData[activeSlide]?.attributes?.featuredSection
                  ?.smallDescription && (
                  <p className="mt-2 text-center">
                    {
                      featuredProjectData[activeSlide]?.attributes
                        ?.featuredSection?.smallDescription
                    }
                  </p>
                )}

                <BlackButton
                  name="Know more"
                  path={`/projects/${featuredProjectData[activeSlide]?.attributes?.slug}`}
                  color="#000000"
                  hoverColor="#C29B5C"
                  textColor="#ffffff"
                  hoverTextColor="#000000"
                />
              </div>
            </div>
          </div>

          <div className="flex lg:hidden justify-center items-center">
            <div className="button-border group button-prev-con lg:hidden block ">
              <LeftArrow />
            </div>
            <div className="button-border group button-next-con lg:hidden block">
              <RightArrow />
            </div>
          </div>
        </div>

        {/* Right Swiper (Image 2) */}
        <div className="hidden lg:block">
          <div className="lg:w-[50vw] ">
            <Swiper
              slidesPerView={1}
              loop={true}
              modules={[Navigation, Controller]}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              className="featured-project-swiper"
            >
              {featuredProjectData.map((item, index) => (
                <SwiperSlide key={index} className="">
                  <div className="lg:h-[50vw] lg:w-[50vw] w-full h-auto">
                    {item?.attributes?.featuredSection?.secondaryImage?.data
                      ?.attributes?.url && (
                      <Image
                        height={500}
                        width={420}
                        className="w-full h-auto relative"
                        src={cleanImage(
                          item?.attributes?.featuredSection?.secondaryImage
                            ?.data?.attributes?.url
                        )}
                        alt={item?.attributes?.title}
                        
                      />
                    )}
                  </div>
                  {item?.attributes?.date && (
                    <p className="absolute lg:bottom-[3vw] bottom-2 w-full text-center lg:text-[1.25vw] kenoky text-white  mx-auto ">
                      {item?.attributes?.date}
                    </p>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
