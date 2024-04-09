import React from "react";
import { Link } from 'react-router-dom';

import logo from "../../assets/logos/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="BrainFlix logo" />
      </Link>
      <div className="header__menu">
        <input className="header__menu-search" type="text" placeholder="Search"/>
        <img className="header__menu-avatar" src={userAvatar} alt="User avatar" />
        <Link to="/upload" className="header__menu-upload-link">
          <button className="header__menu-upload-button">UPLOAD</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
