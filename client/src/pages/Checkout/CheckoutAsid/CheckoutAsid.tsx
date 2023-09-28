import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getAddressStatus,
  getBagItemsTotalPrice,
  getCheckoutItems,
  getDeliveryPrice,
  getIsPromoApplied,
} from 'store/selectors';
import { getDiscount } from 'helpers';
import { CheckoutItemsList } from './CheckoutItemsList/CheckoutItemsList';
import { CheckoutModal } from '../CheckoutModal/CheckoutModal';
import { Button, WhiteSection } from 'components/UI';
import { PortalModal } from 'components';

export const CheckoutAsid = () => {
  const checkoutItems = useSelector(getCheckoutItems);
  const productsPrice = useSelector(getBagItemsTotalPrice);
  const deliveryPrice = useSelector(getDeliveryPrice);
  const isPromoApplied = useSelector(getIsPromoApplied);
  const isAddressApplied = useSelector(getAddressStatus);

  const totalProductsPrice = isPromoApplied ? getDiscount(productsPrice, 15) : productsPrice;
  const totalPrice = totalProductsPrice + deliveryPrice;

  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const hanldeBuyBtnClick = () => {
    if (!isAddressApplied) return;
    setIsPortalOpen(true);
  };

  return (
    <>
      <PortalModal isPortalOpen={isPortalOpen} closePortal={() => setIsPortalOpen(false)}>
        <CheckoutModal />
      </PortalModal>

      <WhiteSection
        title={`${checkoutItems.length} ${checkoutItems.length > 0 ? 'items' : 'item'}`}
        subtitle="Edit"
        isSubtitleLink="true"
      >
        <CheckoutItemsList />
        <p className="bag-section__sub-title">
          Delivery{' '}
          <span className="bag-section__text"> {deliveryPrice ? '$' + deliveryPrice : 'free'}</span>
        </p>
        <p className="bag-section__sub-title">
          Total to pay <span className="bag-section__text">${totalPrice}</span>
        </p>
        <Button className="bag-btn" label="Buy now" hanldeClick={hanldeBuyBtnClick} />
      </WhiteSection>
    </>
  );
};
