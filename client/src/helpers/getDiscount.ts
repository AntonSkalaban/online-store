export const getDiscount = (amount: number, discount: number) => {
  const discountAmount = (amount * discount) / 100;
  const discountedPrice = amount - discountAmount;
  return +discountedPrice.toFixed(2);
};
