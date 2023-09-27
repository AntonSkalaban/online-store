import React, { useState } from 'react';
import { RadioBlock } from '../FilterInputsList/RadioList/RadioList';
import { FilterDropdown } from '../FilterDropdown';
import { MobileFilterPortal } from './MobileFilterPortal/MobileFilterPortal';
import './style.css';

export const MobileFilter = () => {
  const [isFilterListOpen, setIsFilterListOpen] = useState(false);

  return (
    <div className="filter__dropdown-container filter__dropdown-container_mobile">
      <FilterDropdown title="sort" classNameMod="filter">
        <RadioBlock title="sort" />
      </FilterDropdown>

      <button
        className="filter__mobile-btn dropdown__header_filter "
        onClick={() => {
          setIsFilterListOpen(true);
        }}
      >
        {' '}
        All Filters
      </button>

      <MobileFilterPortal
        isOpen={isFilterListOpen}
        closePortal={() => setIsFilterListOpen(false)}
      />
    </div>
  );
};
