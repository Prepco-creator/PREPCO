"use client";

import React from "react";
import formatToHyphenated from "@/utils/fomatPathName";
import Hero from "./Hero";
import MarqueeTags from "../comman/MarqueeTags";
import tags from "@/data/tags";
import PlanDetail from "./PlanDetail";
import Footer from "../comman/Footer";
import healthPackageDetails from "@/data/healthPackageDetails";
import { useParams } from "next/navigation";
import PlanSecondSection from "./PlanSecondSection";
import SpecialCTA from "./SpecialCTA";
import { HealthPlan, plans_v2 } from "@/data/plans-v2";
import { PlanPackagesProps, plans_packages } from "@/data/plans-packages";

const Plan = () => {

  const params = useParams();

  const { planName } = params;


  const plan = plans_v2?.find(
    (data: HealthPlan) => planName === formatToHyphenated(data.title)
  );


  if (!plan) {
    return <div>Plan not found</div>;
  }

  const planPackages = plans_packages.find(
    (service: PlanPackagesProps) => service.planName === plan?.title
  ) as PlanPackagesProps;



  return (
    <section>
      {/* <Banner title={plan.title} /> */}
      <Hero
      tagLine={plan.tagline}
        imageSrc={plan.imgSrc}
        title={plan.title}
        duration={plan.duration}
        pricing={plan.pricing}
        bigDescription={plan.description}
        memberType={plan.memberType}
        membersCount={plan.membersCount}
        paymentGatewayLink={plan.paymentGatewayLink}
      />
      <PlanSecondSection
        tamilVideo={plan.ytVideoLinks.tamil}
        englishVideo={plan.ytVideoLinks.english}
        keyFeatures={plan.keyFeatures}
        paymentGatewayLink={plan.paymentGatewayLink}
      />
      <SpecialCTA />
      <MarqueeTags
        tagClassName="bg-accent-2 px-2"
        className="py-16"
        tags={tags}
      />
      <PlanDetail
        title={plan.title}
        bigDescription={plan.description as string}
        healthPackages={planPackages.enhancedFeatures || healthPackageDetails}
      />
      <Footer />
    </section>
  );
};

export default Plan;
