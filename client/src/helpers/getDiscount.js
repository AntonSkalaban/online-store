export const getDiscount = (amount, discount) => {
    const discountAmount = (amount * discount) / 100;
    const discountedPrice = amount - discountAmount;
    return +discountedPrice.toFixed(2);
};
