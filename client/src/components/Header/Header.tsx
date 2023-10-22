import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from 'components/UI';
import { SearchBar } from './SearchBar';
import { Nav } from './Nav';
import './style.css';

export const Header = () => {
  return (
    <header className="header-footer">
      <Wrapper>
        <div className="header-footer__container">
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
