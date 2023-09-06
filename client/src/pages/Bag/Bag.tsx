import React from 'react';
import { Wrapper } from '../../components';
import { BagHeader } from './BagHeader/BagHeader';
import { BagSubtotal } from './BagSubtotal/BagSubtotal';
import { BagAlsoLike } from './BagAlsoLike/BagAlsoLike';
import { BagItemsList } from './BagItemsList/BagItemsList';
import { BagTotal } from './BagTotal/BagTotal';
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
