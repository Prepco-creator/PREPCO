"use client";

import React, { useState } from "react";
import Banner from "../comman/Banner";
import PlanCardGrid from "./PlanCardGrid";
import mockData from "@/data/plans";
import FilterPlans from "./FilterPlans";
import Footer from "../comman/Footer";

const Plans = () => {
  const [filteredPlans, setFilteredPlans] = useState(mockData);

  const handleFilterChange = (duration: number) => {
    const newFilteredPlans = mockData.filter(
      (plan) => plan.duration === duration
    );
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
