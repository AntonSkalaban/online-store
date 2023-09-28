import React, { useState } from 'react';
import { promo } from 'const';
import { PortalBanner } from 'components';
import Label from 'assets/svg/label.svg';
import './style.css';
export const Promo = () => {
    const [isCopyed, setIsCopyed] = useState(false);
    const copy = async () => {
        await navigator.clipboard.writeText(promo);
        setIsCopyed(true);
    };
    return (React.createElement("div", { className: "promo" },
        React.createElement(PortalBanner, { title: 'Copyed', isOpen: isCopyed, closePortal: () => setIsCopyed(false) }),
        React.createElement("img", { className: "promo__label", src: Label }),
        React.createElement("p", { className: "text text_bag" },
            "NEW HERE? ",
            React.createElement("br", null),
            "Get 15% off almost everything! ",
            React.createElement("br", null),
            "With code:",
            ' ',
            React.createElement("strong", { className: "promo__promocode", onClick: copy }, promo))));
};
