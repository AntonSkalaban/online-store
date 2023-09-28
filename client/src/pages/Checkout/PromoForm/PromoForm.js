import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { applyPromo } from 'store/slice';
import { TextInput } from '../AddressForm/FormInput/TextInput';
import { promoInput } from '../AddressForm/FormInput/const';
import { PortalBanner } from 'components';
import { Button, WhiteSection } from 'components/UI';
import Arrow from 'assets/svg/arrow-prev.svg';
import './style.css';
export const PromoForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState } = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const [isPortalOpen, setIsPortalOpen] = useState(false);
    const onSubmit = () => {
        setIsPortalOpen(true);
        dispatch(applyPromo());
    };
    return (React.createElement(WhiteSection, { title: 'Have a promo code? Enter!' },
        React.createElement(PortalBanner, { title: "Promo code applied", isOpen: isPortalOpen, closePortal: () => setIsPortalOpen(false) }),
        React.createElement("img", { className: `checkout__promo-arrow ${isOpen ? 'arrow_open' : 'arrow_close'}`, onClick: () => setIsOpen((prev) => !prev), src: Arrow }),
        isOpen && (React.createElement("form", { className: "checkout__promo-form", onSubmit: handleSubmit(onSubmit) },
            React.createElement(TextInput, { inputValues: promoInput, register: register, errors: formState.errors }),
            React.createElement(Button, { className: "promo-btn", label: "apply code" })))));
};
