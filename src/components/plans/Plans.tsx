'use client'

import React, { useState, useEffect } from "react";
import Banner from "../comman/Banner";
import PlanCardGrid from "./PlanCardGrid";
import mockData from "@/data/plans";
import FilterPlans from "./FilterPlans";
import { PlanProps } from "@/types";
import Footer from "../comman/Footer";

const Plans = () => {

  const fullCoveragePlanIds = ["plan_7", "plan_8"];

  // Default to the 6-month plan
  const defaultPlans = mockData.filter(
    (plan) =>
      plan.duration === 6 &&
      !plan.isSpecial &&
      !fullCoveragePlanIds.includes(plan.id)
  );

  const [filteredPlans, setFilteredPlans] = useState<PlanProps[]>(defaultPlans);

  useEffect(() => {
    // Check if there are any previously stored filtered plans in localStorage
    const storedPlans = localStorage.getItem("PREPCO-INSURANCE-PLANS");
    if (typeof window !== "undefined") {
      if (storedPlans) {
        setFilteredPlans(JSON.parse(storedPlans)); // Restore filtered plans from localStorage
      }
    } else {
      setFilteredPlans(defaultPlans)
    }
  }, []);

  const handleFilterChange = (
    filterType: "duration" | "special" | "fullCoverage" | null,
    value?: number | string | string[]
  ) => {
    let newFilteredPlans: PlanProps[] = [];

    if (!filterType) {
      // No filter selected, show all plans
      newFilteredPlans = mockData;
    } else {

      if (filterType === "duration" && typeof value === "number") {
        newFilteredPlans = mockData.filter(
          (plan) =>
            plan.duration === value &&
            !plan.isSpecial &&
            !fullCoveragePlanIds.includes(plan.id)
        );
      } else if (filterType === "special") {
        newFilteredPlans = mockData.filter((plan) => plan.isSpecial);
      } else if (filterType === "fullCoverage" && Array.isArray(value)) {
        newFilteredPlans = mockData.filter((plan) => value.includes(plan.id));
      }

    }

    setFilteredPlans(newFilteredPlans);

    // Store the filtered plans in localStorage
    localStorage.setItem("PREPCO-INSURANCE-PLANS", JSON.stringify(newFilteredPlans));
  };

  return (
    <section>
      <Banner title="Our Plans" />
      <FilterPlans onFilterChange={handleFilterChange} />
      <PlanCardGrid plans={filteredPlans} />
      <Footer />
    </section>
  );
};

export default Plans;
