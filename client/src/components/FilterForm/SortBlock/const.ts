interface Option {
  value: string;
  label: string;
}

export const options = [
  { value: '', label: 'select' },
  { value: 'rating-ASC', label: 'Rating ASC' },
  { value: 'rating-DESC', label: 'Rating DESC' },
  { value: 'price-ASC', label: 'Price ASC' },
  { value: 'price-DESC', label: 'Price DESC' },
  { value: 'discountPercentage-ASC', label: 'Discount ASC' },
  { value: 'discountPercentage-DESC', label: 'Discount DESC' },
] as Option[];
