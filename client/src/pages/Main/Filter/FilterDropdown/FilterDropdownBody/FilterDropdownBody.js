import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { initOpenPage, updateFormState, updateGlobalState } from 'store/slice';
import { DropdownContext } from 'components';
import { Button } from 'components/UI';
export function FilterDropdownBody({ title, children, applyFilter }) {
    const { isOpen, closeDropdown } = useContext(DropdownContext);
    const dispatch = useDispatch();
    const formFilterValues = useSelector(getFormFilterValues);
    const isSelect = (formFilterValues[title]?.length ?? 0) > 0;
    const hadleApplyClick = () => {
        applyFilter();
        closeDropdown();
    };
    const resetFilter = () => {
        const resetedFormFilterValues = { ...formFilterValues, [title]: [] };
        dispatch(updateGlobalState({ ...resetedFormFilterValues, page: '0' }));
        dispatch(updateFormState(resetedFormFilterValues));
        dispatch(initOpenPage(0));
    };
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "dropdown__body" },
        isSelect && (React.createElement("p", { className: "filter-clear-btn", onClick: resetFilter }, "Clear")),
        children,
        React.createElement(Button, { className: "filter-btn", label: 'Apply filter', hanldeClick: hadleApplyClick })));
}
