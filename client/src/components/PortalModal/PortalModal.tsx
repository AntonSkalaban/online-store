import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './style.css';

interface PortalModalProps {
  children?: ReactNode | JSX.Element;
  closePortal: () => void;
  isPortalOpen: boolean;
}

export const PortalModal = ({ children, isPortalOpen, closePortal }: PortalModalProps) => {
  if (!isPortalOpen) return null;

  return createPortal(
    <div className="modal">
      <p className="modal__close-btn" onClick={closePortal}>
        X
      </p>
      {children}
    </div>,
    document.body
  );
};
