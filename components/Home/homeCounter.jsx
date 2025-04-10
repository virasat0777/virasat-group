import Counter from "@/common/Counter";
import React from "react";

const CounterSection = () => {
  const list = [
    {
      num: 10,
      suffix: "Years",
      desc: "Ongoing projects",
    },
    {
      num: 2000,
      desc: "Happy families",
    },
    {
      num: 5,
      suffix: "+",
      desc: "Sq. Ft. Recreational spaces",
    },
    {
      num: 20,
      suffix: "+",
      desc: "years of building trust",
    },
  ];
  return (
    <div
      className="bg-no-repeat bg-cover bg-center md:h-[18.333vw] w-full"
      style={{
        backgroundImage: `url(/images/home/counterFrame.png)`,
      }}
    >
      <div className="  mx-auto lg:py-[3.333vw] lg:px-[12.942vw] h-full flex flex-col md:flex-row items-center justify-between lg:gap-20 gap-10 py-8 md:items-center">
        {list.map((item, index) => (
          <div
            className="  text-white flex flex-col justify-center items-center"
            key={index}
          >
            <Counter
              start={0}
              end={item?.num}
              duration={2500}
              suffix={item?.suffix}
            />

            <p className=" para font-medium">{item?.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
