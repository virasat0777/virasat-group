import Banner from "@/common/Banner";
import CareerListing from "@/components/Careers/careerListing";
import { fetchCareerData } from "@/redux/slices/careerSlice";
import { store } from "@/redux/store";
import { cleanImage } from "@/services/imageHandling";
import React from "react";

const Careers = ({ data }) => {
  return (
    <div>
      {data?.attributes?.banner && (
        <Banner
          src={cleanImage(
            data?.attributes?.banner?.desktopBanner?.data?.attributes?.url
          )}
          mobileSrc={cleanImage(
            data?.attributes?.banner?.mobileBanner?.data?.attributes?.url
          )}
          title={data?.attributes?.banner?.title}
        />
      )}
      {data?.attributes?.listingSection && (
        <CareerListing data={data?.attributes?.listingSection} />
      )}
    </div>
  );
};

export default Careers;

export async function getServerSideProps() {
  await store.dispatch(fetchCareerData());
  const career = store?.getState()?.career?.data?.data;
  return {
    props: {
      data: career,
    },
  };
}
