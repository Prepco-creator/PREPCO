"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const buttonClass = (isSelected: boolean) =>
    `px-6 py-3 font-medium text-sm shadow-lg border-[2px] border-teal-600 transition-all duration-300 transform ${isSelected
      ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white shadow-double-inset"
      : "bg-gray-200 text-primary"
    }`;

  return (
    <section className="px-8 py-16 lg:px-16 flex flex-col gap-4 bg-accent-2 text-primaryDark">
      <h3 className="cta-text-h3 text-custom-20-bold lg:text-custom-32">{title}</h3>
      <p className="cta-text-p1 text-custom-14 lg:text-custom-20-2">{description}</p>
      <div className="flex flex-row items-center justify-between">
        <button className="cta-button w-fit p-3 lg:py-3 lg:px-6 bg-custom-gradient shadow-double-inset text-white lg:font-semibold text-custom-16-bold lg:text-lg custom-border-radius">
          Book a consultation
        </button>

        <div className="flex">
          <button
            className={`${buttonClass(!isTamil)} rounded-l-3xl border-r-0`}
            onClick={() => setIsTamil(false)}
          >
            English
          </button>
          <button
            className={`${buttonClass(isTamil)} rounded-r-3xl border-l-0`}
            onClick={() => setIsTamil(true)}
          >
            தமிழ்
          </button>
        </div>
      </div>
      <video key={isTamil ? tamilVideo : englishVideo} className="cta-video inset-0 w-full h-full object-cover border-none rounded-3xl" autoPlay loop muted preload="auto">
        <source src={isTamil ? tamilVideo : englishVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default AboutCTA;
