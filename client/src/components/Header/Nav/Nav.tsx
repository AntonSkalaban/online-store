import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBagItemsTotalQuantity } from 'store/selectors';
import BagLogo from 'assets/svg/bag.svg';
import './style.css';

export const Nav = () => {
  const itemsInBag = useSelector(getBagItemsTotalQuantity);

  return (
    <nav className="nav">
      <NavLink className="bag__link" to="/bag">
        <img src={BagLogo} />
        {itemsInBag > 0 && <span className="bag__quantity">{itemsInBag}</span>}
      </NavLink>
    </nav>
  );
};
