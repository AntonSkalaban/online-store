interface Option {
  value: string;
  label: string;
}

export const options = [
  { value: '', label: 'select' },
  { value: 'rating-ACS', label: 'Rating ACS' },
  { value: 'rating-DESC', label: 'Rating DESC' },
  { value: 'price-ACS', label: 'Price ACS' },
  { value: 'price-DESC', label: 'Price DESC' },
  { value: 'discountPercentage-ACS', label: 'Discount ACS' },
  { value: 'discountPercentage-DESC', label: 'Discount DESC' },
] as Option[];
