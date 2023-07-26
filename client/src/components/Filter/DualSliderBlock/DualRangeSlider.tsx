import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFormFilterValues } from '../../../store/selectors/inedx';
import { updateFormState } from '../../../store/slice';

interface DualRangeSliderProps {
  data: string[];
}

export const DualRangeSlider: React.FC<DualRangeSliderProps> = ({ data }) => {
  const dispatch = useDispatch();

  const selectValues = useSelector(getFormFilterValues).price;

  const [min, max] = [data[0], data[data.length - 1]];
  const [minVal, maxVal] = selectValues?.length ? selectValues : [min, max];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.dataset.name;
    const value = target.value;

    const differenseNumbers = data.map((rangeVal) => Math.abs(+rangeVal - +value));
    const minDifferense = Math.min(...differenseNumbers);

    const newValue = String(data[differenseNumbers.indexOf(minDifferense)]);

    if (name === 'min') {
      if (+value > +maxVal) return;
      dispatch(updateFormState({ price: [newValue, maxVal] }));
    } else {
      if (+value < +minVal) return;
      dispatch(updateFormState({ price: [minVal, newValue] }));
    }
  };

  return (
    <div className="dual-range">
      {' '}
      <div className="range-price ">
        <p className="min-price">${minVal}</p>
        <p className="max-price">${maxVal}</p>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="min"
          data-name="min"
          min={min}
          max={max}
          value={minVal}
          onChange={handleChange}
        />
        <input
          type="range"
          className="max"
          data-name="max"
          min={min}
          max={max}
          value={maxVal}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
