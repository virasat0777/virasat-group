import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const PopUp = ({ imageSrc, onClose }) => {
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
      // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ease-in-out">
      //   <div
      //     ref={modalRef}
      //     className="  p-4 rounded-lg mx-auto transition-all duration-500 ease-in-out transform lg:w-[28vw]  w-full  "
      //   >
      //     <div className=" w-full  flex flex-col items-end ">
      //       <button
      //         className="  text-white hover:text-gray-700"
      //         onClick={() => {
      //           setIsVisible(false);
      //           if (onClose) onClose();
      //         }}
      //         aria-label="Close"
      //       >
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           className="h-5 w-5"
      //           fill="none"
      //           viewBox="0 0 24 24"
      //           stroke="currentColor"
      //           strokeWidth={2}
      //         >
      //           <path
      //             strokeLinecap="round"
      //             strokeLinejoin="round"
      //             d="M6 18L18 6M6 6l12 12"
      //           />
      //         </svg>
      //       </button>
      //       <Image
      //         src={imageSrc}
      //         alt="Pop-up"
      //         fill
      //         className="object-contain rounded-lg h-[85vh] w-full"
      //       />
      //     </div>
      //   </div>
      // </div>

      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 text-black">
        <div className="  w-[90%] max-w-[500px] relative lg:h-[85vh] flex flex-col items-end justify-center">
          <button onClick={onClose} className=" text-white hover:text-gray-700 top-0 right-0 z-[1] ">
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
          <div className=" w-full">
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
