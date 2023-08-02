import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from '../../store/selectors';
import { updateFormState, updateGlobalState } from '../../store/slice';
import { Nav, SearchBar, Wrapper } from '../../components';
import { CustomObject } from '../../helpers';
import './style.css';

export const Header = () => {
  const dispatch = useDispatch();
  const formFilterValues = useSelector(getFormFilterValues);

  const handleClick = () => {
    const emptyState = CustomObject.resetAllFields(formFilterValues);

    dispatch(updateFormState(emptyState));
    dispatch(updateGlobalState({ ...emptyState, searchValue: '' }));
  };

  return (
    <header className="header">
      <Wrapper>
        <div className="header__container">
          <NavLink className="logo" to="/" onClick={handleClick}>
            Online-store
          </NavLink>

          <SearchBar />
          <Nav />
        </div>
      </Wrapper>
    </header>
  );
};
