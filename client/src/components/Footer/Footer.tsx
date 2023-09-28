import React from 'react';
import { Wrapper } from 'components/UI';
import Telegram from 'assets/svg/telegram-blue.svg';
import GitHub from 'assets/svg/github-blue.svg';
import './style.css';

export const Footer = () => {
  return (
    <footer className="header-footer">
      <Wrapper>
        <div className="header-footer__container">
          <p className="footer-text">Made by Anton Skalaban</p>
          <p className="footer-text footer__contact">
            Contact me:
            <a href="https://t.me/Aazzbbc" target="_blank" rel="noreferrer">
              <img className="footer__contact-logo" src={Telegram} />
            </a>
            <a href="https://github.com/AntonSkalaban" target="_blank" rel="noreferrer">
              <img className="footer__contact-logo" src={GitHub} />
            </a>
          </p>
          <p className="footer-text">2023</p>
        </div>
      </Wrapper>
    </footer>
  );
};
