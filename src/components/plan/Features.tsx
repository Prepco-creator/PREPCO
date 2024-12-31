import React, { useEffect } from "react";
import { images, videos } from "../../../public/assets";
import { FeaturesProps, PlanFeature } from "@/types";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Features: React.FC<FeaturesProps> = ({
  membersCount,
  duration,
  features,
  description,
}) => {
  const timeline =
    duration === 12 ? "One Year" : duration === 6 ? "6 Month" : "Not - Defined";

  const featureIcon =
    membersCount == 1 ? images.gifs.oneMemberPlan : images.gifs.threeMemberPlan;

  useEffect(() => {
    gsap.utils.toArray(".feature-item").forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -200 }, // Start from left and invisible
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item, // The item itself
            start: "top 80%", // When the top of the item is 80% from the top of the viewport
            end: "top 30%", // End the animation when the top of the item reaches 30% of the viewport
            scrub: true, // Smooth scrubbing of the animation
            toggleActions: "play none none reverse", // Play when entering and reverse when leaving
          },
        }
      );
    });
  }, [features]);

  return (
    <section className="px-4 py-8 lg:p-16 bg-accent-1">
      <h3 className="text-center text-custom-20-bold lg:text-custom-40-2 text-primary mb-2">
        Plan Validation {timeline} - 2 Members
      </h3>
      <p className="text-custom-14 lg:text-custom-20-2 text-secondaryDark text-center mb-10">
        {description}
      </p>
      <section className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-end">
        <div>
          {features.map((feature: PlanFeature, index: number) => (
            <div
              key={index}
              className="feature-item flex flex-row gap-2 mb-2 lg:mb-8 items-center"
            >
              <Image
                unoptimized
                width={32}
                height={32}
                src={featureIcon}
                alt={feature.id}
              />
              <p className="text-custom-14 lg:text-custom-20-2 text-secondaryDark">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
        <div>
          <video
            src={videos.hero}
            className="inset-0 aspect-square w-full h-full object-cover border-none rounded-[30px]"
            autoPlay
            loop
            muted
            preload="auto"
          >
            <source src={videos.hero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </section>
  );
};

export default Features;
