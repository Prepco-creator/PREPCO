import { HealthPackageDetails } from "@/types";
import Image from "next/image";
import React from "react";

const HealthPackage: React.FC<{ healthPackage: HealthPackageDetails }> = ({
  healthPackage,
}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Face */}
        <div className="flip-card-front p-5 bg-primary1 shadow-double-inset rounded-[30px] flex flex-col items-center justify-center gap-2 card-rotation">
          <Image
            src={healthPackage.iconSrc}
            alt={healthPackage.id}
            width={60}
            height={60}
            className="stroke-white"
          />
          <h5 className="text-custom-16-bold lg:text-custom-20 lg:font-extrabold text-white">
            {healthPackage.title}
          </h5>
          <p className="text-custom-14 lg:text-custom-16 text-white">
            {healthPackage.description}
          </p>
        </div>

        {/* Back Face */}
        <div className="flip-card-back p-5 bg-primary1 shadow-double-inset rounded-[30px] flex flex-col items-center justify-center gap-2">
          <Image
            src={healthPackage.iconSrc}
            alt={healthPackage.id}
            width={60}
            height={60}
            className="stroke-white"
          />
          <h5 className="text-custom-16-bold lg:text-custom-20 lg:font-extrabold text-white">
            {healthPackage.title}
          </h5>
          <p className="text-custom-14 lg:text-custom-16 text-white">
            {healthPackage.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthPackage;
