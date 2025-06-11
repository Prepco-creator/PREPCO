"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlanSecondSection, { PlanSecondSectionProps } from "../plan/PlanSecondSection";

gsap.registerPlugin(ScrollTrigger);

interface AboutCTAProps {
  title: string;
  description: string;
  data: PlanSecondSectionProps
}

const AboutCTA: React.FC<AboutCTAProps> = ({ title, description, data }) => {

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

  return (
    <section className="px-4 py-16 lg:px-16 flex flex-col gap-4 bg-accent-2 text-primaryDark">
      <h3 className="cta-text-h3 text-custom-20-bold lg:text-custom-32">{title}</h3>
      <p className="cta-text-p1 text-custom-14 lg:text-custom-20-2">{description}</p>
      <PlanSecondSection
        englishVideo={data.englishVideo}
        tamilVideo={data.tamilVideo}
        keyFeatures={data.keyFeatures}
        ctaBtn={data.ctaBtn}
        className="flex flex-col lg:flex-row gap-6 justify-between"
      />
    </section>
  );
};

export default AboutCTA;
