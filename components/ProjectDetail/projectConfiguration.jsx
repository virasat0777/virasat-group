import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Autoplay } from "swiper/modules";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "@/common/Modal";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "@/common/SectionTitle";
import { RightArrow, LeftArrow } from "@/public/icon/arrows";
import BlackButton from "@/common/BlackButton";
import { cleanImage } from "@/services/imageHandling";
import { useRouter } from "next/router";
const ProjectConfiguration = ({ data, title }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const leadData = {
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      source: title,
    };
    const payload = {
      data: leadData,
    };
    try {
      const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/website-leads`;
      const response = await axios.post(endpoint, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        reset();
        router.push("/thankyou");
      }
    } catch (error) {
      console.error(
        "Error submitting to Google Sheet API:",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <div className="">
      <div
        className={`lg:pt-[4.167vw] pt-4 lg:overflow-x-hidden relative bg-cover bg-no-repeat  bg-center w-full  `}
      >
        <div className="absolute inset-0 -z-10 opacity-[0.015]">
          <Image
            src={`/images/home/homeOverviewPattern.svg`}
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:flex lg:justify-end">
          {/* Left Swiper (Image 1) */}
          <div className="lg:w-[40%] w-full">
            <div className="lg:w-[80%] w-full flex justify-between items-center flex-col ">
              <div className="text-center">
                <SectionTitle title={"PROJECT CONFIGURATION"} />
              </div>
              <div className="lg:mt-[0vw] mt-2 w-full flex flex-col items-center ">
                <div className="lg:w-[31.406vw] w-full flex-col lg:flex-row justify-center h-auto items-center lg:mt-20 mt-4 flex md:justify-between md:items-center relative">
                  <div className="w-full">
                    <Swiper
                      slidesPerView={1}
                      loop={true}
                      modules={[Navigation, Controller]}
                      onSwiper={setFirstSwiper}
                      controller={{ control: secondSwiper }}
                      navigation={{
                        nextEl: ".button-project-detail-next-con",
                        prevEl: ".button-project-detail-prev-con",
                      }}
                      className="featured-project-swiper "
                      onRealIndexChange={(e) => {
                        setActiveSlide(e.realIndex);
                      }}
                      centeredSlides={true}
                    >
                      {data &&
                        data.map((item, index) => (
                          <SwiperSlide
                            key={index}
                            className="lg:flex lg:justify-center"
                          >
                            {item?.primaryImage?.data?.attributes?.url && (
                              <div className="lg:h-[26.042vw] lg:w-[21.875vw] w-[100%] h-auto  mx-auto text-center">
                                <Image
                                  height={500}
                                  width={420}
                                  className="w-full h-auto"
                                  src={cleanImage(
                                    item?.primaryImage?.data?.attributes?.url
                                  )}
                                  alt={item?.title}
                                />
                              </div>
                            )}
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                  <div className=" flex justify-center lg:justify-between items-center w-full lg:absolute">
                    <div className="button-border group button-project-detail-prev-con cursor-pointer z-[5]">
                      <LeftArrow />
                    </div>
                    <div className="button-border group button-project-detail-next-con cursor-pointer z-[5]">
                      <RightArrow />
                    </div>
                  </div>
                </div>
                <div className="lg:w-auto w-[80vw] overflow-x-hidden">
                  <ul>
                    {data[activeSlide]?.areas &&
                      data[activeSlide]?.areas?.map((item, index) => (
                        <li
                          className=" lg:text-[0.938vw] text-[0.938vw] text-[#000000] "
                          key={index}
                        >
                          <div
                            className={`flex justify-between ${
                              index === 0 ? "mt-[16px]" : ""
                            }`}
                          >
                            {item?.bhk && (
                              <span className="lg:text-[1.25vw] text-lg kenoky">
                                {item?.bhk}
                              </span>
                            )}
                            {item?.area && (
                              <span className="lg:text-[0.833vw] text-base montserrat">
                                {item?.area}
                              </span>
                            )}
                          </div>
                          {item?.bhk && item?.area && (
                            <div className="my-[16px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="398"
                                height="2"
                                viewBox="0 0 398 2"
                                fill="none"
                              >
                                <path
                                  d="M0 1H398"
                                  stroke="url(#paint0_linear_218_1257)"
                                  stroke-width="0.7"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_218_1257"
                                    x1="0"
                                    y1="1.5"
                                    x2="398"
                                    y2="1.5"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#FAF6EF" />
                                    <stop offset="0.25" />
                                    <stop offset="0.5" />
                                    <stop offset="0.75" />
                                    <stop offset="1" stop-color="#FAF6EF" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          )}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="text-center lg:w-[21.875vw] w-full">
                  <BlackButton
                    name="Know More"
                    // path="/learn"
                    color="#000000"
                    hoverColor="#C29B5C"
                    textColor="#ffffff"
                    hoverTextColor="#000000"
                    handleFunction={() => {
                      setShow(true);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* <div className="flex justify-center items-center">
              <div className="button-border group button-prev-con lg:hidden block ">
                <LeftArrow />
              </div>
              <div className="button-border group button-next-con lg:hidden block">
                <RightArrow />
              </div>
            </div> */}
          </div>

          {/* Right Swiper (Image 2) */}
          <div className="hidden lg:block">
            <div className="lg:w-[50vw] ">
              <Swiper
                slidesPerView={1}
                loop={true}
                modules={[Navigation, Controller, Autoplay]}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
                className="featured-project-swiper"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {data &&
                  data?.map((item, index) => (
                    <SwiperSlide key={index} className="">
                      <div className="lg:h-[50vw] lg:w-[50vw] w-full h-auto">
                        <Image
                          height={500}
                          width={420}
                          className="w-full h-auto "
                          src={cleanImage(
                            item?.secondaryImage?.data?.attributes?.url
                          )}
                          alt={item?.title}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={show} onClose={() => setShow(false)}>
        <p className="lg:text-xl text-base font-bold text-black">Download Brochure</p>

        <div className=" w-full lg:p-[2.5vw] p-4 bg-black rounded-lg ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-transparent w-full flex flex-col gap-4 rounded"
          >
            {/* Name Field */}
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C29B5C]"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
            {/* Email Field */}
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C29B5C]"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
            {/* Mobile Field */}
            <input
              type="tel"
              placeholder="Mobile"
              {...register("mobile", {
                required: "Mobile number is required",
                minLength: { value: 10, message: "Minimum 10 digits" },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C29B5C]"
            />
            {errors.mobile && (
              <p className="text-red-500 text-xs">{errors.mobile.message}</p>
            )}

            {/* Accept Terms Field */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                {...register("acceptTerms", {
                  required: "You must accept the terms",
                })}
                className="accent-[#C29B5C]"
              />
              <label className="text-lg text-white">
                I Acknowledge And Accept All Policies
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-red-500 text-xs">
                {errors.acceptTerms.message}
              </p>
            )}
            {/* Submit Button */}
            <div className="flex w-full justify-center">
              <BlackButton
                color={"#C29B5C"}
                hoverColor={"#000000"}
                textColor={"#000000"}
                hoverTextColor={"#ffffff"}
                name="Submit"
                handleFunction={handleSubmit(onSubmit)}
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectConfiguration;
