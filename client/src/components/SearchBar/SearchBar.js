import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateFormState, updateGlobalState } from 'store/slice';
import { getFormFilterValues, getGlobalFilterValues } from 'store/selectors';
import { CustomObject } from 'helpers';
import Search from 'assets/svg/search.svg';
import './style.css';
export const SearchBar = () => {
    const dispatch = useDispatch();
    const formFilterValues = useSelector(getFormFilterValues);
    const searchedValue = useSelector(getGlobalFilterValues).searchValue;
    const [value, setValue] = useState(searchedValue);
    const location = useLocation();
    const navigate = useNavigate();
    const changeValue = (e) => {
        const value = e.target?.value;
        setValue(value);
    };
    const findProduct = () => {
        const emptyState = CustomObject.resetAllFields(formFilterValues);
        dispatch(updateFormState(emptyState));
        dispatch(updateGlobalState({ ...emptyState, page: '0', searchValue: value }));
        if (location.pathname !== '/')
            navigate('/');
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter')
            findProduct();
    };
    return (React.createElement("div", { className: "search-bar" },
        React.createElement("input", { type: "text", className: "input search-bar__input", placeholder: "Search for items and brands", value: value, onChange: changeValue, onKeyDown: handleKeyDown }),
        React.createElement("img", { src: Search, className: "search-bar__btn", onClick: findProduct })));
};