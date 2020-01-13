import React from "react";
import i18n from "../../i18n";
import logo from "../../svg/zaitra-logo.svg";

const Navbar: React.FC = () => {
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <nav className="navbar navbar-light fixed-top justify-content-between">
      <a
        href="https://zaitra.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-brand"
      >
        <img src={logo} alt="Company zaitra logo" />
      </a>
      <div className="list">
        <button
          className="btn my-2 my-sm-0"
          onClick={() => changeLanguage("en")}
          type="button"
        >
          EN
        </button>
        <button
          className="btn my-2 my-sm-0"
          onClick={() => changeLanguage("cz")}
          type="button"
        >
          CZ
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
