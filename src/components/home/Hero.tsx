"use client"; // Add this directive at the top if you're using hooks

import React, { useState } from "react";
import MarqueeTags from "../comman/MarqueeTags";
import { images } from "../../../public/assets";
import tags from "@/data/tags";
import Link from "next/link";
import Image from "next/image";

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
      <Image
        src={images.webp.homeHero}
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="eager"
        width={600}
        height={400}
      />
      {/* <video
        src={videos.hero}
        className="absolute inset-0 w-full h-full object-cover object-left"
        autoPlay
        loop
        muted
        controls={false}
        preload="auto"
      >
        <source src={videos.hero} type="video/webm" />
        Your browser does not support the video tag.
      </video> */}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative p-4 lg:p-16 z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Heading */}
        <h1 className="text-custom-24 font-semibold lg:text-custom-48 lg:font-bold mb-6 text-center text-gradient-animate">
          Did you know taking care of your health doesn’t have to break the
          bank?&quot;
        </h1>

        {/* Buttons */}
        <div className="flex flex-col-reverse md:flex-row gap-4 w-[95%] lg:w-2/3 min-[1440px]:w-3/5">
          {/* First Button */}
          <Link href={"/plans"} passHref className="w-full lg:w-1/2">
            <button
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(1)}
              className={`px-6 py-3 text-custom-16 font-bold lg:font-semibold rounded-tr-[50px] rounded-bl-[50px] transition-all duration-300 w-full ${clickedButton === 1 ? "opacity-70" : ""
                } ${hoveredButton === 1
                  ? "shadow-double-inset bg-primary text-white transform scale-105"
                  : "bg-white text-primary"
                }`}
            >
              Tell me how it can save me money
            </button>
          </Link>

          {/* Second Button */}
          <Link href={"/plans"} passHref className="w-full lg:w-1/2">
            <button
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(2)}
              className={`px-6 py-3 text-custom-16 font-bold lg:font-semibold rounded-tl-[50px] rounded-br-[50px] shadow-double-inset transition-all duration-300 w-full ${clickedButton === 2 ? "opacity-70" : ""
                } ${hoveredButton === 2
                  ? "bg-white text-primary transform scale-105 shadow-none"
                  : "bg-primary text-white"
                }`}
            >
              I’m ready for affordable health solutions
            </button>
          </Link>
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
