import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

interface WhiteSectionProps {
  title?: string;
  subtitle?: string;
  isSubtitleLink?: string;
  children?: React.ReactNode;
}

export const WhiteSection: React.FC<WhiteSectionProps> = ({
  title,
  subtitle,
  isSubtitleLink,
  children,
}) => {
  return (
    <div className="bag-section">
      <div className="bag-section__header">
        {' '}
        <h3
          className={`bag-section__title ${subtitle || children ? '' : 'bag-section__title_left'}`}
        >
          {title}
        </h3>
        {isSubtitleLink ? (
          <NavLink className="bag-section__link" to="/bag">
            {' '}
            <p className="bag-section__text"> {subtitle}</p>
          </NavLink>
        ) : (
          subtitle && <p className="bag-section__text"> {subtitle}</p>
        )}
      </div>

      {children && <div className="bag-section__body">{children}</div>}
    </div>
  );
};
