import React from 'react';
import './style.css';

interface FilterButtonProps {
  label: string;
  className?: string;
  hanldeClick: () => void;
}
export const FilterButton = ({ label, className, hanldeClick }: FilterButtonProps) => {
  return (
    <button className={'filter-btn ' + className} onClick={hanldeClick}>
      {label}
    </button>
  );
};
