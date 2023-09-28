import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDelivery } from 'store/slice';
import { getDeliveryLabel, getSelectDeliveryLabel } from 'store/selectors';
import { delivery } from 'const';
import './style.css';
export const DeliveryList = () => {
    const dispatch = useDispatch();
    const selectedDelivery = useSelector(getSelectDeliveryLabel);
    const handleChange = (e) => {
        const checkedDevilery = delivery.find((i) => i.name === e.target.value);
        if (!checkedDevilery)
            return;
        dispatch(changeDelivery(checkedDevilery));
    };
    return (React.createElement("ul", { className: "dropdown-input-list input-list" }, delivery.map((i) => {
        const isChecked = selectedDelivery === i.name;
        return (React.createElement("li", { key: i.name, className: `bag-list__item ${isChecked ? 'bag-list__item_checked' : ''} ` },
            React.createElement("label", { className: "filter-list__label text bag_text" },
                React.createElement("input", { className: "filter-list__input", type: "radio", name: "delivery", value: i.name, checked: isChecked, onChange: handleChange }),
                getDeliveryLabel(i.name, i.price))));
    })));
};
