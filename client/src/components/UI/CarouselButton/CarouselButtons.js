import React from 'react';
import './style.css';
export const CarouselButtonLeft = ({ className = '', isDisabled = false, hanldeClick, }) => {
    return (React.createElement("button", { className: `carusel__btn carusel__btn_prev ${className}`, disabled: isDisabled, onClick: hanldeClick }));
};
export const CarouselButtonRight = ({ className = '', isDisabled = false, hanldeClick, }) => {
    return (React.createElement("button", { className: `carusel__btn carusel__btn_next ${className}`, disabled: isDisabled, onClick: hanldeClick }));
};
