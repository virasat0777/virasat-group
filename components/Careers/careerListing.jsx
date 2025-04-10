import Badge from "@/common/Badge";
import BlackButton from "@/common/BlackButton";
import Modal from "@/common/Modal";
import ReadMoreLess from "@/common/Readmore";

import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CareerListing = () => {
  const [show, setShow] = useState(false);
  const jobs = [
    {
      field: "research",
      designation: "Senior platform engineer",
      location: "Mumbai, Maharashtra",
      badges: ["On Site", "Full time"],
      description:
        "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia cupiditate, magnam quo distinctio praesentium numquam maxime nihil corrupti dolorum cumque architecto quis, veniam ratione sapiente rem aliquid totam fugit itaque voluptatum. Nostrum necessitatibus, quos officia ducimus illo dolore veniam voluptatibus temporibus eligendi aut consequuntur tempora odio modi maxime quia, cum accusantium obcaecati, possimus quis sequi ipsum porro iure maiores. Nihil a quos voluptas itaque voluptates facere voluptate aspernatur velit numquam nobis animi doloribus temporibus, quasi quisquam reiciendis cumque nam. Nisi, tenetur pariatur fugiat accusantium voluptas voluptatibus. Incidunt vitae quae eveniet non deserunt quos? Ullam animi quas blanditiis nihil, voluptates molestiae.</p>",
    },
    {
      field: "research",
      designation: "Senior platform engineer",
      location: "Mumbai, Maharashtra",
      badges: ["On Site", "Full time"],
      description:
        "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia cupiditate, magnam quo distinctio praesentium numquam maxime nihil corrupti dolorum cumque architecto quis, veniam ratione sapiente rem aliquid totam fugit itaque voluptatum. Nostrum necessitatibus, quos officia ducimus illo dolore veniam voluptatibus temporibus eligendi aut consequuntur tempora odio modi maxime quia, cum accusantium obcaecati, possimus quis sequi ipsum porro iure maiores. Nihil a quos voluptas itaque voluptates facere voluptate aspernatur velit numquam nobis animi doloribus temporibus, quasi quisquam reiciendis cumque nam. Nisi, tenetur pariatur fugiat accusantium voluptas voluptatibus. Incidunt vitae quae eveniet non deserunt quos? Ullam animi quas blanditiis nihil, voluptates molestiae.</p>",
    },
    {
      field: "research",
      designation: "Senior platform engineer",
      location: "Mumbai, Maharashtra",
      badges: ["On Site", "Full time"],
      description:
        "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia cupiditate, magnam quo distinctio praesentium numquam maxime nihil corrupti dolorum cumque architecto quis, veniam ratione sapiente rem aliquid totam fugit itaque voluptatum. Nostrum necessitatibus, quos officia ducimus illo dolore veniam voluptatibus temporibus eligendi aut consequuntur tempora odio modi maxime quia, cum accusantium obcaecati, possimus quis sequi ipsum porro iure maiores. Nihil a quos voluptas itaque voluptates facere voluptate aspernatur velit numquam nobis animi doloribus temporibus, quasi quisquam reiciendis cumque nam. Nisi, tenetur pariatur fugiat accusantium voluptas voluptatibus. Incidunt vitae quae eveniet non deserunt quos? Ullam animi quas blanditiis nihil, voluptates molestiae.</p>",
    },
    {
      field: "research",
      designation: "Senior platform engineer",
      location: "Mumbai, Maharashtra",
      badges: ["On Site", "Full time"],
      description:
        "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia cupiditate, magnam quo distinctio praesentium numquam maxime nihil corrupti dolorum cumque architecto quis, veniam ratione sapiente rem aliquid totam fugit itaque voluptatum. Nostrum necessitatibus, quos officia ducimus illo dolore veniam voluptatibus temporibus eligendi aut consequuntur tempora odio modi maxime quia, cum accusantium obcaecati, possimus quis sequi ipsum porro iure maiores. Nihil a quos voluptas itaque voluptates facere voluptate aspernatur velit numquam nobis animi doloribus temporibus, quasi quisquam reiciendis cumque nam. Nisi, tenetur pariatur fugiat accusantium voluptas voluptatibus. Incidunt vitae quae eveniet non deserunt quos? Ullam animi quas blanditiis nihil, voluptates molestiae.</p>",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

        {jobs.map((item, index) => (
          <div
            className="w-full pt-4 lg:pt-[2.5vw] pb-6 border-b-[3px] border-[#D2AB67] mb-5"
            key={index}
          >
            <p className="lg:text-[1.042vw] text-base capitalize lg:mb-[1.042vw] mb-2">
              {item?.field}
            </p>
            <p className="kenoky lg:leading-[1.51vw] leading-5 lg:text-[1.563vw] text-base lg:mb-[1.042vw] mb-2">
              {item?.designation}
            </p>
            <p>{item?.location}</p>
            <div className="w-auto lg:mb-[1.042vw] mb-4 flex lg:gap-4 gap-2 my-4 md:flex-row flex-col">
              {item?.badges.map((item, index) => (
                <Badge
                  name={item}
                  key={index}
                  textColor="black"
                  color="transparent"
                />
              ))}
            </div>
            {/* <p
              dangerouslySetInnerHTML={{ __html: item?.description }}
              className="lg:mb-[1.042vw] mb-4 lg:leading-[1.667vw] lg:text-lg text-xs"
            ></p>
            <p className="items-center  flex gap-2 lg:mb-[1.042vw] mb-4">
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
              >
                <path
                  d="M4.94978 7.00009L0 2.05032L1.41422 0.636108L7.77818 7.00009L1.41422 13.364L0 11.9498L4.94978 7.00009Z"
                  fill="black"
                />
              </svg>
            </p> */}

            <ReadMoreLess html={item?.description} wordLimit={20} />

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
