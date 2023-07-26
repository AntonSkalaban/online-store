import React from 'react';
import './style.css';

interface ButtonProps {
  label: string;
  className?: string;
  hanldeClick: () => void;
}
export const Button: React.FC<ButtonProps> = ({ label, className, hanldeClick }) => {
  return (
    <button className={'btn ' + className} onClick={hanldeClick}>
      {label}
    </button>
  );
};
