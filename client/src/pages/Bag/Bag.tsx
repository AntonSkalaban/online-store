import React from 'react';
import { BagHeader } from './BagHeader/BagHeader';
import { BagSubtotal } from './BagSubtotal/BagSubtotal';
import { BagAlsoLike } from './BagAlsoLike/BagAlsoLike';
import { BagItemsList } from './BagItemsList/BagItemsList';
import { BagTotal } from './BagTotal/BagTotal';
import { Wrapper } from 'components/UI';
import './style.css';

export const Bag = () => {
  return (
    <div className="bag">
      <Wrapper>
        <div className="bag__container">
          <div className="bag__main">
            <BagHeader />

            <BagItemsList />

            <BagSubtotal />

            <BagAlsoLike />
          </div>
          <div className="bag__asid">
            <BagTotal />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
