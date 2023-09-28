import React from 'react';
import { useSelector } from 'react-redux';
import { getBagItemsTotalQuantity } from 'store/selectors';
import { WhiteSection } from 'components/UI';
export const BagHeader = () => {
    const bagItemsTotalQuantity = useSelector(getBagItemsTotalQuantity);
    return React.createElement(WhiteSection, { title: 'My Bag', subtitle: `${bagItemsTotalQuantity} items` });
};
