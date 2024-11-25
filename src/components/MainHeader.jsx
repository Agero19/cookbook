import React from "react";
import MainNav from "./MainNav";
import SocialButtons from "./SocialButtons";

const MainHeader = ({ links }) => {
  return (
    <header className="main-header">
      <div className="container">
        {/* Logo image */}
        <a
          href="index"
          className="main-logo"
        >
          <img
            src="/images/logo.svg"
            alt="logo"
          />
        </a>

        <MainNav links={links} />

        <SocialButtons />
      </div>
    </header>
  );
};

export default MainHeader;
