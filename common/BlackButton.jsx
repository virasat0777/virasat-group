import { useRouter } from "next/router";
import React from "react";

const BlackButton = ({
  name = "View All",
  path = "#",
  useLink = true,
  handleFunction = null,
  color = "#000000", // default black, can be passed as prop
  hoverColor = "#C29B5C", // optional: gold
  textColor = "#ffffff", // default text color
  hoverTextColor = "#000000", // default hover text color
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (handleFunction) {
      handleFunction();
    } else {
      router.push(path);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative inline-flex items-center justify-center cursor-pointer group w-[12rem] lg:w-[14.531vw] lg:h-[2.917vw] my-5 transition-transform duration-300 ease-in-out hover:scale-105"
    >
      {/* Animated SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="56"
        viewBox="0 0 279 56"
        className="absolute z-0 transition-all duration-500 ease-in-out"
      >
        <path
          d="M139.492 56C137.181 53.5614 132.153 51.9609 126.61 51.9609H37.0907C33.5437 51.9609 30.227 51.289 27.7319 50.0621C25.2213 48.8278 23.8394 47.1895 23.8394 45.4493V45.1926H23.3173C16.0007 45.1926 10.0507 42.2671 10.0507 38.6621V34.6305C10.0507 34.1172 9.93557 33.6226 9.71292 33.1583C8.66879 30.7424 5.15253 28.8022 0.5 28.0057C5.14485 27.1941 8.67647 25.2462 9.71292 22.8379C9.93557 22.3736 10.0507 21.8753 10.0507 21.3657V17.3341C10.0507 13.7367 16.0007 10.8036 23.3173 10.8036H23.8394V10.5507C23.8394 8.80674 25.2137 7.16845 27.7319 5.93407C30.2117 4.6997 33.5283 4.02022 37.0907 4.02022H126.617C132.16 4.02022 137.174 2.42723 139.5 0C141.811 2.43101 146.847 4.02022 152.413 4.02022H241.909C245.441 4.02022 248.773 4.69592 251.291 5.93407C253.802 7.16845 255.191 8.80674 255.191 10.5507V10.8036H255.706C263.022 10.8036 268.988 13.7329 268.988 17.3341V21.3657C268.988 21.8715 269.103 22.3736 269.31 22.853C270.362 25.2576 273.871 27.1941 278.5 28.0057C273.863 28.8022 270.354 30.7387 269.31 33.1432C269.103 33.6302 268.988 34.1323 268.988 34.6305V38.6621C268.988 42.2671 263.03 45.1926 255.706 45.1926H255.191V45.4493C255.191 47.1857 253.802 48.824 251.291 50.0621C248.765 51.289 245.433 51.9609 241.909 51.9609H152.413C146.855 51.9609 141.819 53.5577 139.5 56"
          style={{
            transition: "fill 0.4s ease-in-out",
            fill: color,
          }}
          className="group-hover:fill-[var(--hover-fill)]"
        />
      </svg>

      {/* Button Text */}
      <span
        className="relative z-10 font-semibold transition-colors duration-300 lg:text-[1.042vw] md:text-base text-xs"
        style={{
          color: textColor,
          transition: "color 0.4s ease-in-out",
        }}
      >
        {name}
      </span>

      {/* Hover text color using pseudo-element */}
      <style jsx>{`
        .group:hover span {
          color: ${hoverTextColor} !important;
        }
        .group:hover path {
          fill: ${hoverColor} !important;
        }
      `}</style>
    </div>
  );
};

export default BlackButton;
