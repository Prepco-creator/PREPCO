import React, { useEffect } from "react";
import { images } from "../../../public/assets";
import Image from "next/image";
import { PlanHeroProps } from "@/types";
import { gsap } from "gsap";
import RazorpayButton from "../comman/RazorpayButton"; // ✅ Import here

const Hero: React.FC<PlanHeroProps> = ({
  title,
  duration,
  pricing,
  tagLine,
  memberType = "Member",
  membersCount = 1,
  imageSrc,
  paymentGatewayLink,
  bigDescription,
}) => {
  const timeline =
    duration === 12 ? "One Year" : duration === 6 ? "6 Months" : "Not - Defined";

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        ".left-content",
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: "power3.out" }
      );
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
      <div className="left-content  lg:w-1/2 flex flex-col gap-4">
        <div className="space-y-2">
          <h2 className="bg-custom-gradient bg-clip-text text-transparent text-custom-24 lg:text-custom-48-bold">
            {title}
          </h2>
          <p className="text-custom-16 lg:text-custom-24 font-normal text-secondaryDark">
            {membersCount} {memberType}
            {membersCount > 1 && memberType == "Member" ? "s" : ""} Validity - {timeline}
          </p>
          <p className="text-custom-16 lg:text-custom-20 font-normal text-primaryDark">
            {tagLine}
          </p>
          <span className="text-custom-14 lg:text-custom-16">{bigDescription}</span>
        </div>

        <h2 className="bg-custom-gradient bg-clip-text text-transparent text-custom-24 lg:text-custom-48-bold">
          ₹{pricing.toFixed(2)}
        </h2>

        {paymentGatewayLink?.paymentButtonId ? (
          <div className="w-full">
            <RazorpayButton paymentButtonId={paymentGatewayLink.paymentButtonId} />
          </div>
        ) : (
          <p className="text-red-500">Payment not available</p>
        )}
      </div>

      {/* right */}
      <div className="right-content lg:w-1/2 lg:flex justify-end relative self-center">
        <Image
          width={600}
          height={600}
          className="w-[281px] h-[281px] lg:w-[529px] lg:h-[529px] rounded-full object-cover"
          src={imageSrc}
          alt="hero-image"
        />

        {/* GIF overlays */}
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
