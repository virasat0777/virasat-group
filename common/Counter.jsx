import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";

const Counter = ({ start, end, suffix, prefix }) => {
  const [count, setCount] = useState(end); // Set initial count to 'end'

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger once when in view
  });

  // Set the count statically once the component is in view
  useEffect(() => {
    if (inView) {
      setCount(end); // Just set the end value when the section is in view
    }
  }, [inView, end]);

  return (
    <span ref={ref}>
      <div className="flex heading-sm text-white font-bold">
        <h4 className="lg:text-[4.167vw] uppercase lg:leading-[5.208vw] text-2xl font-light">
          {count}
        </h4>
        &nbsp;&nbsp;
        <div className="lg:text-[4.167vw] uppercase lg:leading-[5.208vw] text-xl font-light text-center">
          {suffix}
        </div>
      </div>
    </span>
  );
};

export default Counter;
