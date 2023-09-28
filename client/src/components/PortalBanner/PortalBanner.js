import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './style.css';
export const PortalBanner = ({ title, isOpen, closePortal }) => {
    useEffect(() => {
        setTimeout(closePortal, 2500);
    }, [closePortal]);
    if (!isOpen)
        return null;
    return createPortal(React.createElement("section", { className: "banner" }, title), document.body);
};
