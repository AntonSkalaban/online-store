import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getGlobalFilterValues } from 'store/selectors';
import { useActions, useChangeUrlPath } from 'hooks';
import Search from 'assets/svg/search.svg';
import './style.css';

export const SearchBar = () => {
  const { updateSearchBarValue } = useActions();
  const { changeUrlPath } = useChangeUrlPath();

  const searchedValue = useSelector(getGlobalFilterValues).searchValue;

  const [value, setValue] = useState(searchedValue);

  const searchProduct = () => {
    updateSearchBarValue({ searchValue: value });
    changeUrlPath('/');
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement)?.value;
    setValue(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') searchProduct();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="input search-bar__input"
        placeholder="Search for items and brands"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <img src={Search} className="search-bar__btn" onClick={searchProduct} />
    </div>
  );
};
