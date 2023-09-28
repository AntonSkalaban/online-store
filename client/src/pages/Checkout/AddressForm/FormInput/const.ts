import { Path } from 'react-hook-form';
import { promo } from 'const';

export type CheckoutFormValues = {
  'First name': string;
  'Last name': string;
  Mobile: string;
  City: string;
  Street: string;
  'Discount code': string;
};

export interface ICheckoutInput {
  type: string;
  label: Path<CheckoutFormValues>;
  regExp: RegExp;
  errorMessage: string;
  isRequared: boolean;
}

export const promoInput = {
  type: 'text',
  label: 'Discount code',
  regExp: new RegExp(promo),
  errorMessage: 'Code not found!',
  isRequared: true,
} as ICheckoutInput;

export const checkoutInputs = [
  {
    type: 'text',
    label: 'First Name',
    regExp: /^[A-Za-z\s]+$/,
    errorMessage: 'Please Enter a Valid First Name!',
    isRequared: true,
  },
  {
    type: 'text',
    label: 'Last name',
    regExp: /^[A-Za-z-]+$/,
    errorMessage: 'Please Enter a Valid Last Name!',
    isRequared: true,
  },
  {
    type: 'tel',
    label: 'Mobile',
    regExp: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    errorMessage: 'Please Enter a Valid Phone number!',
    isRequared: true,
  },
  {
    type: 'text',
    label: 'City',
    regExp: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
    errorMessage: 'Please Enter a Valid City name!',
    isRequared: true,
  },
  {
    type: 'text',
    label: 'Street',
    regExp: /^[A-Za-z0-9\s\-.,']+$/,
    errorMessage: 'Please Enter a Valid Street name!',
    isRequared: true,
  },
] as ICheckoutInput[];
