import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { firstCharToUC } from '../../../helpers';
import { GlobalFilterValues, updateGlobalState } from '../../../store/slice/GlobalFilterSlice';
import './style.css';

interface NavRowProps {
  category: string;
  brand: string;
  title: string;
}

export const NavRow = ({ category, brand, title }: NavRowProps) => {
  const dispatch = useDispatch();

  const hanldeNavLinkClick = (value: GlobalFilterValues) => {
    dispatch(updateGlobalState(value));
  };

  return (
    <div className="nav-row">
      <NavLink
        to={`/`}
        className="nav-row__link"
        onClick={() => hanldeNavLinkClick({ category: [category] })}
      >
        {firstCharToUC(category)}
      </NavLink>
      {'>'}
      <NavLink
        to={`/`}
        className="nav-row__link"
        onClick={() => hanldeNavLinkClick({ category: [], brand: [brand] })}
      >
        {brand}
      </NavLink>
      {'>'}
      <p>{title}</p>
    </div>
  );
};
