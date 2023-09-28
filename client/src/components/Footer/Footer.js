import React from 'react';
import { Wrapper } from 'components/UI';
import Telegram from 'assets/svg/telegram-blue.svg';
import GitHub from 'assets/svg/github-blue.svg';
import './style.css';
export const Footer = () => {
    return (React.createElement("footer", { className: "header-footer" },
        React.createElement(Wrapper, null,
            React.createElement("div", { className: "header-footer__container" },
                React.createElement("p", { className: "footer-text" }, "Made by Anton Skalaban"),
                React.createElement("p", { className: "footer-text footer__contact" },
                    "Contact me:",
                    React.createElement("a", { href: "https://t.me/Aazzbbc", target: "_blank", rel: "noreferrer" },
                        React.createElement("img", { className: "footer__contact-logo", src: Telegram })),
                    React.createElement("a", { href: "https://github.com/AntonSkalaban", target: "_blank", rel: "noreferrer" },
                        React.createElement("img", { className: "footer__contact-logo", src: GitHub }))),
                React.createElement("p", { className: "footer-text" }, "2023")))));
};
