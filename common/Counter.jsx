import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";

const Counter = ({ start, end, duration, suffix }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        if (elapsed < duration) {
          const progress = elapsed / duration;
          setCount(Math.floor(start + (end - start) * progress));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, start, end, duration]);

  return (
    <span ref={ref}>
      {inView ? (
        <h6 className=" flex heading-sm text-white font-bold">
          <h4 className="lg:text-[4.167vw] uppercase lg:leading-[5.208vw] text-2xl font-light ">
            {count}
          </h4>
          &nbsp;&nbsp;
          <h4 className="lg:text-[4.167vw] uppercase lg:leading-[5.208vw] text-xl font-light text-center ">
            {suffix}
          </h4>
        </h6>
      ) : (
        <>0</>
      )}
    </span>
  );
};

export default Counter;
