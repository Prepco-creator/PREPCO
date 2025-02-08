"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ResponsiveYouTube from "../comman/ResponsiveYoutube";

gsap.registerPlugin(ScrollTrigger);

interface AboutCTAProps {
  title: string;
  description: string;
  tamilVideo: string;
  englishVideo: string;
}

const AboutCTA: React.FC<AboutCTAProps> = ({ title, description, tamilVideo, englishVideo }) => {
  const [isTamil, setIsTamil] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".cta-text-h3",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "easeOut",
        scrollTrigger: {
          trigger: ".cta-text-h3",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".cta-text-p1",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "easeOut",
        scrollTrigger: {
          trigger: ".cta-text-p1",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".cta-video",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "easeOut",
        scrollTrigger: {
          trigger: ".cta-video",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleLanguageSwitch = (language: boolean) => {
    setIsTamil(language);
  };

  return (
    <section className="px-8 py-16 lg:px-16 flex flex-col gap-4 bg-accent-2 text-primaryDark">
      <h3 className="cta-text-h3 text-custom-20-bold lg:text-custom-32">{title}</h3>
      <p className="cta-text-p1 text-custom-14 lg:text-custom-20-2">{description}</p>
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
        <a target='_blank' href="https://calendly.com/bdm-prepcohealthcare/30min">
          <button className="cta-button w-full md:w-fit p-3 lg:py-3 lg:px-6 bg-custom-gradient shadow-double-inset text-white lg:font-semibold text-custom-16-bold lg:text-lg custom-border-radius">
            Book a consultation
          </button>
        </a>
        <div className="flex w-full md:w-fit">
          <button
            className={`px-6 py-3 font-medium text-sm shadow-lg border-[2px] border-teal-600 transition-all duration-300 transform ${!isTamil ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white shadow-double-inset" : "bg-gray-200 text-primary"
              } rounded-l-3xl border-r-0 w-1/2 md:w-fit`}
            onClick={() => handleLanguageSwitch(false)}
          >
            English
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm shadow-lg border-[2px] border-teal-600 transition-all duration-300 transform ${isTamil ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white shadow-double-inset" : "bg-gray-200 text-primary"
              } rounded-r-3xl border-l-0 w-1/2 md:w-fit`}
            onClick={() => handleLanguageSwitch(true)}
          >
            தமிழ்
          </button>
        </div>
      </div>
      <div className="relative overflow-x-hidden">

        <ResponsiveYouTube
          videoURL={isTamil ? tamilVideo : englishVideo}
        />
      </div>
    </section>
  );
};

export default AboutCTA;
