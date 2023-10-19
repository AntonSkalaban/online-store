import React from 'react';
import { FilterDropdown } from '../FilterDropdown';
import { FilterList, FilterRange, RadioBlock } from '../FilterForm';

export const LaptopFilter = () => {
  return (
    <div className="filter__dropdown-container filter__dropdown-container_laptop">
      <FilterDropdown title="sort" classNameMod="filter">
        <RadioBlock title="sort" classMode="filter__inputs-list_dropdown" />
      </FilterDropdown>

      <FilterDropdown title="category" classNameMod="filter">
        <FilterList blockName={'category'} classMode="filter__inputs-list_dropdown" />
      </FilterDropdown>

      <FilterDropdown title="brand" classNameMod="filter">
        <FilterList blockName={'brand'} classMode="filter__inputs-list_dropdown" />
      </FilterDropdown>

      <FilterDropdown title="price" classNameMod="filter">
        <FilterRange
          blockName={'price'}
          additionalUrlParams={{ sort: 'discountPrice-ASC' }}
          classMode="filter__inputs-list_dropdown"
        />
      </FilterDropdown>
    </div>
  );
};
