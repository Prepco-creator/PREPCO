import { HealthPackageDetails } from "@/types";
import Image from "next/image";
import React from "react";

const HealthPackage: React.FC<{ healthPackage: HealthPackageDetails }> = ({
  healthPackage,
}) => {
  return (
    <div className="relative group min-h-[271px]">
      {/* Stacked Card (background card) */}
      <div className="absolute inset-0 -z-10 translate-y-2 bg-secondary rounded-[4px] w-11/12 mx-auto"></div>

      {/* Main Card */}
      <div className="p-5 h-full bg-custom-gradient shadow-md rounded-[4px] flex flex-col items-center justify-center gap-2 transition-all">
        {/* Icon */}
        <div className="relative transition-transform group-hover:-translate-y-2">
          <Image
            src={healthPackage.iconSrc}
            alt={healthPackage.id}
            width={60}
            height={60}
            className="stroke-white"
          />
        </div>

        {/* Title */}
        <h5 className="text-custom-16-bold lg:text-custom-20 lg:font-extrabold text-white">
          {healthPackage.title}
        </h5>

        {/* Description */}
        <p className="text-custom-14 lg:text-custom-16 text-white">
          {healthPackage.description}
        </p>
      </div>
    </div>
  );
};

export default HealthPackage;
