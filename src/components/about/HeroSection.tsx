"use client";
import React from "react";
import { images } from "../../../public/assets";
import Image from "next/image";
import { motion } from "motion/react"; // Corrected import

const HeroSection = () => {
  return (
    <section className="bg-white flex flex-col-reverse gap-6 lg:flex-row items-center lg:items-start lg:gap-12 px-8 lg:px-16 py-12 lg:h-screen">
      {/* Left Image */}
      <div className="w-full lg:w-2/5 relative">
        <motion.div
          className="left-content"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            width={undefined}
            height={undefined}
            src={images.pngs.aboutHero}
            alt="Hero Image"
            className="w-full h-auto object-cover"
          />
        </motion.div>

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
      <div className="w-full lg:w-3/5 lg:text-right">
        <motion.h1
          className="text-custom-20 lg:text-custom-32 text-primary font-bold mb-6"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          At Prepco, we’re not just in the business of healthcare—we’re in the
          business of simplifying it for you.
        </motion.h1>

        <motion.p
          className="text-custom-14 lg:text-custom-20-2 leading-relaxed mb-6"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Say goodbye to complex processes and hello to a smarter, easier way to
          stay healthy. Our mission? To empower individuals and families with
          personalized, comprehensive services that fit seamlessly into your
          life.
        </motion.p>

        <motion.p
          className="text-custom-14 lg:text-[20px] leading-relaxed"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          With a team of seasoned healthcare professionals and a sprinkle of
          innovation, we’re here to make preventive care feel less like a chore
          and more like a choice.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
