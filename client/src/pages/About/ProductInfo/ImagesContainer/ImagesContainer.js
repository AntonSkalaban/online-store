import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfinityCarousel } from '../../../../components';
import { ShareDropdown } from './ShareDropdown/ShareDropdown';
import './style.css';
export const ImagesContainer = ({ images }) => {
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const { id } = useParams();
    useEffect(() => {
        setActiveImgIndex(0);
    }, [id]);
    const changeActiveImgIndex = (index) => {
        setActiveImgIndex(index);
    };
    return (React.createElement("div", { className: "product__images-container" },
        React.createElement("div", { className: "product__small-images-container" },
            React.createElement("div", { className: "product__small-images-wrapper" }, images.map((src, index) => {
                return (React.createElement("div", { key: src, className: `product__small-image-container ${activeImgIndex === index ? 'active-image' : ''}`, onClick: () => changeActiveImgIndex(index) },
                    React.createElement("img", { className: "product-image", src: src })));
            })),
            React.createElement(ShareDropdown, null)),
        React.createElement("div", { className: "product__big-image-container" },
            React.createElement(InfinityCarousel, { images: images, activeImgIndex: activeImgIndex, changeActiveImgIndex: changeActiveImgIndex }))));
};
