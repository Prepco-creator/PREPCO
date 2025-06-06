import { HealthPackageDetails } from "@/types";
import React from "react";

const HealthPackage: React.FC<{ healthPackage: HealthPackageDetails }> = ({
  healthPackage,
}) => {

  const Icon = healthPackage.iconSrc;

  return (
    <div className="relative group min-h-[271px]">
      {/* Stacked Card (background card) */}
      {/* <div className="absolute inset-0 z-10 translate-y-3 bg-primary rounded-[4px] w-11/12 mx-auto"></div> */}

      {/* Main Card */}
      <div className="p-5 z-[11] relative h-full bg-white shadow-md rounded-[4px] flex flex-col items-center justify-center gap-2 transition-all border-t-primary border-t-[2px] border-t-solid group-hover:bg-primary group-hover:text-white">
        {/* Icon */}
        <div className="relative transition-transform group-hover:-translate-y-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-transparent group-hover:bg-white transition-all text-primary group-hover:text-primary">
            {Icon && <Icon size={36} />}
          </div>
        </div>

        {/* Title */}
        <h5 className="text-custom-16-bold lg:text-custom-20 lg:font-extrabold transition-all group-hover:text-white">
          {healthPackage.title}
        </h5>

        {/* Description */}
        <p className="text-custom-14 lg:text-custom-16 transition-all group-hover:text-white">
          {healthPackage.description}
        </p>
      </div>
    </div>
  );
};

export default HealthPackage;

