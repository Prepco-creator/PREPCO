import { PlanProps } from "@/types";
import Image from "next/image";
import React from "react";
import { images } from "../../../public/assets";
import formatToHyphenated from "@/utils/fomatPathName";
import Link from "next/link";

const PlanCard: React.FC<PlanProps> = ({
  title,
  tagline,
  description,
  duration,
  pricing,
  discountPricing,
  isSpecial,
  featuresDisplay,
  membersCount,
}) => {
  const timeline =
    duration === 12 ? "year" : duration === 6 ? "6-months" : "not-defined";

  const planName = formatToHyphenated(title);

  return (
    <div
      className={`rounded-3xl border-[1px] border-solid border-primary p-4 flex flex-col gap-4 transition-all duration-300 ease-in-out hover:-translate-y-2 ${isSpecial ? "bg-accent-1" : "bg-transparent"
        }`}
    >
      <h1 className="text-custom-24 text-primary">{title}</h1>
      <p className="text-base font-medium text-secondaryDark">{tagline}</p>
      <p className="text-custom-14 text-secondaryDark">{description}</p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-1">
          <h6 className="text-3xl font-bold text-slate-700">
            &#8377;<span className="line-through">{pricing}</span>
            <span className="text-xl text-dark font-medium">/{timeline}</span>
          </h6>
          <h1 className="text-xl font-bold text-primary">
            &#8377;{discountPricing}
            <span className="text-base text-dark">/{timeline}</span>
          </h1>
        </div>
        <p className="flex flex-row gap-2">
          <Image
            alt="people-2"
            width={20}
            height={20}
            src={images.svgs.peopleDuo}
          />
          <span className="text-custom-14 text-secondaryDark">
            {membersCount}persons{" "}
          </span>
        </p>
      </div>
      <Link href="/coming-soon" passHref>
        <button className="w-full bg-primary text-white p-3 shadow-double-inset rounded-tl-br-30 transition-all duration-300 ease-in-out hover:bg-transparent hover:text-primary hover:border-primary hover:border-2 hover:shadow-none">
          Buy Now
        </button>
      </Link>
      <div>
        {featuresDisplay?.map((feature: string, index: number) => (
          <div key={index} className="flex flex-row gap-2 mb-2">
            <Image
              width={24}
              height={24}
              className="object-contain"
              src={images.pngs.walkingCouple}
              alt={'feature-gif'}
            />
            <p className="text-secondaryDark text-custom-14">
              {feature}
            </p>
          </div>
        ))}
      </div>
      <Link
        href={`/plans/${planName}`}
        className="w-full grid place-items-center"
        passHref
      >
        <button className="bg-transparent mx-auto w-1/2 rounded-lg border-[1px] border-solid border-primary text-primary text-custom-14 p-4 hover:bg-primary hover:shadow-md hover:text-white transition duration-300 ease-in-out">
          To Know More
        </button>
      </Link>
    </div>
  );
};

export default PlanCard;
