import React from 'react';
import './style.css';
export const Button = ({ label, className = '', disabled = false, hanldeClick, }) => {
    return (React.createElement("button", { className: 'btn ' + className, disabled: disabled, onClick: hanldeClick }, label));
};
