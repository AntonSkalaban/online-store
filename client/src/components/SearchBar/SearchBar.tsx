import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormState, updateGlobalState } from '../../store/slice';
import { getFormFilterValues, getGlobalFilterValues } from '../../store/selectors/inedx';
import { CustomObject } from '../../helpers';
import { Button } from '../../components/UI';
import './style.css';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const formFilterValues = useSelector(getFormFilterValues);
  const searchedValue = useSelector(getGlobalFilterValues).searchValue;

  const [value, setValue] = useState(searchedValue);

  const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement)?.value;
    setValue(value);
  };

  const hanldeBtnClick = () => {
    const emptyState = CustomObject.resetAllFields(formFilterValues);

    dispatch(updateFormState(emptyState));
    dispatch(updateGlobalState(emptyState));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="input search-bar__input"
        placeholder="Введите название..."
        value={value}
        onChange={changeValue}
      />
      <Button className="filter-btn search-bar__btn" label="Find" hanldeClick={hanldeBtnClick} />
    </div>
  );
};
