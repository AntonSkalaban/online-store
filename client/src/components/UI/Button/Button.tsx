import React from 'react';
import './style.css';

interface ButtonProps {
  label: string;
  className?: string;
  disabled?: boolean;
  hanldeClick: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  disabled = false,
  hanldeClick,
}) => {
  return (
    <button className={'btn ' + className} disabled={disabled} onClick={hanldeClick}>
      {label}
    </button>
  );
};
