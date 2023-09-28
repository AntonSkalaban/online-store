import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { updateFormState } from 'store/slice';
import { firstCharToUC } from 'helpers';
import { withFetchingFilterBlock } from 'hok';
export const CheckboxesList = ({ blockName, data, classMode = '', }) => {
    const dispatch = useDispatch();
    const checkedCheckboxes = useSelector(getFormFilterValues)[blockName] ?? [];
    const handleChange = (e) => {
        const name = e.target.name;
        const itemIndex = checkedCheckboxes.indexOf(name);
        const stateCopy = [...checkedCheckboxes];
        if (itemIndex === -1) {
            stateCopy.push(name);
        }
        else {
            stateCopy.splice(itemIndex, 1);
        }
        dispatch(updateFormState({ [blockName]: stateCopy }));
    };
    return (React.createElement("ul", { className: 'filter__inputs-list ' + classMode }, data.sort().map((name) => {
        const isChecked = checkedCheckboxes.includes(name);
        return (React.createElement("li", { className: `filter-list__item ${isChecked ? 'filter-list__item_checked' : ''} input-list__item`, key: name },
            React.createElement("label", { className: "filter-list__label" },
                React.createElement("input", { className: "filter-list__input", type: "checkbox", name: name, checked: isChecked, onChange: handleChange }),
                firstCharToUC(name))));
    })));
};
export const FilterList = withFetchingFilterBlock(CheckboxesList);
