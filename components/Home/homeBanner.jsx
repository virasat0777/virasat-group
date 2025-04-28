import Banner from "@/common/Banner";
import { cleanImage } from "@/services/imageHandling";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const HomeBanner = ({ data }) => {
  let theString =
    data?.animationText || "ULTRA LUXURIOUS HOME DESIGN FOR YOUR FAMILY";
  let bannerImage =
    cleanImage(data?.desktopBanner?.data?.attributes?.url) ||
    "/images/home/homeBanner.png";
  const firstWord = useRef(null);
  const secondWord = useRef(null);
  const thirdWord = useRef(null);
  const fourthWord = useRef(null);
  const fifthWord = useRef(null);
  const sixthWord = useRef(null);
  const sevenWord = useRef(null);
  const patternRef = useRef(null);
  const bannerRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      firstWord.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, delay: 0.18 }
    )
      .fromTo(
        secondWord.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, delay: 0.18 }
      )
      .fromTo(
        thirdWord.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, delay: 0.18 }
      )
      .fromTo(
        fourthWord.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, delay: 0.18 }
      )
      .fromTo(
        fifthWord.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, delay: 0.18 }
      )
      .fromTo(
        sixthWord.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, delay: 0.18 }
      )
      .fromTo(
        sevenWord.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, delay: 0.18 }
      );

    tl.fromTo(
      firstWord.current,
      { x: -200, y: -100 },
      { x: 0, y: 0, duration: 1 }
    )
      .fromTo(
        secondWord.current,
        { x: 0, y: -100 },
        { x: 0, y: 0, duration: 1 },
        "<"
      )
      .fromTo(
        thirdWord.current,
        { x: 300, y: -100 },
        { x: 0, y: 0, duration: 1 },
        "<"
      )
      .fromTo(
        fourthWord.current,
        { x: -200, y: 100 },
        { x: 0, y: 0, duration: 1 },
        "<"
      )
      .fromTo(
        fifthWord.current,
        { x: -30, y: 100 },
        { x: 0, y: 0, duration: 1 },
        "<"
      )
      .fromTo(
        sixthWord.current,
        { x: 30, y: 100 },
        { x: 0, y: 0, duration: 1 },
        "<"
      )
      .fromTo(
        sevenWord.current,
        { x: 70, y: 100 },
        { x: 0, y: 0, duration: 1 },
        "<"
      );

    tl.fromTo(
      patternRef.current,
      { opacity: 0 },
      { opacity: 0.1, duration: 0.3 }
    );
    tl.fromTo(
      bannerRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    tl.fromTo(
      bannerRef.current,
      {
        height: "120px",
        width: "120px",
        borderTopLeftRadius: "50%",
        borderTopRightRadius: "50%",
        objectFit: "cover",
        y: 60,
      },
      {
        y: 0,
        height: "100%",
        width: "100%",
        duration: 1,
        ease: "power2.out",
      }
    ).to(
      bannerRef.current,
      {
        borderTopLeftRadius: "0%",
        borderTopRightRadius: "0%",
        duration: 2, // slower borderRadius animation
        ease: "power2.out",
      },
      "<" // run at the same time as previous, or adjust timing here
    );
    // tl.fromTo(
    //   bannerRef.current,
    //   {
    //     opacity: 1,
    //     scale: 0.1,
    //     height: "60px",
    //     width: "60px",
    //     borderTopLeftRadius: "50%",
    //     borderTopRightRadius: "50%",
    //     y: 0,
    //   },
    //   {
    //     opacity: 1,
    //     scale: 1,
    //     duration: 1,
    //     borderTopLeftRadius: 0,
    //     borderTopRightRadius: 0,
    //     height: "100%",
    //     width: "100%",
    //     ease: "power2.out",
    //   }
    // );
    // tl.to(
    //   bannerRef.current,

    //   {
    //     borderTopLeftRadius: 0,
    //     borderTopRightRadius: 0,
    //     ease: "power2.out",
    //   }
    // );
  }, []);
  console.log(data?.desktopBanner?.data?.attributes?.url, "banner data");
  return (
    <div className="bg-black w-screen h-screen relative flex justify-center items-end overflow-hidden">
      <div className="flex justify-center items-center lg:gap-[2vw] gap-4 h-full flex-col ">
        <div className="flex justify-center lg:gap-[2vw] gap-4 items-center">
          <span
            ref={firstWord}
            className="text-white kenoky lg:text-[4.167vw] text-base lg:leading-[4.4vw] leading-6"
          >
            {theString.split(" ")[0]}
          </span>
          <span
            ref={secondWord}
            className="text-white kenoky lg:text-[4.167vw] text-base lg:leading-[4.4vw] leading-6"
          >
            {theString.split(" ")[1]}
          </span>
          <span
            ref={thirdWord}
            className="text-white  kenoky lg:text-[4.167vw] text-base lg:leading-[4.4vw] leading-6"
          >
            {theString.split(" ")[2]}
          </span>
        </div>
        <div className="flex justify-center gap-4 lg:gap-[4vw] ">
          <span
            ref={fourthWord}
            className="text-white kenoky lg:text-[4.167vw] text-base lg:leading-[4.4vw] leading-6"
          >
            {theString.split(" ")[3]}
          </span>
          <span
            ref={fifthWord}
            className="text-white kenoky lg:text-[4.167vw] text-base lg:leading-[4.4vw] leading-6"
          >
            {theString.split(" ")[4]}
          </span>
          <span
            ref={sixthWord}
            className="text-white kenoky lg:text-[4.167vw] text-base lg:leading-[4.4vw] leading-6"
          >
            {theString.split(" ")[5]}
          </span>
          <span
            ref={sevenWord}
            className="text-white kenoky lg:text-[4.167vw] text-base lg:leading-[4.4vw] leading-6"
          >
            {theString.split(" ")[6]}
          </span>
        </div>
      </div>

      <div>
        <div ref={patternRef} className="absolute inset-0 z-[5] opacity-[10%]">
          <Image
            src={`/images/home/gray-pattern.svg`}
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className=" absolute bottom-0  z-[6] overflow-hidden size-full"
        ref={bannerRef}
      >
        <Banner
          src={cleanImage(data?.desktopBanner?.data?.attributes?.url)}
          mobileSrc={cleanImage(data?.mobileBanner?.data?.attributes?.url)}
        />
        {/* <Image
          src={bannerImage}
          alt="banner-mobile"
          fill
          className="object-cover size-full"
          priority
        /> */}
      </div>
    </div>
  );
};

export default HomeBanner;
