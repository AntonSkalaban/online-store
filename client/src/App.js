import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeDelivery, initBagState, initResentlyViewedState } from './store/slice';
import { LocalStorage } from './services';
import { delivery } from './const';
import { Main, About, Bag, Checkout, NotFound } from './pages';
import { Layout } from './components/Layout';
import './App.css';
export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initResentlyViewedState(LocalStorage.getArray('recentlyViewed')));
        dispatch(initBagState(LocalStorage.getArray('bagItems')));
        dispatch(changeDelivery(delivery[0]));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Layout, null) },
            React.createElement(Route, { index: true, element: React.createElement(Main, null) }),
            React.createElement(Route, { path: "about/:id", element: React.createElement(About, null) }),
            React.createElement(Route, { path: "bag", element: React.createElement(Bag, null) }),
            React.createElement(Route, { path: "checkout", element: React.createElement(Checkout, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) }))));
};
