"use client";

import React, { useState } from "react";
import Banner from "../comman/Banner";
import PlanCardGrid from "./PlanCardGrid";
import mockData from "@/data/plans";
import FilterPlans from "./FilterPlans";
import { PlanProps } from "@/types";
import Footer from "../comman/Footer";

const Plans = () => {
  const [filteredPlans, setFilteredPlans] = useState(mockData);

  const handleFilterChange = (
    filterType: "duration" | "special" | "fullCoverage" | null,
    value?: number | string | string[]
  ) => {
    if (!filterType) {
      // No filter selected, show all plans
      setFilteredPlans(mockData);
      return;
    }

    let newFilteredPlans: PlanProps[] = [];
    if (filterType === "duration" && typeof value === "number") {
      newFilteredPlans = mockData.filter((plan) => plan.duration === value);
    } else if (filterType === "special") {
      newFilteredPlans = mockData.filter((plan) => plan.isSpecial);
    } else if (filterType === "fullCoverage" && Array.isArray(value)) {
      newFilteredPlans = mockData.filter((plan) => value.includes(plan.id));
    }

    setFilteredPlans(newFilteredPlans);
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
