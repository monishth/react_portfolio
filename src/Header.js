import React from 'react';
import ReactDOM from 'react-dom';
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
        <p>@mt.clicks</p>
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
