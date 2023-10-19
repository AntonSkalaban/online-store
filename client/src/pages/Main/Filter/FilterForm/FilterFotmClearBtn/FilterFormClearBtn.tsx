import React from 'react';
import { useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { FormFilterValues } from 'store/slice';
import { useActions } from 'hooks/useAction';
import './style.css';

interface FilterFormClearBtnProps {
  openFilterName: keyof FormFilterValues;
  classNameMode: string;
}

export const FilterFormClearBtn: React.FC<FilterFormClearBtnProps> = ({
  openFilterName,
  classNameMode = '',
}) => {
  const { resetFilterValue } = useActions();
  const formFilterValues = useSelector(getFormFilterValues);

  const isSelect = (formFilterValues[openFilterName]?.length ?? 0) > 0;

  const handleClearBtnClick = () => {
    resetFilterValue({ [openFilterName]: [] });
  };

  return (
    <>
      {isSelect && (
        <p className={'filter-clear-btn ' + classNameMode} onClick={handleClearBtnClick}>
          Clear
        </p>
      )}
    </>
  );
};
