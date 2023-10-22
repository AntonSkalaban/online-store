import React, { useState } from 'react';
import { FilterDropdown } from '../FilterDropdown';
import { MobileFilterPortal } from './MobileFilterPortal/MobileFilterPortal';
import { RadioBlock } from '../FilterForm';
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
