import React, { useMemo } from 'react';
import Star from 'assets/svg/star.svg';
import StarFull from 'assets/svg/star-full.svg';
import StarHalf from 'assets/svg/star-half.svg';
import './style.css';
export const Rating = ({ rating }) => {
    const starRating = useMemo(() => {
        let fullStars = Math.floor(rating);
        const difference = rating - fullStars;
        if (difference > 0.75)
            fullStars++;
        const starArray = [...new Array(fullStars).fill(React.createElement("img", { src: StarFull }))];
        if (difference > 0.25 && difference < 0.75) {
            starArray.push(React.createElement("img", { src: StarHalf }));
        }
        while (starArray.length < 5) {
            starArray.push(React.createElement("img", { src: Star }));
        }
        return starArray;
    }, [rating]);
    return (React.createElement("div", { className: "rating" },
        starRating.map((star, index) => {
            return React.createElement(React.Fragment, { key: index }, star);
        }),
        React.createElement("span", { className: "rating__value text text_about" }, rating)));
};
