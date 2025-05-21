import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const PopUp = ({ imageSrc, onClose, source }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const modalRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show modal after scroll
  useEffect(() => {
    if (hasScrolled) {
      setIsVisible(true);
    }
  }, [hasScrolled]);

  // Detect clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsVisible(false);
        if (onClose) onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 text-black">
        <div
          className="md:w-auto w-[300px] max-w-[500px] relative lg:h-[85vh] flex flex-col items-end justify-center"
          ref={modalRef}
        >
          <button
            onClick={onClose}
            className=" text-white hover:text-gray-700 top-0 right-0 z-[1] "
          >
            <div className=" ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>
          {/* <h2 className="text-2xl font-semibold mb-4">{heading}</h2> */}
          <div className="md:h-[80%] h-auto w-full">
            <Image
              src={imageSrc}
              alt="Pop-up"
              height={1000}
              width={1000}
              className="object-contain rounded-lg size-full"
              
            />
          </div>
        </div>
      </div>
    )
  );
};

export default PopUp;
