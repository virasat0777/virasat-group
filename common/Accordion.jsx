import Image from "next/image";
import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className=" flex flex-col-reverse md:flex-row gap-5 md:gap-5 justify-between items-center w-full lg:w-[25.938vw]">
        <ul className="w-full">
          {data &&
            data.map((items, index) => (
              <div key={index} className="">
                <div
                  className="flex mt-8 item-start cursor-pointer justify-between items-center relative bg-black lg:py-[0.8vw] py-3 rounded-tr-xl transition-all duration-500"
                  onClick={() => handleToggle(index)}
                >
                  {items?.name && (
                    <p className="text-[18px] lg:pl-[1.15vw] pl-4 text-white">
                      {items?.name}
                    </p>
                  )}
                  <div className="lg:-mr-[1.3vw] -mr-[20px] transition-transform duration-300 lg:h-[2.604vw] lg:w-[2.604vw] w-[50px] h-[50px] ease-in-out">
                    <Image
                      height={50}
                      width={50}
                      className={`w-full h-full transform transition-transform duration-300 ease-in-out ${
                        openIndex === index ? "" : "rotate-180"
                      }`}
                      src="/icon/up-arrow.svg"
                      alt="arrow"
                    />
                  </div>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-[1000px] opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-1"
                  }`}
                >
                  {items?.details?.map((item, i) => (
                    <div key={i} className="flex justify-start my-4">
                      <div className="flex justify-center md:gap-5 items-start md:items-center w-full">
                        <div className="w-full flex justify-between items-center lg:pl-[1.15vw] pl-4">
                          {item.title && (
                            <p className=" text-[#333] text-[15px] leading-[22.5px]">
                              {item.title}
                            </p>
                          )}
                          {item?.distance && (
                            <p className=" text-[#333] text-[15px] leading-[22.5px]">
                              {item?.distance}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
