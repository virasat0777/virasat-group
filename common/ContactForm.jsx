import React from "react";
import { useForm } from "react-hook-form";
import BlackButton from "./BlackButton";
import axios from "axios";
import { useRouter } from "next/router";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();
  const { query } = router;

  const onSubmit = async (data) => {
    console.log(data);

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
      source: "footer",
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
        reset();
        router.push("/thankyou");
      }
    } catch (error) {
      console.error(
        "Error submitting to Strapi backend:",
        error.response ? error.response.data : error.message
      );
    }
    //Strapi backend Sheet End
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-4 bg-transparent"
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
      {/* Checkbox */}
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          {...register("acceptTerms", {
            required: "You must accept the terms",
          })}
          className="accent-[#C29B5C]"
        />
        <label className="text-sm text-white">
          I Acknowledge And Accept All Policies
        </label>
      </div>
      {errors.acceptTerms && (
        <p className="text-xs text-red-500">{errors.acceptTerms.message}</p>
      )}
      {/* Submit Button */}
      <BlackButton
        color={"#C29B5C"}
        hoverColor={"#000000"}
        textColor={"#000000"}
        hoverTextColor={"#ffffff"}
        name="Submit"
        handleFunction={handleSubmit(onSubmit)}
      />
    </form>
  );
};

export default ContactForm;
