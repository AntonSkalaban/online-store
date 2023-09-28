import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CheckoutFormValues, ICheckoutInput } from './const';
import './styel.css';

interface TextInputProps {
  inputValues: ICheckoutInput;
  register: UseFormRegister<CheckoutFormValues>;

  errors: FieldErrors<CheckoutFormValues>;
}
export const TextInput: React.FC<TextInputProps> = ({ inputValues, register, errors }) => {
  const { type, label, isRequared, regExp, errorMessage } = inputValues;

  return (
    <div className="form__input-wrapper">
      <label className="form-input__label">{label}:</label>
      <input
        className="form-input"
        type={type}
        {...register(label, {
          required: isRequared ? `${label} is required` : '',
          pattern: {
            value: regExp,
            message: errorMessage,
          },
        })}
      />
      {errors[label] && <p className="error"> {errors[label]?.message}</p>}
    </div>
  );
};
