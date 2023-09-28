import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { enterAddress } from 'store/slice';
import { TextInput } from './FormInput/TextInput';
import { CheckoutFormValues, checkoutInputs } from './FormInput/const';
import { Button } from 'components/UI';
import { PortalBanner } from 'components';

export const AddressForm: React.FC<object> = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm<CheckoutFormValues>();

  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const hanldeFormSubmit = () => {
    dispatch(enterAddress());
    setIsPortalOpen(true);
  };

  return (
    <>
      <PortalBanner
        title="confirmed"
        isOpen={isPortalOpen}
        closePortal={() => setIsPortalOpen(false)}
      />
      <form className="checkout__form" onSubmit={handleSubmit(hanldeFormSubmit)}>
        {checkoutInputs.map((i) => {
          return (
            <TextInput
              key={i.label}
              inputValues={i}
              register={register}
              errors={formState.errors}
            />
          );
        })}

        <Button className="bag-btn" label="Confirm" />
      </form>
    </>
  );
};
