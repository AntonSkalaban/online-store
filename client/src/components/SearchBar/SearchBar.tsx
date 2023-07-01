import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { GlobalFilterValues } from '../../store/GlobalFilterSlice';
import { FilterButton } from '../../components/UI/FilterButton/FilterButton';
import './style.css';
interface SearchBarProps {
  onSubmit: (value: GlobalFilterValues) => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const searchedValue = useSelector((state: RootState) => state.globalFilterValues.searchValue);
  const [value, setValue] = useState(searchedValue);

  const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement)?.value;
    setValue(value);
  };

  const handleClick = () => {
    onSubmit({ searchValue: value });
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
      <FilterButton className="search-bar__btn" label="Find" hanldeClick={handleClick} />
    </div>
  );
};
