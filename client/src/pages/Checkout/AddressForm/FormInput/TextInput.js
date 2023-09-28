import React from 'react';
import './styel.css';
export const TextInput = ({ inputValues, register, errors }) => {
    const { type, label, isRequared, regExp, errorMessage } = inputValues;
    return (React.createElement("div", { className: "form__input-wrapper" },
        React.createElement("label", { className: "form-input__label" },
            label,
            ":"),
        React.createElement("input", { className: "form-input", type: type, ...register(label, {
                required: isRequared ? `${label} is required` : '',
                pattern: {
                    value: regExp,
                    message: errorMessage,
                },
            }) }),
        errors[label] && React.createElement("p", { className: "error" },
            " ",
            errors[label]?.message)));
};
