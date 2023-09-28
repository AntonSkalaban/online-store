import React, { useContext } from 'react';
import ShareLabel from 'assets/svg/share.svg';
import { DropdownContext } from 'components';
export const ShareDropdownHeader = () => {
    const { toggleDropdown } = useContext(DropdownContext);
    return (React.createElement("button", { className: "share-bnt", onClick: toggleDropdown },
        React.createElement("img", { src: ShareLabel })));
};
