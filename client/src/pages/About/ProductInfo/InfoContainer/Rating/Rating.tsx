import React, { useMemo } from 'react';
import Star from '../../../../../assets/svg/star.svg';
import StarFull from '../../../../../assets/svg/star-full.svg';
import StarHalf from '../../../../../assets/svg/star-half.svg';
import './style.css';

interface RatingProps {
  rating: number;
}

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  const starRating = useMemo(() => {
    let fullStars = Math.floor(rating);

    const difference = rating - fullStars;

    if (difference > 0.75) fullStars++;

    const starArray = [...new Array(fullStars).fill(<img src={StarFull} />)];

    if (difference > 0.25 && difference < 0.75) {
      starArray.push(<img src={StarHalf} />);
    }

    while (starArray.length < 5) {
      starArray.push(<img src={Star} />);
    }
    return starArray;
  }, [rating]);

  return (
    <div className="rating">
      {starRating.map((star, index) => {
        return <React.Fragment key={index}>{star}</React.Fragment>;
      })}
      <span className="rating__value">{rating}</span>
    </div>
  );
};
