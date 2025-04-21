import Banner from "@/common/Banner";
import GetInTouch from "@/components/Contact/getInTouch";
import { fetchContactData } from "@/redux/slices/contactSlice";
import { store } from "@/redux/store";
import { cleanImage } from "@/services/imageHandling";
import React from "react";

const ContactUs = ({ data }) => {
  console.log(data, "contact data");
  return (
    <div>
      {data?.banner && (
        <Banner
          src={cleanImage(data?.banner?.desktopBanner?.data?.attributes?.url)}
          mobileSrc={cleanImage(
            data?.banner?.mobileBanner?.data?.attributes?.url
          )}
          title="Contact us"
        />
      )}
      {data?.getInTouch && data?.officeLocation && (
        <GetInTouch data={data?.getInTouch} office={data?.officeLocation} />
      )}
      <div className="w-screen lg:h-[43.333vw] h-[50vh]">
        <iframe
          src={data?.officeLocation?.mapLink}
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

export async function getServerSideProps() {
  await store.dispatch(fetchContactData());
  const contact = store?.getState()?.contact?.data?.data?.attributes;
  return {
    props: {
      data: contact,
    },
  };
}
