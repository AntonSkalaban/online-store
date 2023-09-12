import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, SearchBar } from 'components';
import { Wrapper } from 'components/UI';
import './style.css';

export const Header = () => {
  return (
    <header className="header">
      <Wrapper>
        <div className="header__container">
          <NavLink className="logo" to="/">
            Online-store
          </NavLink>

          <SearchBar />
          <Nav />
        </div>
      </Wrapper>
    </header>
  );
};
