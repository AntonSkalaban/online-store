import React, { useState } from 'react';
import ShareLabel from '../../../../../assets/svg/share.svg';
import TelegramLabel from '../../../../../assets/svg/telegram.svg';
import ViberLabel from '../../../../../assets/svg/viber.svg';
import './style.css';

export const Share = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const url = window.location.href;
  const text = 'Look what I found!';

  return (
    <div className="share">
      <button className="share-bnt" onClick={toggle}>
        <img src={ShareLabel} />
      </button>
      {isOpen && (
        <div className="share-wrapper">
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
      )}
    </div>
  );
};
