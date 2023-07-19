import { useDispatch, useSelector } from 'react-redux';
import { FilterButton } from '../../UI/FilterButton/FilterButton';
import React, { useRef, useState } from 'react';
import { FormFilterValues, updateFormState } from '../../../store/FormFilterSlice';
import { updateGlobalState } from '../../../store/GlobalFilterSlice';
import { RootState } from '../../../store/store';
import { firstCharToUC } from '../../../helpers/firstCharToUC';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import './style.css';

interface DropdownProps {
  title: keyof FormFilterValues;
  children: React.ReactNode;
}

export const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownRef = useRef<HTMLDivElement>(null);

  const dropdownToggle = () => setIsOpen((value) => !value);

  const hanldeApplyBtnClick = () => {
    changeGlobalState(formFilterValues);
    setIsOpen(false);
  };

  const handleClearBtnClick = () => {
    const obj = { ...globalFilterValues, [title]: [] };
    changeGlobalState(obj);
    changeFilterState(obj);
  };

  useOnClickOutside(dropDownRef, hanldeApplyBtnClick);

  const dispatch = useDispatch();
  const changeGlobalState = (state: FormFilterValues) => dispatch(updateGlobalState(state));
  const changeFilterState = (state: FormFilterValues) => dispatch(updateFormState(state));

  const formFilterValues = useSelector((state: RootState) => state.formFilterValues);
  const globalFilterValues = useSelector((state: RootState) => state.globalFilterValues);

  const isSelect = formFilterValues[title]?.length ?? 0;

  const filterDropdownBtnClass =
    'dropdown__btn' +
    (isOpen ? ' dropdown__btn_active' : '') +
    (isSelect ? ' dropdown__btn_select' : '');

  return (
    <div className="dropdown">
      <button className={filterDropdownBtnClass} onClick={dropdownToggle}>
        <span className="dropdown__btn-title">
          {firstCharToUC(title)}
          {isSelect > 0 && (
            <span className="dropdown__clear-btn" onClick={handleClearBtnClick}>
              X
            </span>
          )}{' '}
        </span>
        {isOpen ? <span>&#8964;</span> : <span>&#8963;</span>}
      </button>
      {isOpen && (
        <div className="dropdown__body">
          {children}
          <FilterButton label={'Apply filter'} hanldeClick={hanldeApplyBtnClick} />
        </div>
      )}
    </div>
  );
};
