import React from 'react';
import './style.css';

interface BagSectionProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const BagSection: React.FC<BagSectionProps> = ({ title, subtitle, children }) => {
  return (
    <div className="bag-section">
      <div className="bag-section__header">
        {' '}
        <h3
          className={`bag-section__title ${subtitle || children ? '' : 'bag-section__title_left'}`}
        >
          {title}
        </h3>
        <p className="bag-section__text"> {subtitle}</p>
      </div>

      {children && <div className="bag-section__body">{children}</div>}
    </div>
  );
};
