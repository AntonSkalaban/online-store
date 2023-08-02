import React, { useEffect, useState } from 'react';
import './style.css';

interface BannerProps {
  title: string;
}
export const Banner: React.FC<BannerProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  useEffect(() => {
    toggle();
  }, []);

  if (!isOpen) return null;
  return <section className="banner">{title}</section>;
};
