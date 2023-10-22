import React from 'react';
import { useSelector } from 'react-redux';
import { getDeliveryLabel, getSelectDeliveryLabel } from 'store/selectors';
import { useActions } from 'hooks';
import { delivery } from 'const';
import './style.css';

export const DeliveryList = () => {
  const { changeDelivery } = useActions();
  const selectedDelivery = useSelector(getSelectDeliveryLabel);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedDevilery = delivery.find((i) => i.name === e.target.value);
    if (!checkedDevilery) return;
    changeDelivery(checkedDevilery);
  };

  return (
    <ul className="dropdown-input-list inputs-list">
      {delivery.map((i) => {
        const isChecked = selectedDelivery === i.name;

        return (
          <li
            key={i.name}
            className={`bag-list__item ${isChecked ? 'bag-list__item_checked' : ''} `}
          >
            <label className="filter-list__label text bag_text">
              <input
                className="filter-list__input"
                type="radio"
                name="delivery"
                value={i.name}
                checked={isChecked}
                onChange={handleChange}
              />
              {getDeliveryLabel(i.name, i.price)}
            </label>
          </li>
        );
      })}
    </ul>
  );
};
