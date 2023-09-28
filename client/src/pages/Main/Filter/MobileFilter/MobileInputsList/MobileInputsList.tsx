import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { FormFilterValues, initOpenPage, updateFormState, updateGlobalState } from 'store/slice';
import { firstCharToUC } from 'helpers';
import { FilterList } from '../../FilterInputsList/CheckboxesList/CheckboxesList';
import { FilterRange } from '../../FilterInputsList/RangeSlider/RangeSlider';
import { Button } from 'components/UI';
import ArrowLeft from 'assets/svg/arrow-prev.svg';

interface MobileFilterInputsProps {
  openFilterName: string;
  openFilterInputs: (name: string) => void;
  applyFilter: () => void;
}

export const MobileFilterInputs: React.FC<MobileFilterInputsProps> = ({
  openFilterName,
  openFilterInputs,
  applyFilter,
}) => {
  const dispatch = useDispatch();
  const formFilterValues = useSelector(getFormFilterValues);

  const isSelect = (formFilterValues[openFilterName as keyof FormFilterValues]?.length ?? 0) > 0;

  const resetFilter = () => {
    const resetedFormFilterValues = { ...formFilterValues, [openFilterName]: [] };
    dispatch(updateGlobalState({ ...resetedFormFilterValues, page: '0' }));

    dispatch(updateFormState(resetedFormFilterValues));
    dispatch(initOpenPage(0));
  };

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
        {isSelect && (
          <p className="filter-clear-btn filter-clear-btn_big" onClick={resetFilter}>
            Clear
          </p>
        )}
      </div>
      {openFilterName === 'price' ? (
        <FilterRange
          blockName={'price'}
          additionalUrlParams={{ sort: 'discountPrice-ASC' }}
          classMode="dropdown-input-list"
        />
      ) : (
        <FilterList blockName={openFilterName as keyof FormFilterValues} />
      )}{' '}
      {isSelect && (
        <Button
          className="filter-btn filter-btn_big"
          label={'Apply filter'}
          hanldeClick={() => {
            applyFilter();
            openFilterInputs('');
          }}
        />
      )}
    </>
  );
};
