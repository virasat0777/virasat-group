import BlackButton from "@/common/BlackButton";
import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";
import { slideIn } from "@/Animation/Variants";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { cleanImage } from "@/services/imageHandling";
import Modal from "@/common/Modal";

const ProjectOverview = ({ data, title }) => {
  // console.log(data, "projectData");
// console.log('title',title)

  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const brochure = data?.brochure?.data?.attributes?.url;
  const router = useRouter();
  const { query } = router;

  const onSubmit = async (data) => {

    const utmdata = {
      utm_campaign: query.utm_campaign ? query.utm_campaign : "",
      utm_channel: query.utm_channel ? query.utm_channel : "",
      utm_keyword: query.utm_keyword ? query.utm_keyword : "",
      utm_placement: query.utm_placement ? query.utm_placement : "",
      utm_device: query.utm_device ? query.utm_device : "",
      utm_medium: query.utm_medium ? query.utm_medium : "",
      gclid: query.gclid ? query.gclid : "",
    };

    const leadData = {
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      source: `${title} (Download Brochure)`,
      ...utmdata,
    };
    
    const payload = {
      data: leadData,
    };

     //Google Sheet Start
     try {
      const response2 = await axios.post("/api/googlesheetapi", leadData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Google Sheet API response:", response2.data);
    } catch (error) {
      console.error(
        "Error submitting to Google Sheet API:",
        error.response ? error.response.data : error.message
      );
    }

    //Google Sheet End
    
    //Strapi backend Sheet Start
    try {
      const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/website-leads`;
      const response = await axios.post(endpoint, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        window.open(cleanImage(brochure), "_blank");
        // router.push("/thankyou");
        window.location.href = "/thankyou";
        reset();
      }
    } catch (error) {
      console.error(
        "Error submitting to Google Sheet API:",
        error.response ? error.response.data : error.message
      );
    }
    //Strapi backend Sheet End

  };
  return (
    <div
      className={`relative bg-cover bg-no-repeat  bg-center w-full  lg:py-[4.167vw] lg:px-[10.417vw] py-4 px-4 `}
    >
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="overflow-x-hidden">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={slideIn("right", 0.3)}
            >
              {data?.image?.data?.attributes?.url && (
                <div className="lg:h-[35.104vw] h-full lg:w-[28.542vw] w-full">
                  <Image
                    src={
                      cleanImage(data?.image?.data?.attributes?.url)
                        ? cleanImage(data?.image?.data?.attributes?.url)
                        : "/images/project-details/projectOverview.png"
                    }
                    width={548}
                    height={674}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
            </motion.div>
          </div>
          <div className=" lg:w-1/2 flex flex-col lg:gap-[2.083vw] gap-4 lg:mb-0 ">
            {data?.title && (
              <div className="mt-4">
                <SectionTitle title={data?.title} />
              </div>
            )}
            <div>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={slideIn("left", 0.3)}
              >
                {data?.overviewContent && (
                  <div
                    className="lg:text-[1.042vw] text-base lg:leading-[1.667vw] leading-5"
                    dangerouslySetInnerHTML={{ __html: data?.overviewContent }}
                  ></div>
                )}
                {data?.brochure?.data?.attributes?.url && (
                  <BlackButton
                    name="Download Brochure"
                    // path={cleanImage(data?.brochure?.data?.attributes?.url)}
                    handleFunction={() => {
                      setShow(true);
                    }}
                    color="#000000"
                    hoverColor="#C29B5C"
                    textColor="#ffffff"
                    hoverTextColor="#000000"
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={show} onClose={() => setShow(false)}>
        <p className="text-base font-bold text-center text-white lg:text-xl">
          Download Brochure
        </p>

        <div className=" w-full lg:p-[2.5vw] p-4 bg-black rounded-lg ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-4 bg-transparent rounded"
          >
            {/* Name Field */}
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C29B5C]"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
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
              <p className="text-xs text-red-500">{errors.email.message}</p>
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
              <p className="text-xs text-red-500">{errors.mobile.message}</p>
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
              <p className="text-xs text-red-500">
                {errors.acceptTerms.message}
              </p>
            )}
            {/* Submit Button */}
            <div className="flex justify-center w-full">
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

export default ProjectOverview;
