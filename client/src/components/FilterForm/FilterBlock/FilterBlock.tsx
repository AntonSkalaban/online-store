import React from 'react';

interface FilterBlockProps {
  title: string;
  children: React.ReactNode;
}

export const FilterBlock = ({ title, children }: FilterBlockProps) => {
  return (
    <div className="filter-block">
      <p className="checkboxes__title">{title}</p>
      {children}
    </div>
  );
};
