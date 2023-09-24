import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDelivery } from 'store/slice';
import { getDeliveryLabel, getSelectDeliveryLabel } from 'store/selectors';
import { delivery } from 'const';
import './style.css';

export const DeliveryList = () => {
  const dispatch = useDispatch();
  const selectedDelivery = useSelector(getSelectDeliveryLabel);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedDevilery = delivery.find((i) => i.name === e.target.value);
    if (!checkedDevilery) return;
    dispatch(changeDelivery(checkedDevilery));
  };

  return (
    <ul className="input-list">
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
