import React, { useState } from 'react';
import { promo } from 'const';
import { PortalBanner } from 'components';
import Label from 'assets/svg/label.svg';
import './style.css';

export const Promo = () => {
  const [isCopyed, setIsCopyed] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(promo);
    setIsCopyed(true);
  };

  return (
    <div className="promo">
      <PortalBanner title={'Copyed'} isOpen={isCopyed} closePortal={() => setIsCopyed(false)} />

      <img className="promo__label" src={Label} />
      <p className="text text_bag">
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
