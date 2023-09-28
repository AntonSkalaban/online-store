import React from 'react';
import './style.css';
export const AboutSection = ({ title, children }) => {
    return (React.createElement("section", { className: "about-section" },
        React.createElement("h4", { className: "about-section__title" }, title),
        React.createElement("div", { className: "about-section__wrapper" }, children)));
};
