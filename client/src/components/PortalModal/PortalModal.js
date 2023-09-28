import React from 'react';
import { createPortal } from 'react-dom';
import './style.css';
export const PortalModal = ({ children, isPortalOpen, closePortal }) => {
    if (!isPortalOpen)
        return null;
    return createPortal(React.createElement("div", { className: "modal" },
        React.createElement("p", { className: "modal__close-btn", onClick: closePortal }, "X"),
        children), document.body);
};
