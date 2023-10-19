import React from 'react';
import { FormFilterValues } from 'store/slice';
import { firstCharToUC } from 'helpers';
import { FilterFormApplyBtn, FilterFormClearBtn, FilterList, FilterRange } from '../../FilterForm';
import ArrowLeft from 'assets/svg/arrow-prev.svg';

interface MobileFilterInputsProps {
  openFilterName: keyof FormFilterValues;
  openFilterInputs: (name: string) => void;
  callback: () => void;
}

export const MobileFilterInputs: React.FC<MobileFilterInputsProps> = ({
  openFilterName,
  openFilterInputs,
  callback,
}) => {
  return (
    <>
      <div className="mobile-filter__header">
        <h2 className="mobile-filter__title">
          {' '}
          <img
            className="mobile-filter__arrow"
            src={ArrowLeft}
            onClick={() => openFilterInputs('')}
          />
          {firstCharToUC(openFilterName)}
        </h2>

        <FilterFormClearBtn openFilterName={openFilterName} classNameMode="filter-clear-btn_big" />
      </div>
      {openFilterName === 'price' ? (
        <FilterRange
          blockName={'price'}
          additionalUrlParams={{ sort: 'discountPrice-ASC' }}
          classMode="dropdown-input-list"
        />
      ) : (
        <FilterList blockName={openFilterName} />
      )}{' '}
      <FilterFormApplyBtn classNameMode="filter-btn_big" callback={callback} />
    </>
  );
};
