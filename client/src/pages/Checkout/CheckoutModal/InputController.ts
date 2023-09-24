import Visa from 'assets/svg/visa.svg';
import Master from 'assets/svg/mastercard.svg';
import Maestro from 'assets/svg/maestro.svg';

export const getNumberValue = (value = '') => {
  return value.replace(/\D+/g, '');
};

export const formatCreditCardImg = (value: string) => {
  const numberValue = getNumberValue(value);

  const firstDigit = +numberValue[0];
  if (firstDigit < 3) return Maestro;
  if (firstDigit < 6) return Visa;
  return Master;
};

export const formatCreditCardNumber = (value: string) => {
  const numberValue = getNumberValue(value);

  const nextValue = `${numberValue.slice(0, 4)} ${numberValue.slice(4, 8)} ${numberValue.slice(
    8,
    12
  )} ${numberValue.slice(12, 16)}`;

  return nextValue.trim();
};

export const formatCVC = (value: string) => {
  const clearValue = getNumberValue(value);
  const maxLength = 3;
  return clearValue.slice(0, maxLength);
};

export const formatExpirationDate = (value: string) => {
  let numberValue = getNumberValue(value);

  if (+numberValue[0] > 1) {
    numberValue = '';
  }
  if (+numberValue[0] === 1 && +numberValue[1] > 2) {
    numberValue = numberValue.slice(0, -1);
  }

  if (numberValue.length >= 4) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear().toString().slice(2);
    const enteredEyear = numberValue.slice(2);
    if (+enteredEyear < +currentYear) {
      numberValue = numberValue.slice(0, -2);
    }
  }

  if (numberValue.length >= 3) {
    return `${numberValue.slice(0, 2)}/${numberValue.slice(2, 4)}`;
  }

  return numberValue;
};
