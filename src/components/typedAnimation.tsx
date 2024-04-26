// Import the necessary modules
"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 

// Define the TypeAnimationComponent
const typedAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Software Engineer',
        1000,
        'Full Stack Developer',
        1000,
        'ML/AI Enthusiast',
        1000,
        'Problem Solver',
        1000,
        'Full-Time Learner',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

// Export the TypeAnimationComponent
export default typedAnimation;
