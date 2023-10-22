import React from 'react';
import { firstCharToUC } from 'helpers';

interface MobileFilterListProps {
  openFilterInputs: (name: string) => void;
}

export const MobileFilterList: React.FC<MobileFilterListProps> = ({ openFilterInputs }) => {
  const filterNames = ['category', 'brand', 'price'];

  return (
    <>
      <div className="mobile-filter__header">
        {' '}
        <h2 className="mobile-filter__title">Filter</h2>
      </div>

      <ul>
        {filterNames.map((filterName) => {
          return (
            <li
              className="mobile-filter__text"
              key={filterName}
              onClick={() => openFilterInputs(filterName)}
            >
              {firstCharToUC(filterName)}
            </li>
          );
        })}
      </ul>
    </>
  );
};
