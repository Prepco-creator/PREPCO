import React from "react";
import { images } from "../../../public/assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-accent-2 flex flex-col-reverse gap-6 lg:flex-row items-center lg:items-start lg:gap-12 px-8 lg:px-16 py-12 lg:h-screen">
      {/* Left Image */}
      <div className="w-full lg:w-2/5 relative">
        <Image
          width={undefined}
          height={undefined}
          src={images.pngs.aboutHero}
          alt="Hero Image"
          className="w-full h-auto object-cover"
        />

        <div className="absolute top-20 right-52 bg-white rounded-full">
          <Image
            src={images.gifs.yogaUpDown}
            width={65}
            height={65}
            alt="yoga-gif"
            unoptimized
          />
        </div>
        <div className="absolute bottom-0 right-10 bg-white rounded-full">
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
        <h1 className="text-4xl lg:text-[32px] font-bold mb-6">
          At Prepco, we’re not just in the business of healthcare—we’re in the business of simplifying it for you.
        </h1>
        <p className="text-lg lg:text-[20px] leading-relaxed mb-6">
          Say goodbye to complex processes and hello to a smarter, easier way to stay healthy. Our mission? To empower individuals and families with personalized, comprehensive services that fit seamlessly into your life.
        </p>
        <p className="text-lg lg:text-[20px] leading-relaxed">
          With a team of seasoned healthcare professionals and a sprinkle of innovation, we’re here to make preventive care feel less like a chore and more like a choice.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
