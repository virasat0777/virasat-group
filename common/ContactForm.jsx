import React from "react";
import { useForm } from "react-hook-form";
import BlackButton from "./BlackButton";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
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
        <p className="text-red-500 text-xs">{errors.acceptTerms.message}</p>
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
