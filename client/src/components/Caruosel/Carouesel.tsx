import React, { Children, useEffect, useRef, useState } from 'react';
import { CarouselButtonLeft, CarouselButtonRight } from 'components/UI';
import './style.css';

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [leftShiftValue, setLeftShiftValue] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const blockRef = useRef<HTMLDivElement>(null);

  const resizeHandler = () => {
    if (!blockRef.current) return;
    const width = blockRef.current.getBoundingClientRect().width;
    setCarouselWidth(width);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const itemsPerSlide = Math.floor((carouselWidth - 80) / 180);

  const currentSlideNumber = Math.floor(leftShiftValue / -100);
  const slidesAmount = Math.floor((Children.count(children) - 1) / itemsPerSlide);

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

  return (
    <div className="carousel" ref={blockRef}>
      <div className="carousel__container" style={carueselContainerStyles}>
        <div className="images__container" style={carueselImagesContainerStyles}>
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
