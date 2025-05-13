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
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ease-in-out">
        <div
          ref={modalRef}
          className="relative bg-white p-4 rounded-lg mx-auto transition-all duration-500 ease-in-out transform"
        >
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => {
              setIsVisible(false);
              if (onClose) onClose();
            }}
          >
            X
          </button>

          <div className="relative lg:w-[20vw] lg:h-[70vh] w-[200px] h-[400px]">
            <Image
              src={imageSrc}
              alt="Pop-up"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default PopUp;
