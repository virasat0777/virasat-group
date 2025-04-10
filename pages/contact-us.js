import Banner from "@/common/Banner";
import GetInTouch from "@/components/Contact/getInTouch";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <Banner
        src="/images/contact-us/contact-us-banner.png"
        mobileSrc="/images/contact-us/contact-us-banner.png"
        title="Contact us"
      />
      <GetInTouch />

      <div className="w-screen lg:h-[43.333vw]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.909919715179!2d80.98831847543704!3d26.842817276688976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2d4f57f60ef%3A0x177a41a32fc8d165!2sDayal%20Paradise!5e0!3m2!1sen!2sin!4v1744287372850!5m2!1sen!2sin"
          // width="800"
          // height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
