import Banner from "@/common/Banner";
import Bank from "@/components/About/bank";
import LoanPartners from "@/components/About/loanPartners";
import Management from "@/components/About/management";
import Overview from "@/components/About/overview";
import VisionMission from "@/components/About/visionMission";
import { fetchAboutData } from "@/redux/slices/aboutSlice";
import { store } from "@/redux/store";
import { cleanImage } from "@/services/imageHandling";
import React from "react";

const About = ({ data }) => {
  return (
    <div>
      {data?.banner && (
        <Banner
          src={cleanImage(data?.banner?.desktopBanner?.data?.attributes?.url)}
          mobileSrc={cleanImage(
            data?.banner?.mobileBanner?.data?.attributes?.url
          )}
          title={data?.banner?.title}
        />
      )}
      {data?.overview && <Overview data={data?.overview} />}
      {data?.management && <Management data={data?.management} />}
      {data?.visionMission && <VisionMission data={data?.visionMission} />}
      {data?.loanPartners && <LoanPartners data={data?.loanPartners} />}
      {data?.bankCollabs && <Bank data={data?.bankCollabs} />}
    </div>
  );
};

export default About;

export async function getServerSideProps() {
  await store.dispatch(fetchAboutData());
  const about = store.getState()?.about?.data?.attributes;

  return {
    props: {
      data: about,
    },
  };
}
