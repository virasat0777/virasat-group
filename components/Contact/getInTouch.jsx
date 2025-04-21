import BlackButton from "@/common/BlackButton";
import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const GetInTouch = ({ data, office }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const info = [
    {
      title: "+91 7518109109",
      image: "/icon/contact/phone-logo.svg",
      type: "phone",
    },
    {
      title: "info@virasatgroup.co.in",
      image: "/icon/contact/email-logo.svg",
      type: "email",
    },
  ];

  const contactBlocks = [
    {
      title: "Corporate Office",
      address:
        "5/288, Vipul Khand, Gomti Nagar, Lucknow, Uttar Pradesh  226010",
    },
    {
      title: "Head Office",
      address:
        "Plot No. 33, Khasra No-111, Geetapuri Colony Gomti Nagar Ext. Sector 5, Lucknow",
    },
    {
      title: "Site Address",
      address:
        "Virasat Skyscrapers Group Housing Project Khasra No. 426,Baghamau Gomtinagar Extension Sector 6, Lucknow, UP.",
    },
  ];
  return (
    <div className={`lg:px-[13.333vw] px-4 lg:py-[4.167vw] py-8 relative`}>
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        {data?.title && (
          <div className="text-center lg:mb-[2.083vw] mb-6">
            <SectionTitle title={data?.title} />
          </div>
        )}
        <div className="flex justify-center lg:mb-[2.083vw] mb-5">
          {data?.description && (
            <div className="lg:w-[36vw] w-full">
              <p className="w-full text-center">{data?.description}</p>
            </div>
          )}
        </div>
        <div className="flex justify-center lg:mb-[2.5vw] mb-5">
          <div className="lg:w-[47.188vw] w-full">
            <div className=" flex lg:flex-row flex-col justify-between items-center ">
              {data?.contactNo && (
                <span className="w-full lg:w-auto lg:mb-0 mb-4">
                  <span className="flex lg:gap-[0.729vw] gap-[10px] items-center">
                    <div className="lg:w-[3.125vw] lg:h-[3.125vw] w-[60px] h-[60px]">
                      <Image
                        src={"/icon/contact/phone-logo.svg"}
                        height={60}
                        width={60}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      href={`tel:${data?.contactNo}`}
                      className="lg:text-[1.146vw] text-lg font-bold"
                    >
                      {data?.title}
                    </Link>
                  </span>
                </span>
              )}
              <span className="w-full lg:w-auto lg:mb-0 mb-4">
                {data?.email && (
                  <span className="flex lg:gap-[0.729vw] gap-[10px] items-center">
                    <div className="lg:w-[3.125vw] lg:h-[3.125vw] w-[60px] h-[60px]">
                      <Image
                        src={"/icon/contact/email-logo.svg"}
                        height={60}
                        width={60}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      href={`mailto:${data?.email}`}
                      className="lg:text-[1.146vw] text-lg font-bold"
                    >
                      {data?.email}
                    </Link>
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="lg:w-[34.479vw] w-full lg:p-[2.5vw] p-4 bg-black rounded-lg lg:rounded-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-transparent w-full flex flex-col gap-4"
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

              <textarea
                rows={8}
                type="tel"
                placeholder="Message"
                {...register("message", {
                  required: "message is required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C29B5C]"
              />
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message.message}</p>
              )}

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
        </div>
      </div>

      <div className="lg:mt-[4.167vw] mt-6 w-full">
        <div className="flex justify-center lg:mb-[2.083vw]">
          <SectionTitle title={"OFFICE LOCATION"} />
        </div>
        <div className="lg:flex gap-[2.292vw] ">
          {office?.locationItems?.length > 0 &&
            office?.locationItems?.map((item, index) => (
              <div
                className="lg:w-[22.813vw]   w-full h-auto bg-black lg:py-[2.917vw] py-4 flex flex-col items-center mb-8"
                key={index}
              >
                <div className="lg:w-[1.667vw] lg;h-[1.667vw] w-[32px] h-[32px] lg:mb-[1.25vw] mb-4 ">
                  <Image
                    height={32}
                    width={32}
                    src={"/icon/contact/location.svg"}
                    className="w-full h-full object-cover"
                  />
                </div>
                {item?.name && (
                  <p className="text-white lg:text-[1.146vw] text-lg lg:mb-[1.667vw] mb-2">
                    {item?.name}
                  </p>
                )}
                {item?.location && (
                  <p className="text-white lg:text-[1.146vw] text-lg text-center px-4">
                    {item?.location}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
