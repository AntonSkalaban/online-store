import React from 'react';
import { RadioBlock } from '../FilterInputsList/RadioList/RadioList';
import { FilterDropdown } from '../FilterDropdown';
import { FilterRange } from '../FilterInputsList/RangeSlider/RangeSlider';
import { FilterList } from '../FilterInputsList/CheckboxesList/CheckboxesList';

export const LaptopFilter = () => {
  return (
    <div className="filter__dropdown-container filter__dropdown-container_laptop">
      <FilterDropdown title="sort" classNameMod="filter">
        <RadioBlock title="sort" classMode="dropdown-input-list" />
      </FilterDropdown>

      <FilterDropdown title="category" classNameMod="filter">
        <FilterList blockName={'category'} classMode="dropdown-input-list" />
      </FilterDropdown>

      <FilterDropdown title="brand" classNameMod="filter">
        <FilterList blockName={'brand'} classMode="dropdown-input-list" />
      </FilterDropdown>

      <FilterDropdown title="price" classNameMod="filter">
        <FilterRange
          blockName={'price'}
          additionalUrlParams={{ sort: 'discountPrice-ASC' }}
          classMode="dropdown-input-list"
        />
      </FilterDropdown>
    </div>
  );
};
