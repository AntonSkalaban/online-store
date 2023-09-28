import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { initOpenPage, updateFormState, updateGlobalState } from 'store/slice';
import { firstCharToUC } from 'helpers';
import { FilterList } from '../../FilterInputsList/CheckboxesList/CheckboxesList';
import { FilterRange } from '../../FilterInputsList/RangeSlider/RangeSlider';
import { Button } from 'components/UI';
import ArrowLeft from 'assets/svg/arrow-prev.svg';
export const MobileFilterInputs = ({ openFilterName, openFilterInputs, applyFilter, }) => {
    const dispatch = useDispatch();
    const formFilterValues = useSelector(getFormFilterValues);
    const isSelect = (formFilterValues[openFilterName]?.length ?? 0) > 0;
    const resetFilter = () => {
        const resetedFormFilterValues = { ...formFilterValues, [openFilterName]: [] };
        dispatch(updateGlobalState({ ...resetedFormFilterValues, page: '0' }));
        dispatch(updateFormState(resetedFormFilterValues));
        dispatch(initOpenPage(0));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mobile-filter__header" },
            React.createElement("h2", { className: "mobile-filter__title" },
                ' ',
                React.createElement("img", { className: "mobile-filter__arrow", src: ArrowLeft, onClick: () => openFilterInputs('') }),
                firstCharToUC(openFilterName)),
            isSelect && (React.createElement("p", { className: "filter-clear-btn filter-clear-btn_big", onClick: resetFilter }, "Clear"))),
        openFilterName === 'price' ? (React.createElement(FilterRange, { blockName: 'price', additionalUrlParams: { sort: 'discountPrice-ASC' }, classMode: "dropdown-input-list" })) : (React.createElement(FilterList, { blockName: openFilterName })),
        ' ',
        isSelect && (React.createElement(Button, { className: "filter-btn filter-btn_big", label: 'Apply filter', hanldeClick: () => {
                applyFilter();
                openFilterInputs('');
            } }))));
};
