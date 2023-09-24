import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { applyPromo } from 'store/slice';
import { TextInput } from '../AddressForm/FormInput/TextInput';
import { CheckoutFormValues, promoInput } from '../AddressForm/FormInput/const';
import { PortalBanner } from 'components';
import { Button, WhiteSection } from 'components/UI';
import Arrow from 'assets/svg/arrow-prev.svg';
import './style.css';

export const PromoForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm<CheckoutFormValues>();
  const [isOpen, setIsOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const onSubmit = () => {
    setIsPortalOpen(true);
    dispatch(applyPromo());
  };

  return (
    <WhiteSection title={'Have a promo code? Enter!'}>
      <PortalBanner
        title="Promo code applied"
        isOpen={isPortalOpen}
        closePortal={() => setIsPortalOpen(false)}
      />

      <img
        className={`checkout__promo-arrow ${isOpen ? 'arrow_open' : 'arrow_close'}`}
        onClick={() => setIsOpen((prev) => !prev)}
        src={Arrow}
      ></img>
      {isOpen && (
        <form className="checkout__promo-form" onSubmit={handleSubmit(onSubmit)}>
          <TextInput inputValues={promoInput} register={register} errors={formState.errors} />
          <Button className="promo-btn" label="apply code" />
        </form>
      )}
    </WhiteSection>
  );
};
