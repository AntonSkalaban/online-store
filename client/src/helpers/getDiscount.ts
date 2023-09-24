export const getDiscount = (amount: number, discount: number) => {
  return +(amount - (1 - discount / 100)).toFixed(2);
};
