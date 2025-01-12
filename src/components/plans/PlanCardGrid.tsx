import React from "react";
import { PlanProps } from "@/types";
import PlanCard from "./PlanCard";

const PlanCardGrid: React.FC<{ plans: PlanProps[] }> = ({ plans }) => {

  const gridClasses = plans.length <= 2 ? 'md:grid-cols-2' : 'lg:grid-cols-3 xl:grid-cols-4';

  return (
    <section
      className={`w-[98%] mx-auto px-4 pb-2 grid grid-cols-auto-fit 
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
          isSpecial={plan.isSpecial}
          pricing={plan.pricing}
          membersCount={plan.membersCount}
          duration={plan.duration}
          featuresDisplay={plan.featuresDisplay}
        />
      ))}
    </section>
  );
};

export default PlanCardGrid;
