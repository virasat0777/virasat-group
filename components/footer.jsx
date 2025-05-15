import ContactForm from "@/common/ContactForm";
import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

const Footer = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const leadData = {
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      source: "footer",
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
        router.push("/thank-you");
      }
    } catch (error) {
      console.error(
        "Error submitting to Google Sheet API:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const QuickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Awards", link: "/award" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Project ", link: "/projects" },
    { name: "Contact Us", link: "/" },
  ];

  const QuickLinkss = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "News And Media", link: "/news" },
    { name: "Career", link: "/careers" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Blogs", link: "/blogs" },
  ];

  const topologies = [
    { name: "Flats in andheri west", link: "/career" },
    { name: "2 and 3 bhk in andheri west", link: "/privacy-policy" },
    { name: "2 Bhk flat in bandra west", link: "/contact" },
    { name: "4 Bhk in bandra west", link: "4 Bhk in bandra west" },
  ];

  const topology = [
    {
      data: "Transcon Triumph, Next to Oberoi Springs Opp. Tanishq Showroom, Off New Link Road, near Monginis Cake Factory, Andheri West, Mumbai, Maharashtra 400053",
    },
  ];

  return (
    <>
      <div className="relative lg:px-[8.333vw] px-4 lg:py-[6.094vw] py-8">
        <div className="absolute inset-0 -z-10 ">
          <Image
            src={`/images/footer/footer.png`}
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between justify-start items-center">
          <div className="text-start text-white lg:w-[33.75vw] w-full">
            <div className="text-nowrap">
              <SectionTitle title={"CONNECT WITH US"} />
            </div>

            <div className="lg:mt-[2.183vw] mt-6 lg:mb-[6.25vw] mb-4">
              <p className="lg:text-[1.042vw] lg:leading-[1.667vw] leading-5 text-base">
                Have questions or ready to get started? Connect with us and
                let’s make great things happen. Our team is just a message away.
              </p>
            </div>
          </div>
          <div className="lg:w-[33.75vw] md:w-2/3 w-full">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className=" bg-black lg:px-20 xl:px-40  flex flex-col gap-16 w-full lg:pb-10 lg:pt-0   px-5 py-5">
        <div className="grid text-start border-t-2 border-[#E2A4307D] pt-10 xl:grid-cols-[22%,25%,25%,20%] lg:grid-cols-[22%,25%,25%,20%] lg:gap-0 gap-7 xs:grid-cols-1 items-start overflow-hidden w-full ">
          <div className=" text-left flex flex-col gap-2  md:gap-5  ">
            <div className="flex justify-start text-white-color mont text-[1.5rem] font-[500]">
              <Image
                className="w-[9rem] cursor-pointer h-[9rem]"
                // src={"/icon/virasatlogo.png"}
                src={"/images/footer/footer.svg"}
                height={300}
                width={300}
                alt="Logo"
                onClick={() => {
                  router.push("/");
                }}
              />
            </div>

            <div className="flex gap-3 justify-start text-white-color mont text-[0.8rem] font-[500]">
              <a
                href="https://www.facebook.com/VirasatInfraGroup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#C29B5C" />
                  <path
                    d="M19.4751 9.31104C18.3743 9.31104 17.3185 9.74833 16.5401 10.5267C15.7617 11.3051 15.3244 12.3609 15.3244 13.4617V15.7726H13.1033C12.992 15.7726 12.9014 15.8623 12.9014 15.9745V19.0258C12.9014 19.1371 12.9911 19.2277 13.1033 19.2277H15.3244V25.4873C15.3244 25.5986 15.4142 25.6892 15.5264 25.6892H18.5776C18.6889 25.6892 18.7796 25.5995 18.7796 25.4873V19.2277H21.0205C21.1129 19.2277 21.1937 19.1649 21.2161 19.0751L21.9789 16.0239C21.9864 15.9941 21.9871 15.963 21.9807 15.9329C21.9744 15.9029 21.9613 15.8747 21.9425 15.8504C21.9236 15.8262 21.8995 15.8066 21.8719 15.7931C21.8443 15.7796 21.814 15.7726 21.7833 15.7726H18.7796V13.4617C18.7796 13.3703 18.7976 13.2799 18.8325 13.1955C18.8675 13.1111 18.9187 13.0345 18.9833 12.9699C19.0479 12.9053 19.1245 12.8541 19.2089 12.8191C19.2933 12.7842 19.3837 12.7662 19.4751 12.7662H21.8084C21.9197 12.7662 22.0103 12.6764 22.0103 12.5642V9.51296C22.0103 9.40168 21.9206 9.31104 21.8084 9.31104H19.4751Z"
                    fill="#000D19"
                  />
                </svg>
              </a>

              <a
                href="https://www.twitter.com/VirasatGroupLko"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="35"
                  viewBox="0 0 36 35"
                  fill="none"
                >
                  <circle cx="18.2695" cy="17.5" r="17.5" fill="#C29B5C" />
                  <path
                    d="M27.434 11.8067C26.7491 12.1096 26.0229 12.3087 25.2792 12.3972C26.0627 11.928 26.649 11.1899 26.9287 10.3205C26.1928 10.7585 25.386 11.0654 24.546 11.2314C23.9812 10.6271 23.2325 10.2263 22.4164 10.0913C21.6002 9.95635 20.7624 10.0948 20.033 10.4852C19.3037 10.8755 18.7238 11.4959 18.3834 12.2498C18.043 13.0038 17.9613 13.849 18.1509 14.6542C16.6584 14.5796 15.1983 14.1918 13.8654 13.5162C12.5325 12.8405 11.3566 11.8921 10.4141 10.7324C10.0805 11.3054 9.9052 11.9568 9.90614 12.6198C9.90614 13.921 10.5693 15.0707 11.5754 15.7437C10.9795 15.7249 10.3967 15.564 9.87563 15.2744V15.3201C9.8756 16.1869 10.1754 17.0271 10.7242 17.698C11.273 18.369 12.0369 18.8295 12.8865 19.0014C12.3334 19.1515 11.7533 19.1736 11.1904 19.066C11.4299 19.8122 11.8968 20.4647 12.5258 20.9322C13.1547 21.3997 13.914 21.6587 14.6975 21.6731C13.9189 22.2846 13.0273 22.7367 12.0738 23.0034C11.1203 23.2701 10.1236 23.3463 9.14062 23.2274C10.8563 24.3307 12.8534 24.9165 14.8932 24.9146C21.7981 24.9146 25.5727 19.1953 25.5727 14.2351C25.5727 14.0736 25.5691 13.9103 25.5619 13.7496C26.2964 13.2187 26.9303 12.5601 27.434 11.8067Z"
                    fill="#000D19"
                  />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/channel/UCaPGqgyfjxhPLEBJzgHQJBQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="w-[2.2rem] cursor-pointer h-[2.2rem]"
                  text-black
                  src={"/icon/ytsvg.svg"}
                  height={100}
                  width={100}
                  alt="YouTube"
                />
              </a>

              <a
                href="https://www.instagram.com/virasatinfragroup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="w-[2.2rem] cursor-pointer h-[2.2rem]"
                  src={"/icon/instasvg.svg"}
                  height={100}
                  width={100}
                  alt="Instagram"
                />
              </a>
            </div>

            <div className=" hidden md:flex justify-start">
              <div className="flex items-center text-white-color Montserrat text-[0.932rem] font-[400] gap-3">
                Copyright ©2025
              </div>
            </div>
          </div>

          {/* <div className="h-full">
            <div className="flex justify-start ">
              <div className="flex navTitle flex-col">
                <span className="font-[600] capitalize xl:text-[1.5rem] md:text-[1.2rem] GildaDisplay text-white text-[1.4rem]">
          
                </span>
                <span className="navTitleBar"></span>
              </div>
            </div>

            <div className="h-full xl:pt-2 pt-1">
              {["Projects Residential", "Commercial Projects"].map(
                (val, index) => {
                  return (
                    <div className="flex flex-col gap-10" key={index}>
                      <Link
                        className=" Montserrat text-[1rem] flex flex-col gap-10 hover:text-[#C29B5C] pt-3 font-[400] text-white "
                        href={val}
                      >
                        {val}
                      </Link>
                    </div>
                  );
                }
              )}
            </div> 
          </div> */}
          <div className="h-full">
            <div className="flex justify-start ">
              <div className="flex navTitle flex-col">
                <span className="font-[600] capitalize xl:text-[1.5rem] md:text-[1.2rem] GildaDisplay text-white text-[1.4rem]">
                  Quick Links
                </span>
                <span className="navTitleBar"> </span>
              </div>
            </div>

            <div className="h-full xl:pt-2 pt-1">
              {QuickLinkss.map((val, index) => {
                return (
                  <div className="flex flex-col gap-10" key={index}>
                    <Link
                      className=" Montserrat text-[1rem] flex flex-col gap-10 hover:text-[#C29B5C] pt-3 font-[400] text-white "
                      href={val?.link}
                    >
                      {val.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-full">
            <div className="h-full ">
              <h2 className="font-[600] capitalize xl:text-[1.5rem] md:text-[1.2rem] GildaDisplay text-white text-[1.4rem]">
                Contact Details
              </h2>
              <p className="Montserrat text-[1rem] flex flex-col gap-10 hover:text-[#C29B5C] pt-3 font-[400] text-white">
                <Link
                  href={
                    "https://www.google.com/maps/search/5%2F288+Vipul+Khand,+Gomti+Nagar,+Lucknow,+Reg.+Office:+3%2F243+Vishwas+Khand,+Gomti+Nagar,+Lucknow/@26.853446,80.9776748,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                  }
                  target="_blank"
                >
                  5/288 Vipul Khand, Gomti Nagar, Lucknow, Reg. Office: 3/243
                  Vishwas Khand, Gomti Nagar, Lucknow
                </Link>
              </p>

              <h2 className="font-[600] capitalize xl:text-[1.5rem] md:text-[1.2rem] GildaDisplay text-white text-[1.4rem] mt-5">
                Email
              </h2>
              <p className="Montserrat text-[1rem] flex flex-col gap-10 hover:text-[#C29B5C] pt-1 font-[400] text-white">
                <Link
                  href={"mailto:contact@virasatgroup.co.in"}
                  target="_blank"
                >
                  contact@virasatgroup.co.in
                </Link>
              </p>
              <h2 className="font-[600] capitalize xl:text-[1.5rem] md:text-[1.2rem] GildaDisplay text-white text-[1.4rem] mt-5">
                call
              </h2>
              <p className="Montserrat text-[1rem] flex flex-col gap-10 hover:text-[#C29B5C] pt-1 font-[400] text-white">
                <Link href={"tel:+91 7518109109"} target="_blank">
                  +91 7518109109
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
