import React from "react";
import { PlanProps } from "@/types";
import PlanCard from "./PlanCard";

const PlanCardGrid: React.FC<{ plans: PlanProps[] }> = ({ plans }) => {
  return (
    <section className="p-8 grid plan-grid gap-3">
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
