import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initOpenPage, updateGlobalState } from 'store/slice';
import { getFormFilterValues } from 'store/selectors';
import { MobileFilterList } from '../MobileFilterList/MobileFilterList';
import { MobileFilterInputs } from '../MobileInputsList/MobileInputsList';
import './style.css';
export const MobileFilterPortal = ({ isOpen, closePortal }) => {
    const dispatch = useDispatch();
    const formFilterValues = useSelector(getFormFilterValues);
    const [openFilterName, setOpenFilterName] = useState('');
    const applyFilter = () => {
        dispatch(updateGlobalState({
            ...formFilterValues,
            page: '0',
        }));
        dispatch(initOpenPage(0));
    };
    if (!isOpen)
        return null;
    return createPortal(React.createElement("section", { className: "mobile-filter-list" },
        React.createElement("div", { className: "mobile-filter-list__controller-container" },
            ' ',
            React.createElement("p", { className: "mobile-filter-list__close-btn ", onClick: () => {
                    applyFilter();
                    closePortal();
                } }, "X")),
        React.createElement("div", { className: "mobile-filter-list__content-container" }, openFilterName ? (React.createElement(MobileFilterInputs, { openFilterName: openFilterName, openFilterInputs: setOpenFilterName, applyFilter: applyFilter })) : (React.createElement(MobileFilterList, { openFilterInputs: setOpenFilterName })))), document.body);
};
