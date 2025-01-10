import React, { useState, useEffect } from "react";

interface FilterPlansProps {
  onFilterChange: (
    filterType: "duration" | "special" | "fullCoverage" | null,
    value?: number | string | string[]
  ) => void;
}

const FilterPlans: React.FC<FilterPlansProps> = ({ onFilterChange }) => {
  // Get the filter state from localStorage on component mount
  const getStoredFilter = () => {
    const storedFilter = localStorage.getItem("PREPCO-INSURANCE-FILTER");
    return storedFilter ? storedFilter : "duration-6"; // default to 6 months plan
  };

  const [selectedFilter, setSelectedFilter] = useState<string | null>(getStoredFilter);

  useEffect(() => {
    if (selectedFilter) {
      // Update localStorage when the filter changes
      localStorage.setItem("PREPCO-INSURANCE-FILTER", selectedFilter);
    }
  }, [selectedFilter]);

  const handleSelect = (
    filterType: "duration" | "special" | "fullCoverage",
    value?: number | string | string[]
  ) => {
    const filterKey = filterType === "duration" ? `duration-${value}` : filterType;

    if (selectedFilter === filterKey) {
      // Deselect the current filter
      setSelectedFilter(null);
      onFilterChange(null);
      localStorage.removeItem("PREPCO-INSURANCE-FILTER");
    } else {
      // Apply the new filter
      setSelectedFilter(filterKey);
      onFilterChange(filterType, value);
    }
  };

  const buttonClass = (isSelected: boolean) =>
    `px-6 py-3 rounded-xl font-medium text-sm shadow-lg border-[2px] transition-all duration-300 transform ${isSelected
      ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white border-gray-700 shadow-double-inset scale-105"
      : "bg-gray-200 text-primary border-teal-600"
    }`;

  return (
    <div className="flex items-center justify-center py-4 gap-4 flex-wrap">
      <button
        className={buttonClass(selectedFilter === "duration-6")}
        onClick={() => handleSelect("duration", 6)}
      >
        6 Months Plan
      </button>
      <button
        className={buttonClass(selectedFilter === "duration-12")}
        onClick={() => handleSelect("duration", 12)}
      >
        1 Year Plan
      </button>
      <button
        className={buttonClass(selectedFilter === "special")}
        onClick={() => handleSelect("special")}
      >
        Special Plan
      </button>
      <button
        className={buttonClass(selectedFilter === "fullCoverage")}
        onClick={() => handleSelect("fullCoverage", ["plan_8", "plan_7"])}
      >
        Full Coverage Plan
      </button>
    </div>
  );
};

export default FilterPlans;
