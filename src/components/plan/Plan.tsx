"use client";

import React from "react";
import Banner from "../comman/Banner";
import formatToHyphenated from "@/utils/fomatPathName";
import mockData from "@/data/plans";
import { PlanProps, PlanServices } from "@/types";
import Hero from "./Hero";
import PlanTitle from "./PlanTitle";
import Features from "./Features";
import MarqueeTags from "../comman/MarqueeTags";
import tags from "@/data/tags";
import PlanDetail from "./PlanDetail";
import Footer from "../comman/Footer";
import planServices from "@/data/planPackages";
import healthPackageDetails from "@/data/healthPackageDetails";

const Plan: React.FC<{ planName: string }> = ({ planName }) => {
  const plan = mockData?.find(
    (data: PlanProps) => planName === formatToHyphenated(data.title)
  );


  if (!plan) {
    return <div>Plan not found</div>;
  }

  const servicePackages = planServices.find(
    (service: PlanServices) => service.planId === plan?.id
  ) as PlanServices



  return (
    <section>
      <Banner title={plan.title} />
      <Hero
        imageSrc={plan.imgSrc}
        title={plan.title}
        duration={plan.duration}
        pricing={plan.discountPricing}
        memberType={plan.memberType}
        membersCount={plan.membersCount}
      />
      <PlanTitle title={plan.title} />
      <Features
        membersCount={plan.membersCount}
        description={plan.description}
        duration={plan.duration}
        features={plan.features}
        memberType={plan.memberType}
        tamilVideo={plan.videoLinkTamil}
        englishVideo={plan.videoLinkEnglish}
      />
      <MarqueeTags
        tagClassName="bg-accent-2 px-2"
        className="py-16"
        tags={tags}
      />
      <PlanDetail
        title={plan.title}
        bigDescription={plan.bigDescription as string}
        healthPackages={servicePackages.services || healthPackageDetails}
      />
      <Footer />
    </section>
  );
};

export default Plan;
