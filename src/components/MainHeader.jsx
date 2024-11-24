import React from "react";
import MainNav from "./MainNav";
import SocialButtons from "./SocialButtons";
import logo from "../logo.svg";

function MainHeader() {
  return (
    <header className="main-header">
      <div className="container">
        {/* Logo image */}
        <a
          href="index"
          className="main-logo"
        >
          <img
            src={logo}
            alt="logo"
          />
        </a>

        <MainNav />

        <SocialButtons />
      </div>
    </header>
  );
}

export default MainHeader;
