import React from 'react';
import { useDispatch } from 'react-redux';
import { changeBagItemQuantity } from '../../../../store/slice';
import { CustomArray } from '../../../../helpers';
import './style.css';

interface BagInputListProps {
  productId: string;
  quantity: number;
}

export const QuantityList: React.FC<BagInputListProps> = ({ productId, quantity }) => {
  const dispatch = useDispatch();

  const options = CustomArray.create(10, 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeBagItemQuantity({ id: productId, quantity: +e.target.value }));
  };

  return (
    <ul className="dropdown-input-list_bag dropdown-input-list inputs-list">
      {options.map((num) => {
        const isChecked = quantity === num;

        return (
          <li key={num} className={`bag-list__item ${isChecked ? 'bag-list__item_checked' : ''} `}>
            <label className="filter-list__label text text_bag">
              <input
                className="filter-list__input"
                type="radio"
                name={productId}
                value={num}
                checked={isChecked}
                onChange={handleChange}
              />
              {num}
            </label>
          </li>
        );
      })}
    </ul>
  );
};
