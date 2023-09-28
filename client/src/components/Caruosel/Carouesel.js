import React, { Children, useRef, useState } from 'react';
import { useGetWidth } from 'hooks';
import { CarouselButtonLeft, CarouselButtonRight } from 'components/UI';
import './style.css';
export const Carousel = ({ children }) => {
    const [leftShiftValue, setLeftShiftValue] = useState(0);
    const blockRef = useRef(null);
    const carouselWidth = useGetWidth(blockRef);
    const itemsPerSlide = Math.floor((carouselWidth - 80) / 180);
    const currentSlideNumber = Math.floor(leftShiftValue / -100) + 1;
    const slidesAmount = Math.ceil(Children.count(children) / itemsPerSlide);
    const isLeftBtnDisabled = leftShiftValue === 0;
    const isRightBtnDisabled = slidesAmount <= currentSlideNumber;
    const carueselContainerStyles = {
        width: String(itemsPerSlide * 200) + 'px',
    };
    const carueselImagesContainerStyles = {
        left: `${leftShiftValue}%`,
        transition: 'all ease-in-out 1s',
    };
    const moveRight = () => {
        setLeftShiftValue(leftShiftValue - 100);
    };
    const moveLeft = () => {
        setLeftShiftValue(leftShiftValue + 100);
    };
    return (React.createElement("div", { className: "carousel", ref: blockRef },
        React.createElement("div", { className: "carousel__container", style: carueselContainerStyles },
            React.createElement("div", { className: "images__container", style: carueselImagesContainerStyles }, Children.toArray(children))),
        React.createElement(CarouselButtonLeft, { className: "out-side__btn", isDisabled: isLeftBtnDisabled, hanldeClick: moveLeft }),
        React.createElement(CarouselButtonRight, { className: "out-side__btn_next", isDisabled: isRightBtnDisabled, hanldeClick: moveRight })));
};
