import React, { useState } from "react";
import { images, videos } from "../../../public/assets";
import { FeaturesProps, PlanFeature } from "@/types";
import Image from "next/image";
import ResponsiveYouTube from "../comman/ResponsiveYoutube";

const Features: React.FC<FeaturesProps> = ({
  duration,
  features,
  description,
  memberType = "Person",
  membersCount = 1,
  tamilVideo,
  englishVideo
}) => {
  const timeline =
    duration === 12 ? "One Year" : duration === 6 ? "6 Months" : "Not Defined";

  const featureIcon =
    membersCount === 1
      ? images.gifs.oneMemberPlan
      : images.gifs.threeMemberPlan;

  // Manage feature toggle state
  const [showMore, setShowMore] = useState(false);
  const [isTamil, setIsTamil] = useState(false);
  const visibleFeatures = showMore ? features : features.slice(0, 6);
  const midPoint = Math.ceil(visibleFeatures.length / 2);
  const leftVisible = visibleFeatures.slice(0, midPoint);
  const rightVisible = visibleFeatures.slice(midPoint);


  const handleLanguageSwitch = (language: boolean) => {
    setIsTamil(language);
  };
  return (
    <section className="px-6 py-16 bg-gradient-to-r from-teal-400 to-teal-700 shadow-double-inset">
      <div className="container mx-auto text-center text-white mb-12 space-y-4">
        <h3 className="text-3xl lg:text-5xl font-bold mb-4">
          Plan Validation {timeline} - {membersCount} {memberType}
        </h3>
        <p className="text-lg lg:text-2xl max-w-3xl mx-auto">{description}</p>
        <div className="flex w-full justify-center">
          <button
            className={`px-6 py-3 font-medium text-sm shadow-lg border-[2px] border-teal-600 transition-all duration-300 transform ${!isTamil ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white shadow-double-inset" : "bg-white text-primary"
              } rounded-l-3xl border-r-0 w-1/2 md:w-fit`}
            onClick={() => handleLanguageSwitch(false)}
          >
            English
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm shadow-lg border-[2px] border-teal-600 transition-all duration-300 transform ${isTamil ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white shadow-double-inset" : "bg-white text-primary"
              } rounded-r-3xl border-l-0 w-1/2 md:w-fit`}
            onClick={() => handleLanguageSwitch(true)}
          >
            தமிழ்
          </button>
        </div>
      </div>

      <div className="relative">
        <ResponsiveYouTube
          videoURL={isTamil ? tamilVideo : englishVideo}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
        {/* Left Column: Features */}
        <div className="flex flex-col space-y-6">
          {leftVisible.map((feature: PlanFeature, index: number) => (
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
          {rightVisible.map((feature: PlanFeature, index: number) => (
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
      {/* Know More Button */}
      {features.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="cta-button w-full lg:w-1/2  hover:scale-x-110 transition-all duration-500 ease-in-out p-3 lg:py-3 lg:px-6 bg-custom-gradient shadow-double-inset text-white lg:font-semibold text-custom-16-bold lg:text-lg custom-border-radius">

            {showMore ? "Show Less" : "Know More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Features;
