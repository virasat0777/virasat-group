import Accordion from "@/common/Accordion";
import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";

const LocationAdvantage = () => {
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
        <div className="lg:w-[37.552vw] w-full">
          <SectionTitle title="Location Advantage" />
        </div>
        <Accordion />
      </div>
      <div className="lg:w-[50vw] w-full lg:px-0 px-4 lg:h-[42.656vw] h-[50vh]">
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28480.07442473881!2d80.98247338444935!3d26.839656408178744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2d4b6c0b1c1%3A0xacbd42a864e78f5e!2sVirasat%20Group!5e0!3m2!1sen!2sin!4v1744094880784!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationAdvantage;
