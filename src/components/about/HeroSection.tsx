"use client";
import React, { useEffect } from "react";
import { images } from "../../../public/assets";
import Image from "next/image";
import gsap from "gsap";

const HeroSection = () => {
  useEffect(() => {
    // Ensure animations only run on the client side (after mounting)
    if (typeof window !== "undefined") {
      // Left content animation (slide from left)
      gsap.fromTo(
        ".left-content",
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Right content animation (slide from right)
      gsap.fromTo(
        ".right-content",
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section className="bg-white flex flex-col-reverse gap-6 lg:flex-row items-center lg:items-start lg:gap-12 px-8 lg:px-16 py-12 lg:h-screen">
      {/* Left Image */}
      <div className="w-full lg:w-2/5 relative left-content">
        <Image
          width={undefined}
          height={undefined}
          src={images.pngs.aboutHero}
          alt="Hero Image"
          className="w-full h-auto object-cover"
        />

        <div className="absolute top-0 right-40 lg:top-20 lg:right-52 bg-white rounded-full shadow-md">
          <Image
            src={images.gifs.yogaUpDown}
            width={65}
            height={65}
            alt="yoga-gif"
            unoptimized
          />
        </div>
        <div className="absolute right-0 bottom-24 lg:bottom-0 lg:right-10 bg-white rounded-full shadow-md">
          <Image
            src={images.gifs.runningWoman}
            width={65}
            height={65}
            alt="yoga-gif"
            unoptimized
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-3/5 lg:text-right right-content">
        <h1 className="text-custom-20 lg:text-custom-32 text-primary font-bold mb-6">
          At Prepco, we’re not just in the business of healthcare—we’re in the
          business of simplifying it for you.
        </h1>
        <p className="text-custom-14 lg:text-custom-20-2 leading-relaxed mb-6">
          Say goodbye to complex processes and hello to a smarter, easier way to
          stay healthy. Our mission? To empower individuals and families with
          personalized, comprehensive services that fit seamlessly into your
          life.
        </p>
        <p className="text-custom-14 lg:text-[20px] leading-relaxed">
          With a team of seasoned healthcare professionals and a sprinkle of
          innovation, we’re here to make preventive care feel less like a chore
          and more like a choice.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
