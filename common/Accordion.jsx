import Image from "next/image";
import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const locations = [
    {
      title: "Connectivity",
      places: [
        { name: "Lower Parel Business District", distance: "2.6 Km" },
        { name: "Nariman Point", distance: "7.9 Km" },
        { name: "Bandra Kurla Complex (BKC)", distance: "12.5 Km" },
        { name: "Ballard Estate", distance: "5.9 Km" },
      ],
    },
    {
      title: "Schools",
      places: [
        { name: "School A", distance: "1.2 Km" },
        { name: "School B", distance: "4.3 Km" },
        { name: "School C", distance: "6.5 Km" },
      ],
    },
    {
      title: "Colleges",
      places: [
        { name: "College A", distance: "3.6 Km" },
        { name: "College B", distance: "9.4 Km" },
        { name: "College C", distance: "7.2 Km" },
      ],
    },
    {
      title: "Hotels",
      places: [
        { name: "Hotel A", distance: "5.1 Km" },
        { name: "Hotel B", distance: "8.7 Km" },
        { name: "Hotel C", distance: "10.2 Km" },
      ],
    },
    {
      title: "Hospitals",
      places: [
        { name: "Hospital A", distance: "2.0 Km" },
        { name: "Hospital B", distance: "5.3 Km" },
        { name: "Hospital C", distance: "6.8 Km" },
      ],
    },
  ];
  return (
    <div>
      <div className=" flex flex-col-reverse md:flex-row gap-5 md:gap-5 justify-between items-center w-full lg:w-[25.938vw]">
        <ul className="w-full">
          {locations.map((items, index) => (
            <div key={index} className="">
              <div
                className="flex mt-8 item-start cursor-pointer justify-between items-center relative bg-black lg:py-[0.8vw] py-3 rounded-tr-xl transition-all duration-500"
                onClick={() => handleToggle(index)}
              >
                <p className="text-[18px] lg:pl-[1.15vw] pl-4 text-white">
                  {items.title}
                </p>
                <div className="lg:-mr-[1.3vw] -mr-[20px] transition-transform duration-300 lg:h-[2.604vw] lg:w-[2.604vw] w-[50px] h-[50px] ease-in-out">
                  <Image
                    height={50}
                    width={50}
                    className={`w-full h-full transform transition-transform duration-300 ease-in-out ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    src="/icon/up-arrow.svg"
                    alt="arrow"
                  />
                </div>
              </div>

              {/* Animated Accordion Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-[1000px] opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-1"
                }`}
              >
                {items.places.map((item, i) => (
                  <div key={i} className="flex justify-start my-4">
                    <div className="flex justify-center md:gap-5 items-start md:items-center w-full">
                      <div className="w-full flex justify-between items-center lg:pl-[1.15vw] pl-4">
                        <p className=" text-[#333] text-[15px] leading-[22.5px]">
                          {item.name}
                        </p>
                        <p className=" text-[#333] text-[15px] leading-[22.5px]">
                          {item?.distance}
                        </p>
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
