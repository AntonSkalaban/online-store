import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { GlobalFilterValues, updateGlobalState } from '../../store/GlobalFilterSlice';
import { FilterButton } from '../../components/UI/FilterButton/FilterButton';
import './style.css';
import { FormFilterValues, updateFormState } from '../../store/FormFilterSlice';
import { CustomObject } from '../../helpers/CustomObject';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const changeGlobalState = (state: GlobalFilterValues) => dispatch(updateGlobalState(state));
  const changeFormState = (state: FormFilterValues) => dispatch(updateFormState(state));
  const formFilterValues = useSelector((state: RootState) => state.formFilterValues);

  const searchedValue = useSelector((state: RootState) => state.globalFilterValues.searchValue);
  const [value, setValue] = useState(searchedValue);

  const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement)?.value;
    setValue(value);
  };

  const hanldeBtnClick = () => {
    const emptyState = CustomObject.resetAllFields(formFilterValues);

    changeFormState(emptyState);
    changeGlobalState({ ...emptyState, searchValue: value });
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
      <FilterButton className="search-bar__btn" label="Find" hanldeClick={hanldeBtnClick} />
    </div>
  );
};
