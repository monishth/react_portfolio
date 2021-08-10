import React from 'react';
import logo from './assets/logo.png';
import { SocialIcon } from 'react-social-icons';

function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="header-background"></div>
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <p>
          <b>@mt.clicks</b>
        </p>
        <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
          📍 London
        </div>
        <div className="socialLinks">
          <SocialIcon
            url="https://www.instagram.com/mt.clicks"
            bgColor="rgb(0,0,0,0)"
            fgColor="#fff"
          />
          <SocialIcon
            url="https://www.twitter.com/mtclicks"
            bgColor="rgb(0,0,0,0)"
            fgColor="#fff"
          />
          <SocialIcon
            url="mailto:info@mtclicks.studio"
            bgColor="rgb(0,0,0,0)"
            fgColor="#fff"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
