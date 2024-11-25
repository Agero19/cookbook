import React from "react";
import SocialButtons from "./SocialButtons";
import MainNav from "./MainNav";

const MainFooter = ({ links }) => {
  return (
    <footer className="main-footer">
      <div className="container">
        {/* Top part of footer */}

        <div className="footer-top">
          {/* Slogan with logo */}

          <div className="info">
            <a
              href="index"
              className="main-logo"
            >
              <img
                src="/images/logo.svg"
                alt="logo"
              />
            </a>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          {/* Page footer Navigation  */}

          <MainNav links={links} />
        </div>

        {/* Lower part of footer */}
        <div className="footer-copyright">
          <div className="copyright">
            <p>
              © 2020 Flowbase. Powered by
              <span className="highlighted"> Webflow</span>
            </p>
          </div>

          <div className="social-wrap">
            <SocialButtons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
