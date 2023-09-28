import React from 'react';
import { useDispatch } from 'react-redux';
import { changeBagItemQuantity } from '../../../../store/slice';
import { CustomArray } from '../../../../helpers';
import './style.css';
export const QuantityList = ({ productId, quantity }) => {
    const dispatch = useDispatch();
    const options = CustomArray.create(10, 1);
    const handleChange = (e) => {
        dispatch(changeBagItemQuantity({ id: productId, quantity: +e.target.value }));
    };
    return (React.createElement("ul", { className: "dropdown-input-list_bag dropdown-input-list input-list" }, options.map((num) => {
        const isChecked = quantity === num;
        return (React.createElement("li", { key: num, className: `bag-list__item ${isChecked ? 'bag-list__item_checked' : ''} ` },
            React.createElement("label", { className: "filter-list__label text text_bag" },
                React.createElement("input", { className: "filter-list__input", type: "radio", name: productId, value: num, checked: isChecked, onChange: handleChange }),
                num)));
    })));
};
