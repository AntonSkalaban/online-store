import React, { useContext } from 'react';
import TelegramLabel from 'assets/svg/telegram.svg';
import ViberLabel from 'assets/svg/viber.svg';
import { DropdownContext } from 'components';
import './style.css';
export const ShareDropdownBody = () => {
    const { isOpen } = useContext(DropdownContext);
    const url = window.location.href;
    const text = 'Look what I found!';
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "share-dropddown__body " },
        React.createElement("div", { className: "share-tringle" }),
        React.createElement("ul", { className: "share-list" },
            React.createElement("li", { className: "share-item" },
                React.createElement("a", { target: "_blank", href: `https://t.me/share/url?url=${url}&text=${text}`, rel: "noreferrer" },
                    ' ',
                    React.createElement("img", { src: TelegramLabel }),
                    ' ')),
            React.createElement("li", { className: "share-item" },
                React.createElement("a", { target: "_blank", href: `viber://forward?text=${text} ${url}`, rel: "noreferrer" },
                    ' ',
                    React.createElement("img", { src: ViberLabel }),
                    ' ')))));
};
