import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from './FormInput/TextInput';
import { CheckoutFormValues, checkoutInputs } from './FormInput/const';
import { Button } from 'components/UI';
import { PortalBanner } from 'components';
import { useActions } from 'hooks';

export const AddressForm: React.FC<object> = () => {
  const { enterAddress } = useActions();
  const { register, handleSubmit, formState } = useForm<CheckoutFormValues>();

  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const hanldeFormSubmit = () => {
    enterAddress();
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
