import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues, getGlobalFilterValues } from '../../../store/selectors/inedx';
import { FormFilterValues, updateFormState, updateGlobalState } from '../../../store/slice';
import { useOnClickOutside } from '../../../hooks';
import { firstCharToUC } from '../../../helpers';
import { Button } from '../../../components/UI';
import './style.css';

interface DropdownProps {
  title: keyof FormFilterValues;
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const formFilterValues = useSelector(getFormFilterValues);
  const globalFilterValues = useSelector(getGlobalFilterValues);

  const dropdownToggle = () => setIsOpen((value) => !value);

  const hanldeApplyBtnClick = () => {
    dispatch(
      updateGlobalState({ ...formFilterValues, searchValue: globalFilterValues.searchValue })
    );
    setIsOpen(false);
  };

  const handleClearBtnClick = () => {
    const obj = { ...globalFilterValues, [title]: [] };
    dispatch(updateGlobalState(obj));
    dispatch(updateFormState(obj));
  };

  useOnClickOutside(dropDownRef, hanldeApplyBtnClick);

  const isSelect = formFilterValues[title]?.length ?? 0;

  const filterDropdownBtnClass =
    'dropdown__btn' +
    (isOpen ? ' dropdown__btn_active' : '') +
    (isSelect ? ' dropdown__btn_select' : '');

  return (
    <div className="dropdown">
      <button className={filterDropdownBtnClass} onClick={dropdownToggle}>
        <p className="dropdown__btn-title">{firstCharToUC(title)}</p>
        {isOpen ? <span>&#8964;</span> : <span>&#8963;</span>}
      </button>
      {isOpen && (
        <div className="dropdown__body">
          {isSelect > 0 && (
            <p className="dropdown__clear-btn" onClick={handleClearBtnClick}>
              Clear
            </p>
          )}
          {children}
          <Button className="filter-btn" label={'Apply filter'} hanldeClick={hanldeApplyBtnClick} />
        </div>
      )}
    </div>
  );
};
