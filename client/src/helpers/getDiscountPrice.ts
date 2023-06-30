export const getDiscountedPrice = (price: number, discount: number) => {
  const newPrice = price - (price / 100) * discount;
  return newPrice % 1 === 0 ? newPrice.toFixed(0) : newPrice.toFixed(2);
};
