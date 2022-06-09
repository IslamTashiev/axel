import React from "react";
import instagramIcon from "../../assets/instagram.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import twitterIcon from "../../assets/twitter.svg";
import facebookIcon from "../../assets/facebook.svg";
import { Menu } from "../Header/Menu";
import "./style.css";

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__item first'>
            <div className='footer__item-info'>
              <div className='logo'>AXEL</div>
              <div className='footer__contacts'>
                <div className='footer__item-title'>Contacts:</div>
                <div className='footer__contacts-item'>axel@gmail.com</div>
                <div className='footer__contacts-item'>+996(776)515837</div>
              </div>
              <div className='footer__links'>
                <a href='#'>
                  <img src={instagramIcon} alt='icon' />
                </a>
                <a href='#'>
                  <img src={linkedinIcon} alt='icon' />
                </a>
                <a href='#'>
                  <img src={twitterIcon} alt='icon' />
                </a>
                <a href='#'>
                  <img src={facebookIcon} alt='icon' />
                </a>
              </div>
            </div>
            <div className='footer__item-nav'>
              <div className='footer__item-title'>Navigation</div>
              <Menu />
            </div>
          </div>
          <div className='footer__item second'></div>
        </div>
      </div>
    </div>
  );
};
