import React, { useContext } from 'react';
import TelegramLabel from 'assets/svg/telegram.svg';
import ViberLabel from 'assets/svg/viber.svg';
import { DropdownContext } from 'components';
import './style.css';

export const ShareDropdownBody: React.FC<object> = () => {
  const { isOpen } = useContext(DropdownContext);

  const url = window.location.href;
  const text = 'Look what I found!';

  if (!isOpen) return null;
  return (
    <div className="share-dropddown__body ">
      <div className="share-tringle"></div>
      <ul className="share-list">
        <li className="share-item">
          <a
            target="_blank"
            href={`https://t.me/share/url?url=${url}&text=${text}`}
            rel="noreferrer"
          >
            {' '}
            <img src={TelegramLabel} />{' '}
          </a>
        </li>
        <li className="share-item">
          <a target="_blank" href={`viber://forward?text=${text} ${url}`} rel="noreferrer">
            {' '}
            <img src={ViberLabel} />{' '}
          </a>
        </li>
      </ul>
    </div>
  );
};
