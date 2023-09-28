import React from 'react';
import { PromoForm } from './PromoForm/PromoForm';
import { AddressForm } from './AddressForm/AddressForm';
import { CheckoutAsid } from './CheckoutAsid/CheckoutAsid';
import { WhiteSection, Wrapper } from 'components/UI';
import './style.css';

export const Checkout = () => {
  return (
    <div className="checkout page_gray">
      <Wrapper>
        <div className="page-section__container">
          <div className="page-section__main">
            <PromoForm />
            <WhiteSection title={'Delivery address'}>
              <AddressForm />
            </WhiteSection>
          </div>

          <div className="page-section__asid">
            <CheckoutAsid />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
