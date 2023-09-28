import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { FormFilterValues, initOpenPage, updateFormState, updateGlobalState } from 'store/slice';
import { DropdownContext } from 'components';
import { Button } from 'components/UI';

interface FilterDropdownBodyProps {
  children: React.ReactNode;
  title: string;
  applyFilter: () => void;
}

export function FilterDropdownBody({ title, children, applyFilter }: FilterDropdownBodyProps) {
  const { isOpen, closeDropdown } = useContext(DropdownContext);

  const dispatch = useDispatch();
  const formFilterValues = useSelector(getFormFilterValues);

  const isSelect = (formFilterValues[title as keyof FormFilterValues]?.length ?? 0) > 0;

  const hadleApplyClick = () => {
    applyFilter();
    closeDropdown();
  };

  const resetFilter = () => {
    const resetedFormFilterValues = { ...formFilterValues, [title]: [] };
    dispatch(updateGlobalState({ ...resetedFormFilterValues, page: '0' }));

    dispatch(updateFormState(resetedFormFilterValues));
    dispatch(initOpenPage(0));
  };

  if (!isOpen) return null;

  return (
    <div className="dropdown__body">
      {isSelect && (
        <p className="filter-clear-btn" onClick={resetFilter}>
          Clear
        </p>
      )}
      {children}
      <Button className="filter-btn" label={'Apply filter'} hanldeClick={hadleApplyClick} />
    </div>
  );
}
