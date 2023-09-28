import React from 'react';
import './style.css';
export const PaginationButton = ({ label, hanldeClick }) => {
    return (React.createElement("button", { className: "pagination-btn", onClick: hanldeClick }, label));
};
