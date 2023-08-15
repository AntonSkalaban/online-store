import React from 'react';
import './style.css';

interface PaginationButtonProps {
  label: string;
  hanldeClick: () => void;
}
export const PaginationButton: React.FC<PaginationButtonProps> = ({ label, hanldeClick }) => {
  return (
    <button className="pagination-btn" onClick={hanldeClick}>
      {label}
    </button>
  );
};
