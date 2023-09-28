import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { updateFormState } from 'store/slice';
import { withFetchingFilterBlock } from 'hok';
import './style.css';
export const RangeSlider = ({ data, blockName, classMode = '' }) => {
    const dispatch = useDispatch();
    const selectValues = useSelector(getFormFilterValues).price;
    const [min, max] = [data[0], data[data.length - 1]];
    const [minVal, maxVal] = selectValues?.length ? selectValues : [min, max];
    const handleChange = (e) => {
        const target = e.target;
        const name = target.dataset.name;
        const value = target.value;
        const differenseNumbers = data.map((rangeVal) => Math.abs(+rangeVal - +value));
        const minDifferense = Math.min(...differenseNumbers);
        const newValue = String(data[differenseNumbers.indexOf(minDifferense)]);
        if (name === 'min') {
            if (+value > +maxVal)
                return;
            dispatch(updateFormState({ [blockName]: [newValue, maxVal] }));
        }
        else {
            if (+value < +minVal)
                return;
            dispatch(updateFormState({ [blockName]: [minVal, newValue] }));
        }
    };
    return (React.createElement("div", { className: 'dual-range filter__inputs-list ' + classMode },
        ' ',
        React.createElement("div", { className: `range-${blockName}` },
            React.createElement("p", { className: `min-${blockName}` },
                "$",
                minVal),
            React.createElement("p", { className: `max-${blockName}` },
                "$",
                maxVal)),
        React.createElement("div", { className: "range-input" },
            React.createElement("input", { type: "range", className: "min", "data-name": "min", min: min, max: max, value: minVal, onChange: handleChange }),
            React.createElement("input", { type: "range", className: "max", "data-name": "max", min: min, max: max, value: maxVal, onChange: handleChange }))));
};
export const FilterRange = withFetchingFilterBlock(RangeSlider);
