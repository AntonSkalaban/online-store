import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { initOpenPage, updateGlobalState } from 'store/slice';
import { Dropdown } from 'components';
import './style.css';
export const FilterDropdown = ({ title, children, classNameMod, }) => {
    const dispatch = useDispatch();
    const formFilterValues = useSelector(getFormFilterValues);
    const applyFilter = () => {
        dispatch(updateGlobalState({
            ...formFilterValues,
            page: '0',
        }));
        dispatch(initOpenPage(0));
    };
    return (React.createElement(Dropdown, { classNameMod: classNameMod, refCallback: applyFilter },
        React.createElement(Dropdown.FilterHeader, { title: title }),
        React.createElement(Dropdown.FilterBody, { title: title, applyFilter: applyFilter }, children)));
};
