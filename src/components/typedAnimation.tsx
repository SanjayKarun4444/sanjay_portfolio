"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => (
  <TypeAnimation
    sequence={[
      "Software Engineer",      1200,
      "Full Stack Developer",   1200,
      "ML / AI Enthusiast",     1200,
      "Problem Solver",         1200,
      "Full-Time Learner",      1200,
    ]}
    wrapper="span"
    speed={55}
    deletionSpeed={70}
    style={{
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",   /* 1rem — matches body, not 2em */
      color: "var(--color-text-2)",
      display: "inline-block",
    }}
    repeat={Infinity}
  />
);

export default TypingAnimation;
