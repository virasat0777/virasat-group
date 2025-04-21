import Image from "next/image";
import React, { useState } from "react";

const JobDescriptionAccordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(item, "item in JDAccordion");
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-5 justify-between items-center w-full lg:w-full">
      <div className="w-full">
        <div className=" rounded-tr-xl cursor-pointer transition-all duration-500">
          <div
            className="flex lg:justify-start lg:gap-[4vw] gap-4 justify-start  items-center py-3 lg:py-[0.8vw]"
            // onClick={handleToggle}
          >
            <p className="text-[18px]">Job Description</p>
            <button
              onClick={handleToggle}
              className="text-blue-600 text-sm hover:underline focus:outline-none"
            >
              {isOpen ? "Read less" : "View more"}
            </button>
          </div>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-[1000px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-1"
          }`}
        >
          <div
            className="mt-4 text-[#333] text-[15px] leading-[22.5px]"
            dangerouslySetInnerHTML={{
              __html: item?.jobDescription || "",
            }}
          />
        </div>

        <div className="pl-4 mt-3"></div>
      </div>
    </div>
  );
};

export default JobDescriptionAccordion;
