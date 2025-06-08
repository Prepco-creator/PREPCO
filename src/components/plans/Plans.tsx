'use client'

import React from "react";
import Banner from "../comman/Banner";
import plansv2 from "@/data/plans.json";
import Footer from "../comman/Footer";
import AutoTransposingTable from "../comman/CustomTable";
import formatToHyphenated from "@/utils/fomatPathName";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const Plans = () => {
  // const fullCoveragePlanIds = ["plan_7", "plan_8"];

  // // Use useMemo to ensure defaultPlans doesn't change on every render
  // const defaultPlans = useMemo(() => {
  //   return mockData.filter((plan) => plan.isSpecial === true);
  // }, []); // Empty dependency array means this will only be calculated once

  // const [filteredPlans, setFilteredPlans] = useState<PlanProps[]>(defaultPlans);

  // // Track if initial data has been loaded
  // const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  // // Load saved plans from sessionStorage only on component mount or client-side navigation
  // useEffect(() => {
  //   if (!initialDataLoaded && typeof window !== "undefined") {
  //     const storedPlans = sessionStorage.getItem("PREPCO-INSURANCE-PLANS");
  //     if (storedPlans) {
  //       try {
  //         const parsedPlans = JSON.parse(storedPlans);
  //         setFilteredPlans(parsedPlans);
  //       } catch (error) {
  //         console.error("Error parsing stored plans:", error);
  //         setFilteredPlans(defaultPlans);
  //       }
  //     }
  //     setInitialDataLoaded(true);
  //   }
  // }, [initialDataLoaded, defaultPlans]);

  // const handleFilterChange = (
  //   filterType: "duration" | "special" | "fullCoverage" | "all" | null,
  //   value?: number | string | string[]
  // ) => {
  //   let newFilteredPlans: PlanProps[] = [];

  //   if (!filterType) {
  //     // No filter selected, show all plans
  //     newFilteredPlans = mockData;
  //   } else {
  //     if (filterType === "duration" && typeof value === "number") {
  //       newFilteredPlans = mockData.filter(
  //         (plan) =>
  //           plan.duration === value &&
  //           !plan.isSpecial &&
  //           !fullCoveragePlanIds.includes(plan.id)
  //       );
  //     } else if (filterType === "special") {
  //       newFilteredPlans = mockData.filter((plan) => plan.isSpecial);
  //     } else if (filterType === "fullCoverage" && Array.isArray(value)) {
  //       newFilteredPlans = mockData.filter((plan) => value.includes(plan.id));
  //     } else if (filterType === "all") {
  //       newFilteredPlans = [...mockData];
  //     }
  //   }

  //   setFilteredPlans(newFilteredPlans);

  //   // Store the filtered plans in Session Storage
  //   // We don't need to wait for the state update to complete
  //   try {
  //     sessionStorage.setItem("PREPCO-INSURANCE-PLANS", JSON.stringify(newFilteredPlans));
  //   } catch (error) {
  //     console.error("Error storing filtered plans:", error);
  //   }
  // };

  return (
    <section>
      <Banner title="Our Plans" />
      <AutoTransposingTable
        data={plansv2}
        getTitle={(plan) => plan["Plan Title"]}
        hiddenKeys={[
          "Unbeatable Price & Value For Money.actualPrice",
          "After Discount"
        ]}
        specialRows={[
          { key: "Voucher Benifits", className: "bg-primary text-white font-semibold" },
          { key: "Membership Card Benifits", className: "bg-primary text-white font-semibold" },
        ]}

        additionalRows={[
          {
            rowName: "Unbeatable Price & Value For Money",
            keyOverride: "Unbeatable Price & Value For Money.price", // 👈 replace the flattened key
            render: (row) => {
              const value = row["Unbeatable Price & Value For Money"];
              if (!value) return '-';
              return (
                <span className="text-lg">
                  <s className="text-red-500 mr-1">₹{value.price}</s>
                  <span className="text-black font-semibold">₹{value.actualPrice}</span>
                </span>
              );
            },
          },
          {
            rowName: 'Grab it now',
            render: (row) => (
              <Link
                href={`/plans/${formatToHyphenated(row['Plan Title'])}`}
              >
                <button className="bg-primary text-white rounded-lg border border-primary text-custom-14 p-4 hover:bg-transparent hover:text-primary hover:shadow-md transition duration-300 ease-in-out">
                  Grab it now
                </button>
              </Link>
            ),
            index: 3, // Insert at row index 2 (optional)
          },
          {
            rowName: 'Grab it now',
            render: (row) => (
              <div className="flex flex-col gap-8">
                <Link
                  href={`/checkout?planId=${row["planId"]}`}
                >
                  <button className="bg-primary text-white rounded-lg border border-primary text-custom-14 px-4 py-2 hover:bg-transparent hover:text-primary hover:shadow-md transition duration-300 ease-in-out">
                    Buy Now
                  </button>
                </Link>
                <Link
                  href={`/plans/${formatToHyphenated(row['Plan Title'])}`}
                  passHref
                  className="text-sm flex items-center justify-start gap-1"
                >
                  <span>To Know More</span>
                  <FaAngleRight />
                </Link>
              </div>
            ),
          },

        ]}
      />

      <Footer />
    </section>
  );
};

export default Plans;