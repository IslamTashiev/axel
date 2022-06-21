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
          <div className='footer__item-second'>
            <div className='footer__item-title'>
              Subscribe to our newsletter
            </div>
            <div className='footer__item-second_title'>
              Be the first to receive special offers and news from us
            </div>
            <div className='footer__item-second_search'>
              <form className='footer__item-second_search search'>
                <input
                  type='email'
                  placeholder='example@gmail.com'
                  name='email'
                />
                <button type='submit'>Subscribe</button>
              </form>
            </div>
            <div className='footer__item-second_title'>
              By clicking on the button, you consent to the processing of
              personal data and agree to the privacy policy
            </div>
          </div>
        </div>
      </div>
      <p className='cp-text'>© Copyright Axel company - 2022</p>
    </div>
  );
};
