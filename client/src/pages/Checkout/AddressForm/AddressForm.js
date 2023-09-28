import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { enterAddress } from 'store/slice';
import { TextInput } from './FormInput/TextInput';
import { checkoutInputs } from './FormInput/const';
import { Button } from 'components/UI';
import { PortalBanner } from 'components';
export const AddressForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState } = useForm();
    const [isPortalOpen, setIsPortalOpen] = useState(false);
    const hanldeFormSubmit = () => {
        dispatch(enterAddress());
        setIsPortalOpen(true);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(PortalBanner, { title: "confirmed", isOpen: isPortalOpen, closePortal: () => setIsPortalOpen(false) }),
        React.createElement("form", { className: "checkout__form", onSubmit: handleSubmit(hanldeFormSubmit) },
            checkoutInputs.map((i) => {
                return (React.createElement(TextInput, { key: i.label, inputValues: i, register: register, errors: formState.errors }));
            }),
            React.createElement(Button, { className: "bag-btn", label: "Confirm" }))));
};
