import React, { useState } from 'react';
import './style.css';

export const DualRangeSlider = () => {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(1000);

  const rangeStyle = {
    left: (minVal / 1000) * 100 + '%',
    right: 100 - (maxVal / 1000) * 100 + '%',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;

    if (target.dataset.name === 'min') {
      setMinVal(+value);
    } else {
      setMaxVal(+value);
    }
  };

  return (
    <>
      <div className="range-slider">
        <span className="range-selected" style={rangeStyle} />
      </div>
      <div className="range-input">
        <input
          type="range"
          className="min"
          data-name="min"
          min="0"
          max="1000"
          value={minVal}
          step="10"
          onChange={handleChange}
        />
        <input
          type="range"
          className="max"
          data-name="max"
          min="0"
          max="1000"
          value={maxVal}
          step="10"
          onChange={handleChange}
        />
      </div>
      <div className="range-price">
        <label htmlFor="min">Min</label>
        <input type="number" name="min" value={minVal} onChange={handleChange} />
        <label htmlFor="max">Max</label>
        <input type="number" name="max" value={maxVal} onChange={handleChange} />
      </div>
    </>
  );
};
