import React from "react";
import { images, videos } from "../../../public/assets";
import { FeaturesProps, PlanFeature } from "@/types";
import Image from "next/image";

const Features: React.FC<FeaturesProps> = ({
  membersCount,
  duration,
  features,
  description,
}) => {
  const timeline =
    duration === 12 ? "One Year" : duration === 6 ? "6 Months" : "Not Defined";

  const featureIcon =
    membersCount === 1
      ? images.gifs.oneMemberPlan
      : images.gifs.threeMemberPlan;

  // Split the features into two halves
  const halfLength = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, halfLength);
  const rightFeatures = features.slice(halfLength);

  return (
    <section className="px-6 py-16 bg-gradient-to-r from-teal-400 to-teal-700 shadow-double-inset">
      <div className="container mx-auto text-center text-white">
        <h3 className="text-3xl lg:text-5xl font-bold mb-4">
          Plan Validation {timeline} - 2 Members
        </h3>
        <p className="text-lg lg:text-2xl mb-12 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      {/* Video Section */}
      <div className="flex justify-center items-center mt-12">
        <div className="overflow-hidden rounded-2xl shadow-lg w-full max-w-4xl">
          <video
            src={videos.hero}
            className="w-full h-full object-cover rounded-2xl shadow-md"
            autoPlay
            loop
            muted
            preload="auto"
          >
            <source src={videos.hero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
        {/* Left Column: Features */}
        <div className="flex flex-col space-y-6">
          {leftFeatures.map((feature: PlanFeature, index: number) => (
            <div
              key={index}
              className="feature-item bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-4"
            >
              <Image
                unoptimized
                width={40}
                height={40}
                src={featureIcon}
                alt={feature.id}
                className="transition-all duration-300 hover:scale-110"
              />
              <p className="text-xl lg:text-2xl text-teal-700 font-semibold">
                {feature.content}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Features */}
        <div className="flex flex-col space-y-6">
          {rightFeatures.map((feature: PlanFeature, index: number) => (
            <div
              key={index}
              className="feature-item bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-4"
            >
              <Image
                unoptimized
                width={40}
                height={40}
                src={featureIcon}
                alt={feature.id}
                className="transition-all duration-300 hover:scale-110"
              />
              <p className="text-xl lg:text-2xl text-teal-700 font-semibold">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
