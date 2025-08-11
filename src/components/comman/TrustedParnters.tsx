import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { partnersLogo } from "@/data/trustedPartnersData";

const TrustedPartners = () => {
  const midIndex = Math.ceil(partnersLogo.length / 2);
  const firstHalf = partnersLogo.slice(0, midIndex);
  const secondHalf = partnersLogo.slice(midIndex);

  return (
    <div className="w-full bg-gradient-to-br from-[#E8FDFD] via-[#D9FCFB] to-[#C0F8F7] py-6 space-y-4">
      <h3 className="text-center text-custom-24 lg:text-custom-32 bg-custom-gradient bg-clip-text text-transparent">
        Our Trusted – Top Line Hospitals{" "}
      </h3>

      <Marquee gradient={false} speed={30}>
        {firstHalf.map((src, index) => (
          <div
            key={`top-${index}`}
            className="mx-8 py-12 flex items-center justify-between min-w-[100px] h-[64px]"
          >
            <Image
              src={src}
              alt={`Partner ${index + 1}`}
              width={120}
              height={64}
              quality={100}
              className="object-contain h-16 w-auto"
            />
          </div>
        ))}
      </Marquee>

      <Marquee gradient={false} speed={30} direction="right">
        {secondHalf.map((src, index) => (
          <div
            key={`bottom-${index}`}
            className="mx-8 py-12 flex items-center justify-between min-w-[100px] h-[64px]"
          >
            <Image
              src={src}
              alt={`Partner ${1}`}
              width={120}
              height={64}
              quality={100}
              className="object-contain h-16 w-auto"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustedPartners;
