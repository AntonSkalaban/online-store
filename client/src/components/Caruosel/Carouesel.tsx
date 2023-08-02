import React, { Children, useState } from 'react';
import { CarouselButtonLeft, CarouselButtonRight } from '../../components/UI';
import './style.css';

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [leftShiftValue, setLeftShiftValue] = useState(0);

  const itemsPerSlide = 4;
  const slidesAmount = Math.floor(Children.count(children) / itemsPerSlide);
  const currentSlideNumber = Math.floor(leftShiftValue / -100);

  const isLeftBtnDisabled = leftShiftValue === 0;
  const isRightBtnDisabled = !(currentSlideNumber < slidesAmount - 1);

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
      <div className="carousel__container">
        <div className="images__container" style={carueselContainerStyles}>
          {Children.toArray(children)}
        </div>
      </div>
      <CarouselButtonLeft
        className="out-side__btn"
        isDisabled={isLeftBtnDisabled}
        hanldeClick={moveLeft}
      />
      <CarouselButtonRight
        className="out-side__btn_next"
        isDisabled={isRightBtnDisabled}
        hanldeClick={moveRight}
      />
    </div>
  );
};
