"use client";

import React, { useState, useEffect } from "react";

const HeartRate = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Prevent scrolling when the loader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Allow scrolling once loader is complete
      document.body.style.overflow = "auto";
    }, 3000); // Loader duration: 3 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled on cleanup
    };
  }, []);

  return (
    <>
      <section
        className={`bg-primary text-gray-500 font-sans min-h-screen flex flex-col justify-center items-center${
          isLoaded ? " loaded" : ""
        }`}
      >
        <div className="relative w-[150px] h-[73px] heart-rate">
          {/* SVG Heart Rate */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 73"
            width="150px"
            height="73px"
            className="absolute"
          >
            <polyline
              points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
              stroke="#fff"
              strokeWidth="3"
              fill="none"
              strokeMiterlimit="10"
            ></polyline>
          </svg>
          {/* Optional: Add fade-in/out animations */}
          <div className="fade-in"></div>
          <div className="fade-out"></div>
        </div>
        <div className="text-white text-xl font-semibold opacity-1 animate-fade-in-scale">
          The Right Choice for Real Peace of Mind
        </div>
      </section>
    </>
  );
};

export default HeartRate;
