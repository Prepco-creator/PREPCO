import React from "react";
import { PlanProps } from "@/types";
import PlanCard from "./PlanCard";

const PlanCardGrid: React.FC<{ plans: PlanProps[] }> = ({ plans }) => {

  const gridClasses = plans.length <= 2 ? 'md:grid-cols-2' : 'lg:grid-cols-3';


  return (
    <section
      className={`w-[95%] mx-auto pb-2 grid grid-cols-auto-fit 
                  sm:grid-cols-1 gap-3 justify-center ${gridClasses}`}
    >
      {plans?.map((plan: PlanProps, index: number) => (
        <PlanCard
          key={index}
          discountPricing={plan.discountPricing}
          id={plan.id}
          title={plan.title}
          tagline={plan.tagline}
          category={plan.category}
          description={plan.description}
          pricing={plan.pricing}
          membersCount={plan.membersCount}
          duration={plan.duration}
          featuresDisplay={plan.featuresDisplay}
          memberType={plan?.memberType}
          paymentGatewayLink={plan.paymentGatewayLink}
        />
      ))}
    </section>
  );
};

export default PlanCardGrid;
