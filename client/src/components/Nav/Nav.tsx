import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBagItemsQuantity } from '../../store/selectors';
import BagLogo from '../../assets/svg/bag.svg';
import './style.css';

export const Nav = () => {
  const itemsInBag = useSelector(getBagItemsQuantity);

  return (
    <nav className="nav">
      <NavLink className="bag__link" to="/cart">
        <img src={BagLogo} />
        {itemsInBag > 0 && <span className="bag__quantity">{itemsInBag}</span>}
      </NavLink>
    </nav>
  );
};
