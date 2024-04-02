import React from "react";

import logo from "../../assets/logos/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img className="header__logo" src={logo} alt="BrainFlix logo" />
      </a>
      <div className="header__menu">
        <input className="header__menu-search" type="text" placeholder="Search"/>
        <img className="header__menu-avatar" src={userAvatar} alt="User avatar" />
        <button className="header__menu-upload-button">UPLOAD</button>
      </div>
    </header>
  );
};

export default Header;
