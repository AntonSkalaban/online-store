import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './style.css';

interface PortalBannerProps {
  title: string;
  isOpen: boolean;
  closePortal: () => void;
}

export const PortalBanner: React.FC<PortalBannerProps> = ({ title, isOpen, closePortal }) => {
  useEffect(() => {
    setTimeout(closePortal, 2500);
  }, [closePortal]);

  if (!isOpen) return null;
  return createPortal(<section className="banner">{title}</section>, document.body);
};
