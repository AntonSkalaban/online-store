import React from 'react';
import { useSelector } from 'react-redux';
import { getBagItemsTotalPrice, getDeliveryLabel } from '../../../store/selectors';
import { BagSection } from '../BagSection/BagSection';
import { BagDropdown } from '../BagDropdown/BagDropdown';
import { DeliveryList } from '../BagDropdown/InputsList/DeliveryList';
import { Button } from '../../../components/UI';
import './style.css';

export const BagTotal = () => {
  const totalPrice = useSelector(getBagItemsTotalPrice);
  const deliveryLabel = useSelector(getDeliveryLabel);

  return (
    <BagSection title="total">
      <p className="bag-section__sub-title">
        Sub-total <span className="bag-section__text">${totalPrice}</span>
      </p>
      <p className="bag-section__sub-title">Delivery</p>
      <BagDropdown title={deliveryLabel} classNameMod="bag">
        <DeliveryList />
      </BagDropdown>

      <Button
        className="bag-btn"
        label="checkout"
        // disabled={false}
        hanldeClick={() => {}}
      />
      <p className="bag-section__text text text_bag total__text">
        Got a discount code? Add it in the next step.
      </p>
    </BagSection>
  );
};
