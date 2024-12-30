"use client"; // Add this directive at the top if you're using hooks

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../../../public/assets";
import { CardProps } from "@/types";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

const WhyChoosePrepco = () => {
  const features: CardProps[] = [
    {
      title: "Expert Guidance",
      content:
        "Real pros, real solutions—delivered by healthcare experts who know their stuff.",
      icon: images.gifs.threeGuys,
    },
    {
      title: "Holistic Approach",
      content:
        "We’re not just about check-ups—we’re about tune-ups for your whole well-being.",
      icon: images.gifs.twoGuys,
    },
    {
      title: "Innovative Care",
      content:
        "Cutting-edge tools and evidence-based practices that keep you ahead of the curve.",
      icon: images.gifs.innovationBulb,
    },
    {
      title: "Tailored Solutions",
      content:
        "Your health, your way. Plans designed just for you because one-size-fits-all doesn’t work in healthcare.",
      icon: images.gifs.tabletGuy,
    },
  ];

  useEffect(() => {
    // GSAP Fade-in effect with ScrollTrigger
    gsap.from(".card", {
      opacity: 0,
      y: 10,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2, // Adds stagger effect between cards
      scrollTrigger: {
        trigger: ".card", // Trigger the animation when the card is in view
        start: "top bottom", // When the top of the card reaches the bottom of the viewport
        end: "bottom top",
        scrub: true,
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="px-8 py-16 lg:px-16">
      <header className="mb-6">
        <h3 className="text-center text-custom-40 bg-custom-gradient bg-clip-text text-transparent">
          Why Choose Prepco?
        </h3>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature: CardProps, index: number) => (
          <Card
            key={index}
            title={feature.title}
            icon={feature.icon}
            content={feature.content}
            className="card4" // Add 'card' class here
          />
        ))}
      </section>
    </section>
  );
};

export default WhyChoosePrepco;
