import React from "react";

import logo from "../../assets/logos/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="BrainFlix logo" className="header__logo" />
      <form className="header__search">
        <input
          type="text"
          placeholder="Search"
          className="header__search-input"
        />
        <button type="submit" className="header__search-button">
          <img src={searchIcon} alt="Search icon" />
        </button>
      </form>
      <div className="header__user">
        <button className="header__upload">
          <img src={uploadIcon} alt="Upload icon" />
          UPLOAD
        </button>
        <img src={userAvatar} alt="User avatar" className="header__avatar" />
      </div>
    </header>
  );
};

export default Header;
