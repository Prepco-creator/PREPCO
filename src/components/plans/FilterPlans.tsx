import React, { useState } from "react";

interface FilterPlansProps {
  onFilterChange: (duration: number) => void;
}

const FilterPlans: React.FC<FilterPlansProps> = ({ onFilterChange }) => {
  const [selectedDuration, setSelectedDuration] = useState(12); // Default: 1 Year Plan

  const handleSelect = (duration: number) => {
    setSelectedDuration(duration);
    onFilterChange(duration);
  };

  return (
    <div className="flex items-center justify-center py-4 gap-4 flex-wrap">
      <button
        className={`px-6 py-3 rounded-xl font-medium text-sm shadow-lg border-[2px] ${
          selectedDuration === 3
            ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white border-gray-700 shadow-double-inset"
            : "bg-gray-200 text-primary border-teal-600 "
        } transition-all duration-300 transform ${
          selectedDuration === 3 ? "scale-105" : ""
        }`}
        onClick={() => handleSelect(3)}
      >
        6 Months Plan
      </button>
      <button
        className={`px-6 py-3 rounded-xl font-medium text-sm shadow-lg border-[2px] ${
          selectedDuration === 6
            ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white border-gray-700 shadow-double-inset"
            : "bg-gray-200 text-primary border-teal-600 "
        } transition-all duration-300 transform ${
          selectedDuration === 6 ? "scale-105" : ""
        }`}
        onClick={() => handleSelect(6)}
      >
        1 year Plan
      </button>
      <button
        className={`px-6 py-3 rounded-xl font-medium text-sm shadow-lg border-[2px] ${
          selectedDuration === 12
            ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white border-gray-700 shadow-double-inset"
            : "bg-gray-200 text-primary border-teal-600 "
        } transition-all duration-300 transform ${
          selectedDuration === 12 ? "scale-105" : ""
        }`}
        onClick={() => handleSelect(12)}
      >
        Speacial Plan
      </button>
      <button
        className={`px-6 py-3 rounded-xl font-medium text-sm shadow-lg border-[2px] ${
          selectedDuration === 24
            ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white border-gray-700 shadow-double-inset"
            : "bg-gray-200 text-primary border-teal-600 "
        } transition-all duration-300 transform ${
          selectedDuration === 24 ? "scale-105" : ""
        }`}
        onClick={() => handleSelect(24)}
      >
        Full Coverage Plan
      </button>
    </div>
  );
};

export default FilterPlans;
