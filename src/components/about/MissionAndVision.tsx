"use client";
import React from "react";
import { images } from "../../../public/assets";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all"; // Import ScrollTrigger
import Card from "./Card";

// Register ScrollTrigger plugin with GSAP
// gsap.registerPlugin(ScrollTrigger);

const MissionAndVision = () => {
  // useEffect(() => {
  //   // GSAP Fade-in effect with ScrollTrigger
  //   gsap.from(".card-vision", {
  //     opacity: 0, // Start as invisible
  //     scale: 0.8, // Start from smaller size
  //     duration: 1.5, // Duration of the animation
  //     ease: "power3.out", // Smooth easing
  //     stagger: 0.3, // Stagger each card slightly for sequential animation
  //     scrollTrigger: {
  //       trigger: ".card-vision", // Target the section containing the cards
  //       start: "top 10%", // Trigger when the card's top is 80% from the top of the viewport
  //       scrub: true, // Allow for smooth scrubbing effect
  //     },
  //   });
  // }, []);

  return (
    <section className="bg-accent-3 gap-8 p-4 flex flex-col lg:flex-row px-8 lg:px-16 py-12">
      <Card
        title="Our Vision"
        icon={images.gifs.bulb}
        content="To create a world where wellness isn’t a luxury but a lifestyle. At Prepco, we’re rethinking healthcare by making it proactive, practical, and accessible for everyone."
        className="flex-1 card-vision" // Add 'card' class here
        hClassName="text-custom-20 lg:text-custom-40"
      />
      <Card
        title="Our Mission"
        icon={images.gifs.hollowCircles}
        content="To keep you a step ahead—whether it’s through personalized care, innovative solutions, or a little nudge toward better health. Prevention isn’t just smart; it’s life-changing, and we’re here to make it happen."
        className="flex-1 card-vision" // Add 'card' class here
        hClassName="text-custom-20 lg:text-custom-40"
      />
    </section>
  );
};

export default MissionAndVision;
