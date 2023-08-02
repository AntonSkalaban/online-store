import React from 'react';
import './style.css';

interface CarouselButtonProps {
  hanldeClick: () => void;
  isDisabled?: boolean;
  className?: string;
}

export const CarouselButtonLeft: React.FC<CarouselButtonProps> = ({
  className = '',
  isDisabled = false,
  hanldeClick,
}) => {
  return (
    <button
      className={`carusel__btn carusel__btn_prev ${className}`}
      disabled={isDisabled}
      onClick={hanldeClick}
    />
  );
};

export const CarouselButtonRight: React.FC<CarouselButtonProps> = ({
  className = '',
  isDisabled = false,
  hanldeClick,
}: CarouselButtonProps) => {
  return (
    <button
      className={`carusel__btn carusel__btn_next ${className}`}
      disabled={isDisabled}
      onClick={hanldeClick}
    />
  );
};
