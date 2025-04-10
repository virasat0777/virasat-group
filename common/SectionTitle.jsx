import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionTitle({ title }) {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: "20%",
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.h4
      ref={ref}
      aria-label={title}
      role="heading"
      className="text-2xl font-light uppercase lg:text-[4.167vw] lg:leading-[5.208vw]"
    >
      {title.split(" ").map((word, wordIndex) => {
        const wordWithSpace =
          wordIndex < title.split(" ").length - 1 ? word + " " : word;
        return (
          <motion.span
            key={wordIndex}
            className="inline-block whitespace-nowrap mr-[0.25em]"
            initial="hidden"
            animate={controls}
            variants={wordAnimation}
            transition={{
              delayChildren: wordIndex * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {wordWithSpace.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={characterAnimation}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        );
      })}
    </motion.h4>
  );
}

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export function AnimatedTitle({ title }) {
  const text = title;

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <Title aria-label={text} role="heading">
      {text.split(" ").map((word, index) => {
        const wordWithSpace =
          index < text.split(" ").length - 1 ? word + " " : word;
        return (
          <Word
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {wordWithSpace.split("").map((character, charIndex) => (
              <Character
                aria-hidden="true"
                key={charIndex}
                variants={characterAnimation}
              >
                {character}
              </Character>
            ))}
          </Word>
        );
      })}
    </Title>
  );
}
