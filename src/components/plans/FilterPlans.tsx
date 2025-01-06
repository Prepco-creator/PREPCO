import React, { useState } from "react";

interface FilterPlansProps {
  onFilterChange: (
    filterType: "duration" | "special" | "fullCoverage" | null,
    value?: number | string
  ) => void;
}

const FilterPlans: React.FC<FilterPlansProps> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleSelect = (filterType: "duration" | "special" | "fullCoverage", value?: number | string) => {
    const filterKey = filterType === "duration" ? `duration-${value}` : filterType;

    if (selectedFilter === filterKey) {
      // Deselect the current filter
      setSelectedFilter(null);
      onFilterChange(null);
    } else {
      // Apply the new filter
      setSelectedFilter(filterKey);
      onFilterChange(filterType, value);
    }
  };

  return (
    <div className="flex items-center justify-center py-4 gap-4 flex-wrap">
      <button
        className={`px-6 py-3 rounded-xl font-medium text-sm shadow-lg border-[2px] ${selectedFilter === "duration-6"
          ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white border-gray-700 shadow-double-inset"
          : "bg-gray-200 text-primary border-teal-600"
          } transition-all duration-300 transform ${selectedFilter === "duration-6" ? "scale-105" : ""
          }`}
        onClick={() => handleSelect("duration", 6)}
      >
        6 Months Plan
      </button>
      <button
        className={`px-6 py-3 rounded-xl font-medium text-sm shadow-lg border-[2px] ${selectedFilter === "duration-12"
          ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white border-gray-700 shadow-double-inset"
          : "bg-gray-200 text-primary border-teal-600"
          } transition-all duration-300 transform ${selectedFilter === "duration-12" ? "scale-105" : ""
          }`}
        onClick={() => handleSelect("duration", 12)}
      >
        1 Year Plan
      </button>
      <button
        className={`px-6 py-3 rounded-xl font-medium text-sm shadow-lg border-[2px] ${selectedFilter === "special"
          ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white border-gray-700 shadow-double-inset"
          : "bg-gray-200 text-primary border-teal-600"
          } transition-all duration-300 transform ${selectedFilter === "special" ? "scale-105" : ""
          }`}
        onClick={() => handleSelect("special")}
      >
        Special Plan
      </button>
      <button
        className={`px-6 py-3 rounded-xl font-medium text-sm shadow-lg border-[2px] ${selectedFilter === "fullCoverage"
          ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white border-gray-700 shadow-double-inset"
          : "bg-gray-200 text-primary border-teal-600"
          } transition-all duration-300 transform ${selectedFilter === "fullCoverage" ? "scale-105" : ""
          }`}
        onClick={() => handleSelect("fullCoverage", "plan_8")}
      >
        Full Coverage Plan
      </button>
    </div>
  );
};

export default FilterPlans;
