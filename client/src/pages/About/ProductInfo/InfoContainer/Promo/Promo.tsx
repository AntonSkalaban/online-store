import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Label from '../../../../../assets/svg/label.svg';
import { Banner } from '../../../../../components';
import './style.css';

export const Promo = () => {
  const promo = 'HIFRIEND';

  const [isCopyed, setIsCopyed] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(promo);
    setIsCopyed(true);
    setTimeout(() => setIsCopyed(false), 2000);
  };

  return (
    <div className="promo">
      {isCopyed && createPortal(<Banner title="Copyed" />, document.body)}
      <img className="promo__label" src={Label} />
      <p>
        NEW HERE? <br />
        Get 15% off almost everything! <br />
        With code:{' '}
        <strong className="promo__promocode" onClick={copy}>
          {promo}
        </strong>
      </p>
    </div>
  );
};
