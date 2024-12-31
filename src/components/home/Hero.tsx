"use client"; // Add this directive at the top if you're using hooks

import React, { useState } from "react";
import MarqueeTags from "../comman/MarqueeTags";
import { videos } from "../../../public/assets";
import tags from "@/data/tags";

const Hero: React.FC = () => {
  // Track hover state for both buttons
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [clickedButton, setClickedButton] = useState<number | null>(null);

  const handleMouseEnter = (buttonIndex: number) =>
    setHoveredButton(buttonIndex);
  const handleMouseLeave = () => setHoveredButton(null);
  const handleClick = (buttonIndex: number) => {
    setClickedButton(buttonIndex);
    // Reset clicked state after a short delay
    setTimeout(() => setClickedButton(null), 200); // Adjust duration as needed
  };

  return (
    <section className="relative w-full h-screen">
      {/* Video background */}
      <video
        src={videos.hero}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        controls={false}
        preload="auto"
      >
        <source src={videos.hero} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative p-4 lg:p-16 z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Heading */}
        <h1 className="text-custom-24 font-semibold lg:text-custom-48 lg:font-bold mb-6 text-center text-gradient-animate">
          Have you ever had a healthcare plan, or are you living dangerously?
        </h1>

        {/* Buttons */}
        <div className="flex flex-col-reverse md:flex-row gap-4 w-[95%] lg:w-3/5">
          {/* First Button */}
          
          <button
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(1)}
            className={`px-6 py-3 text-custom-16 font-bold lg:font-semibold rounded-tr-[50px] rounded-bl-[50px] shadow-md transition-all duration-300 w-full lg:w-1/2 ${clickedButton === 1 ? "opacity-70" : ""
              } ${hoveredButton === 1
                ? "bg-primary text-white transform scale-105"
                : "bg-white text-primary"
              }`}
          >
            No, I like to keep things interesting.
          </button>

          {/* Second Button */}
          <button
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
            className={`px-6 py-3 text-custom-16 font-bold lg:font-semibold rounded-tl-[50px] rounded-br-[50px] shadow-double-inset transition-all duration-300 w-full lg:w-1/2 ${clickedButton === 2 ? "opacity-70" : ""
              } ${hoveredButton === 2
                ? "bg-white text-primary transform scale-105 shadow-none"
                : "bg-primary text-white"
              }`}
          >
            Yes, I would like to try.
          </button>
        </div>
      </div>

      {/* Marquee Tags Component */}
      <MarqueeTags
        tagClassName="glass-morph-effect gap-1 px-2"
        className="absolute bottom-10"
        tags={tags}
      />
    </section>
  );
};

export default Hero;
