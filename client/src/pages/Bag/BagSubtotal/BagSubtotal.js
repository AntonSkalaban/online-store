import React from 'react';
import { useSelector } from 'react-redux';
import { getBagItemsTotalPrice } from 'store/selectors';
import { WhiteSection } from 'components/UI';
export const BagSubtotal = () => {
    const bagItemsTotalSum = useSelector(getBagItemsTotalPrice);
    return React.createElement(WhiteSection, { title: `sub-total $${bagItemsTotalSum}` });
};
