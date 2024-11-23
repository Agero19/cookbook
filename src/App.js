import "./App.scss";
import insta from "./insta.svg";
import logo from "./logo.svg";
import "./normalize.css";
import recipe from "./recipe-photo.svg";

import "@fontsource-variable/inter"; // Defaults to wght axis
import "@fontsource-variable/inter/wght-italic.css"; // Specify axis and style
import "@fontsource-variable/inter/wght.css"; // Specify axis

import React from "react";
import ItemCard from "./components/ItemCard";
import MainNav from "./components/MainNav";
import SocialButtons from "./components/SocialButtons";

function App() {
  return (
    <div className="App">
      {/* App header  */}
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

    <div className="container">
      <div className="row">
        
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        
      </div>
    </div>
      

      


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
                  src={logo}
                  alt="logo"
                />
              </a>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            {/* Page footer Navigation  */}

            <MainNav />
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
    </div>
  );
}

export default App;
