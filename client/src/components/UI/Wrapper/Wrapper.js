import React from 'react';
import './style.css';
export const Wrapper = ({ children }) => {
    return React.createElement("div", { className: "wrapper" }, children);
};
