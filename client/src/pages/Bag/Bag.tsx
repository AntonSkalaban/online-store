import React from 'react';
import { useSelector } from 'react-redux';
import { getBagItems } from 'store/selectors';
import { BagHeader } from './BagHeader/BagHeader';
import { BagSubtotal } from './BagSubtotal/BagSubtotal';
import { BagAlsoLike } from './BagAlsoLike/BagAlsoLike';
import { BagItemsList } from './BagItemsList/BagItemsList';
import { BagTotal } from './BagTotal/BagTotal';
import { Wrapper } from 'components/UI';
import './style.css';

export const Bag = () => {
  const bagItems = useSelector(getBagItems);

  return (
    <div className="bag page_gray">
      <Wrapper>
        {!bagItems.length ? (
          <p className="bag__empty-msg">No items yet..(</p>
        ) : (
          <div className="page-section__container">
            <div className="page-section__main">
              <BagHeader />

              <BagItemsList />

              <BagSubtotal />

              <BagAlsoLike />
            </div>
            <div className="page-section__asid">
              <BagTotal />
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
};
