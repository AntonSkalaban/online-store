import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
export const Layout = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement(Outlet, null),
        React.createElement(Footer, null)));
};
