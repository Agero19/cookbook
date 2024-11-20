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
            href="#"
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
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">Recipes</a>
            </li>
            <li className="nav-item">
              <a href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a href="#">About us</a>
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
          <div className="footer-top"></div>
          <div className="footer-copyright">
            <div className="copyright"></div>
            <div className="social-links"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
