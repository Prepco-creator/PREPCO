"use client";
import React, { useEffect } from "react";
import { videos } from "../../../public/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
  useEffect(() => {
    // Animate h3 and p from the left
    gsap.fromTo(
      ".cta-text-h3",
      {
        opacity: 0,
        x: -100, // Start from left
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "easeOut",
        scrollTrigger: {
          trigger: ".cta-text-h3",
          start: "top 100%", // Trigger when it's 80% from the top
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".cta-text-p1",
      {
        opacity: 0,
        x: -100, // Start from left
      },
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

    // Animate video from the right
    gsap.fromTo(
      ".cta-video",
      {
        opacity: 0,
        x: 100, // Start from right
      },
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

    // Animate h5 and p from the left
    gsap.fromTo(
      ".cta-text-h5",
      {
        opacity: 0,
        x: -100, // Start from left
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "easeOut",
        scrollTrigger: {
          trigger: ".cta-text-h5",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".cta-text-p2",
      {
        opacity: 0,
        x: -100, // Start from left
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "easeOut",
        scrollTrigger: {
          trigger: ".cta-text-p2",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="px-8 py-16 lg:px-16 flex flex-col gap-4 bg-accent-2 text-primaryDark">
      <h3 className="cta-text-h3 cta-text text-custom-20-bold lg:text-custom-32">
        At Prepco, we get it—life is busy, and health can feel like an
        afterthought. That’s where we come in.
      </h3>
      <p className="cta-text-p1 cta-text text-custom-14 lg:text-custom-20-2">
        From fitness guides that keep you moving to wellness plans that work for
        you, Prepco is your partner in living your healthiest, happiest life.
      </p>
      <button className="cta-button w-full p-3 lg:py-3 lg:px-6 bg-custom-gradient shadow-double-inset text-white lg:font-semibold text-custom-16-bold lg:text-lg custom-border-radius">
        Book a consultation
      </button>
      <video
        src={videos.hero}
        className="cta-video inset-0 w-full h-full object-cover border-none rounded-3xl"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src={videos.hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="space-x-2 text-center px-2 lg:px-16">
        <h5 className="cta-text-h5 cta-text text-custom-20-bold lg:text-custom-32">
          so why wait
        </h5>
        <p className="cta-text-p2 cta-text text-custom-14 lg:text-custom-20">
          Let Prepco show you how easy taking care of yourself can really be.
          Because your health deserves the best—and so do you.
        </p>
      </div>
    </section>
  );
};

export default AboutCTA;
