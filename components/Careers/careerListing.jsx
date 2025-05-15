import Badge from "@/common/Badge";
import BlackButton from "@/common/BlackButton";
import JobDescriptionAccordion from "@/common/JDAccordion";
import Modal from "@/common/Modal";
import ReadMoreLess from "@/common/Readmore";

import SectionTitle from "@/common/SectionTitle";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CareerListing = ({ data }) => {
  console.log(data?.available_jobs?.data[0].attributes?.badges, "abai");
  const [show, setShow] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  // const onSubmit = (data) => {
  //   console.log("Form Submitted:");
  //   console.log("Name:", data.name);
  //   console.log("Email:", data.email);
  //   console.log("Mobile:", data.mobile);
  // };

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    console.log("Selected File:", selectedFile);

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("data", JSON.stringify(data));
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("mobile", data.mobile);
      formData.append("jobrole", data.jobRole || "N/A"); // Optional: if you have jobRole

      formData.append("files.resume", selectedFile);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/career-leads`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);

      if (response.status === 200) {
        router.push("/thankyou");
      }
    } catch (error) {
      if (error.response) {
        console.error(
          "Server responded with error status:",
          error.response.status
        );
        console.error("Error data:", error.response.data);
      } else if (error.request) {
        console.error("No response received from server:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
  };
  return (
    <div
      className={`lg:px-[10vw] lg:pt-[4.167vw] px-4 pt-6 lg:pb-[1.717vw] pb-8 relative`}
    >
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <div className="flex justify-center mb-8">
          <SectionTitle title={"CURRENT OPENINGS"} />
        </div>

        {data?.available_jobs?.data.length > 0 &&
          data?.available_jobs?.data?.map((item, index) => (
            <div
              className="w-full pt-4 lg:pt-[2.5vw] pb-6 border-b-[3px] border-[#D2AB67] mb-5"
              key={index}
            >
              {item?.attributes?.field && (
                <p className="lg:text-[1.042vw] text-base capitalize lg:mb-[1.042vw] mb-2">
                  {item?.attributes?.field}
                </p>
              )}
              {item?.attributes?.designation && (
                <p className="kenoky lg:leading-[1.51vw] leading-5 lg:text-[1.563vw] text-base lg:mb-[1.042vw] mb-2">
                  {item?.attributes?.designation}
                </p>
              )}
              {item?.attributes?.location && (
                <p>{item?.attributes?.location}</p>
              )}
              {item?.attributes?.badges.length > 0 && (
                <div className="w-auto lg:mb-[1.042vw] mb-4 flex lg:gap-4 gap-2 my-4 md:flex-row flex-col">
                  {item?.attributes?.badges.map((item) => (
                    <Badge
                      name={item?.badge}
                      key={item?.id}
                      textColor="black"
                      color="transparent"
                    />
                  ))}
                </div>
              )}
              <div>
                <JobDescriptionAccordion
                  item={{ jobDescription: item?.attributes?.jobDescription }}
                />
              </div>
              <div className="lg:mt=[2vw] mt-4">
                <p>About our team:</p>
                <ReadMoreLess
                  html={item?.attributes?.smallDescription}
                  wordLimit={20}
                />
              </div>

              <BlackButton
                name="Apply Now"
                handleFunction={() => {
                  setShow(true);
                }}
              />
            </div>
          ))}
      </div>

      <Modal isOpen={show} onClose={() => setShow(false)}>
        <div className=" w-full lg:p-[2.5vw] p-4 bg-black rounded-lg ">
          <p className="lg:text-xl text-base font-bold text-black">Apply now</p>

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

            <div>
              <input
                type="file"
                accept=".doc,.docx,.pdf"
                {...register("resume", {
                  required: "Resume is required",
                })}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setSelectedFile(file);
                  } else {
                    setSelectedFile(null);
                  }
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#C29B5C]"
              />
              {errors.resume && (
                <p className="text-red-500 text-xs">{errors.resume.message}</p>
              )}
            </div>

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

export default CareerListing;
