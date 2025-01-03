import { HealthPackageDetails } from "@/types";
import Image from "next/image";
import React from "react";

const HealthPackage: React.FC<{ healthPackage: HealthPackageDetails }> = ({
  healthPackage,
}) => {
  return (
    <div className="p-5 overflow-hidden bg-primary1 shadow-double-inset rounded-[30px] flex flex-col items-center justify-center gap-2 hover:transform hover:-translate-y-2 transition-all">
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
  );
};

export default HealthPackage;
