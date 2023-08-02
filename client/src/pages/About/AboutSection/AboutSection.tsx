import React from 'react';
import './style.css';

interface AboutSectionProps {
  title: string;
  children: React.ReactNode;
}
export const AboutSection: React.FC<AboutSectionProps> = ({ title, children }) => {
  return (
    <section className="about-section">
      <h4 className="section-title">{title}</h4>

      <div className="about-section__wrapper">{children}</div>
    </section>
  );
};
