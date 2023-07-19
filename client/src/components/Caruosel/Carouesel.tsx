import React, { Children, useState } from 'react';
import {
  CarouselButtonLeft,
  CarouselButtonRight,
} from '../../components/UI/CarouselButton/CarouselButtons';
import './style.css';

interface CarouselProps {
  children?: React.ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const [leftShiftValue, setLeftShiftValue] = useState(0);
  const itemsPerSlide = 4;
  const isLeftBtnDisabled = leftShiftValue >= 0;
  const isRightBtnDisabled =
    Math.floor(Children.count(children) / itemsPerSlide) !== leftShiftValue / -100 + 1;

  const carueselContainerStyles = {
    left: `${leftShiftValue}%`,
    transition: 'all ease-in-out 1s',
  };

  const moveRight = () => {
    setLeftShiftValue(leftShiftValue - 100);
  };

  const moveLeft = () => {
    setLeftShiftValue(leftShiftValue + 100);
  };

  return (
    <div className="carousel">
      <div className="carousel__container" style={carueselContainerStyles}>
        {Children.toArray(children)}
      </div>
      <CarouselButtonLeft isDisabled={isLeftBtnDisabled} hanldeClick={moveLeft} />
      <CarouselButtonRight isDisabled={isRightBtnDisabled} hanldeClick={moveRight} />
    </div>
  );
};
