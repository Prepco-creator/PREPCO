import React, { useEffect } from "react";
import { images } from "../../../public/assets";
import Image from "next/image";
import Link from "next/link";
import { PlanHeroProps } from "@/types";
import { gsap } from "gsap";

// Register ScrollTrigger plugin

const Hero: React.FC<PlanHeroProps> = ({ title, duration, pricing, memberType = "Person", membersCount = 1,imageSrc }) => {
  const timeline =
    duration === 12 ? "One Year" : duration === 6 ? "6 Month" : "Not - Defined";

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
    <section className="hero-section p-8 lg:p-16 flex flex-col lg:flex-row gap-6 lg:gap-4 justify-between items-start lg:items-center">
      {/* left */}
      <div className="left-content flex flex-col gap-4">
        <div>
          <h2 className="bg-custom-gradient bg-clip-text text-transparent text-custom-24 lg:text-custom-48-bold">
            {title}
          </h2>
          <p className="text-custom-16 lg:text-custom-24 font-normal text-secondaryDark">
            Plan Validation {timeline} - {membersCount} {memberType}
          </p>
        </div>
        <h2 className="bg-custom-gradient bg-clip-text text-transparent text-custom-24 lg:text-custom-48-bold">
          &#8377;{pricing.toFixed(2)}
        </h2>
        <button className="w-full text-custom-16-bold lg:text-custom-24 bg-primary text-white p-5 shadow-double-inset rounded-tl-br-30 border-2 border-transparent hover:text-primary hover:border-primary hover:shadow-none hover:border-2 hover:bg-transparent active:opacity-70 transition-all">
          Buy Now
        </button>

        {/* <Link href="/testimonials" passHref>
          <p className="text-center underline text-custom-14 lg:text-custom-16 text-secondaryDark">
            Here it from our client testimonials
          </p>
        </Link> */}
      </div>
      {/* right */}
      <div className="right-content relative self-center">
        <Image
          width={600}
          height={600}
          className="w-[281px] h-[281px] lg:w-[529px] lg:h-[529px] rounded-full object-cover"
          src={imageSrc}
          alt="hero-image"
        />

        <div className="absolute top-3 left-10 bg-white shadow-md rounded-full">
          <Image
            src={images.gifs.yogaUpDown}
            width={65}
            height={65}
            alt="yoga-gif"
            className="max-[1024px]:w-[40px] max-[1024px]:h-[40px]"
            unoptimized
          />
        </div>
        <div className="absolute top-20 right-0 bg-white shadow-md rounded-full">
          <Image
            src={images.gifs.runningWoman}
            width={65}
            height={65}
            alt="yoga-gif"
            className="max-[1024px]:w-[40px] max-[1024px]:h-[40px]"
            unoptimized
          />
        </div>
        <div className="absolute bottom-20 -left-3 bg-white shadow-md rounded-full">
          <Image
            src={images.gifs.lovingFamily}
            width={65}
            height={65}
            alt="yoga-gif"
            className="max-[1024px]:w-[40px] max-[1024px]:h-[40px]"
            unoptimized
          />
        </div>
        <div className="absolute bottom-10 right-10 bg-white shadow-md rounded-full">
          <Image
            src={images.gifs.drinkWater}
            width={65}
            height={65}
            alt="yoga-gif"
            className="max-[1024px]:w-[40px] max-[1024px]:h-[40px]"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
