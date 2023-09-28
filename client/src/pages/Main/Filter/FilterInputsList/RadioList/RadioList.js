import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { updateFormState } from 'store/slice';
import { options } from './const';
export const RadioBlock = ({ title, classMode = '' }) => {
    const dispatch = useDispatch();
    const selectValue = useSelector(getFormFilterValues)[title];
    const handleChange = (e) => {
        dispatch(updateFormState({ [title]: e.target.value }));
    };
    return (React.createElement("ul", { className: 'filter__inputs-list ' + classMode }, options.map(({ value, label }) => {
        const isChecked = selectValue === value;
        return (React.createElement("li", { className: `filter-list__item ${isChecked ? 'filter-list__item_checked' : ''} input-list__item`, key: value },
            React.createElement("label", { className: "filter-list__label" },
                React.createElement("input", { className: "filter-list__input", type: "radio", name: title, value: value, checked: isChecked, onChange: handleChange }),
                label)));
    })));
};
