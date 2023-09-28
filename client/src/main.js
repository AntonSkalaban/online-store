import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(React.StrictMode, null,
    React.createElement(Provider, { store: store },
        React.createElement(BrowserRouter, null,
            React.createElement(App, null)))));
