import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { TbExclamationMark } from "react-icons/tb";

const ThankYou = () => {
  const navigate = useRouter();
  const [hashValue, setHashValue] = useState("");
  const [countdown, setCountdown] = useState(10);

  const handleBack = () => {
    navigate.back();
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setHashValue(hash); // includes '#'
    
    }

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(countdownInterval);
          handleBack();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [hashValue]);

  return (
    <div className="min-h-screen bg-Dark xl:px-40 px-5 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-[3rem] Americana font-bold mb-4 text-primary-color flex items-center gap-2">
        THANK YOU <TbExclamationMark />
      </h1>
      <p className="text-[1.5rem] mb-6 Avenir text-black">
        Thank you for reaching out to us! We've received your message and will
        get back to you at the earliest. Your enquiry is important to us, and we
        appreciate your patience.
        <br />
        <br />
        You will be redirected to the previous page in{" "}
        <span className="font-bold">{countdown}</span> seconds.
      </p>
    </div>
  );
};

export default ThankYou;
