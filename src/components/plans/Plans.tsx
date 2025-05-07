'use client'

import React, { useState, useEffect, useMemo } from "react";
import Banner from "../comman/Banner";
import PlanCardGrid from "./PlanCardGrid";
import mockData from "@/data/plans";
import FilterPlans from "./FilterPlans";
import { PlanProps } from "@/types";
import Footer from "../comman/Footer";

const Plans = () => {
  const fullCoveragePlanIds = ["plan_7", "plan_8"];

  // Use useMemo to ensure defaultPlans doesn't change on every render
  const defaultPlans = useMemo(() => {
    return mockData.filter((plan) => plan.isSpecial === true);
  }, []); // Empty dependency array means this will only be calculated once

  const [filteredPlans, setFilteredPlans] = useState<PlanProps[]>(defaultPlans);
  
  // Track if initial data has been loaded
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  // Load saved plans from sessionStorage only on component mount or client-side navigation
  useEffect(() => {
    if (!initialDataLoaded && typeof window !== "undefined") {
      const storedPlans = sessionStorage.getItem("PREPCO-INSURANCE-PLANS");
      if (storedPlans) {
        try {
          const parsedPlans = JSON.parse(storedPlans);
          setFilteredPlans(parsedPlans);
        } catch (error) {
          console.error("Error parsing stored plans:", error);
          setFilteredPlans(defaultPlans);
        }
      }
      setInitialDataLoaded(true);
    }
  }, [initialDataLoaded, defaultPlans]);

  const handleFilterChange = (
    filterType: "duration" | "special" | "fullCoverage" | "all" | null,
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
      } else if (filterType === "all") {
        newFilteredPlans = [...mockData];
      }
    }

    setFilteredPlans(newFilteredPlans);

    // Store the filtered plans in Session Storage
    // We don't need to wait for the state update to complete
    try {
      sessionStorage.setItem("PREPCO-INSURANCE-PLANS", JSON.stringify(newFilteredPlans));
    } catch (error) {
      console.error("Error storing filtered plans:", error);
    }
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