import SmoothScroll from "@/common/SmoothScroller";
import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";
import { store } from "@/redux/store";
import Providers from "@/redux/provider";
import { useState } from "react";
import PopUp from "@/common/Popup";
import axios from "axios";
import Modal from "@/common/Modal";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import BlackButton from "@/common/BlackButton";

const MyApp = ({ Component, pageProps }) => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(true);

  const handlePopUpClose = () => {
    setIsPopUpVisible(false);
  };

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
    <Providers store={store}>
      <SmoothScroll>
        <MainLayout>
          <Component {...pageProps} />

          {isPopUpVisible && (
            <PopUp
              imageSrc="/images/home/poster.jpeg"
              onClose={handlePopUpClose}
              source={"Enquire now"}
            />
          )}

          <button
            className="fixed right-[-47px] top-1/2 transform -translate-y-1/2 -rotate-90 text-white bg-[#C29B5C]  px-5 py-2 rounded-t-md shadow-lg z-50"
            onClick={() => setShow(true)}
          >
            Enquire Now
          </button>

          <Modal isOpen={show} onClose={() => setShow(false)}>
            <p className="lg:text-xl text-base font-bold text-white">
              Enquire now
            </p>
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
                  <p className="text-red-500 text-xs">
                    {errors.mobile.message}
                  </p>
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
          <a
            href="https://wa.me/917518109109"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-75"></div>
              <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.52 3.48A11.84 11.84 0 0012 0C5.373 0 0 5.373 0 12c0 2.124.555 4.182 1.61 6.006L0 24l6.246-1.6A11.916 11.916 0 0012 24c6.627 0 12-5.373 12-12 0-3.181-1.237-6.174-3.48-8.52zM12 22.064a9.949 9.949 0 01-5.087-1.372l-.364-.213-3.707.95.989-3.634-.236-.375A9.97 9.97 0 012 12c0-5.514 4.486-10 10-10 2.652 0 5.148 1.033 7.03 2.91A9.866 9.866 0 0122 12c0 5.514-4.486 10-10 10zm5.219-7.053c-.303-.152-1.793-.886-2.071-.986-.278-.101-.48-.152-.682.152-.202.303-.782.986-.96 1.188-.177.202-.354.227-.656.076-.303-.152-1.281-.472-2.44-1.506-.902-.802-1.51-1.79-1.685-2.093-.177-.303-.019-.467.133-.618.137-.136.304-.354.455-.531.152-.178.202-.303.304-.506.101-.202.05-.38-.025-.531-.076-.152-.682-1.645-.934-2.26-.245-.59-.495-.51-.682-.52l-.58-.011c-.202 0-.531.076-.81.38-.278.303-1.066 1.04-1.066 2.535s1.093 2.941 1.244 3.147c.152.202 2.149 3.283 5.205 4.602.728.314 1.295.5 1.737.639.729.232 1.392.2 1.917.122.585-.086 1.793-.731 2.047-1.437.253-.707.253-1.313.177-1.437-.076-.126-.278-.202-.58-.354z" />
                </svg>
              </div>
            </div>
          </a>
        </MainLayout>
      </SmoothScroll>
    </Providers>
  );
};

export default MyApp;
