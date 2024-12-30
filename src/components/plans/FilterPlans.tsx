import React, { useState } from 'react';

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
        <div className="flex items-center justify-center py-4 ">
            <button
                className={`px-4 py-2 rounded-lg font-medium text-sm rounded-l-full border-[1px] border-solid border-primary ${selectedDuration === 6
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700'
                    } transition duration-300`}
                onClick={() => handleSelect(6)}
            >
                6 Months Plans
            </button>
            <button
                className={`px-4 py-2 rounded-lg font-medium text-sm rounded-r-full border-[1px] border-solid border-primary ${selectedDuration === 12
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700'
                    } transition duration-300`}
                onClick={() => handleSelect(12)}
            >
                1 Year Plans
            </button>
        </div>
    );
};

export default FilterPlans;
