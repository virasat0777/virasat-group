import Accordion from "@/common/Accordion";
import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";

const LocationAdvantage = ({ data, maplink, title }) => {
  console.log(data, "data");
  return (
    <div className="flex lg:flex-row flex-col items-center w-full py-4 relative">
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-[50vw] w-full lg:pl-[10.417vw] pl-8 lg:pr-0 pr-12 lg:py-[4.167vw] py-4">
        {title && (
          <div className="lg:w-[37.552vw] w-full">
            <SectionTitle title={title} />
          </div>
        )}
        <Accordion data={data} />
      </div>
      <div className="lg:w-[50vw] w-full lg:px-0 px-4 lg:h-[42.656vw] h-[50vh]">
        {maplink && (
          <div className="w-full h-full">
            <iframe
              src={maplink}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationAdvantage;
