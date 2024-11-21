import logo from "./logo.svg";
import insta from "./insta.svg";
import "./normalize.css";
import "./App.scss";
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

          {/* Navbar values  */}
          <ul className="main-nav">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/">Recipes</a>
            </li>
            <li className="nav-item">
              <a href="/">Blog</a>
            </li>
            <li className="nav-item">
              <a href="/">Contact</a>
            </li>
            <li className="nav-item">
              <a href="/">About us</a>
            </li>
          </ul>

          {/* Social medias */}
          <div className="social-links">
            <button className="social-links-button">
              <img
                src={insta}
                className="social-logo"
                alt="logo"
              />
            </button>

            <button className="social-links-button">
              <img
                src={insta}
                className="social-logo"
                alt="logo"
              />
            </button>

            <button className="social-links-button">
              <img
                src={insta}
                className="social-logo"
                alt="logo"
              />
            </button>
          </div>
        </div>
      </header>
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

            <ul className="main-nav">
              <li className="nav-item">
                <a href="/">Recipes</a>
              </li>
              <li className="nav-item">
                <a href="/">Blog</a>
              </li>
              <li className="nav-item">
                <a href="/">Contact</a>
              </li>
              <li className="nav-item">
                <a href="/">About us</a>
              </li>
            </ul>
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
              <div className="social-links">
                <button className="social-links-button">
                  <img
                    src={insta}
                    className="social-logo"
                    alt="logo"
                  />
                </button>
                <button className="social-links-button">
                  <img
                    src={insta}
                    className="social-logo"
                    alt="logo"
                  />
                </button>
                <button className="social-links-button">
                  <img
                    src={insta}
                    className="social-logo"
                    alt="logo"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
