import { useRef, useState } from "react";
import "../navbar/nav.css";
import { Link } from "react-router-dom";
import About from "../pages/About";
import Archives from "../pages/Archives";
import App from "../App";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLinks = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <div className="nav-logo__logo">
          <p>Minimalist Journal</p>
        </div>

        <div className="nav-hamb-container">
          <button type="button" onClick={toggleLinks}>
            {" "}
            <span></span>
          </button>
        </div>

        <div className={isOpen ? "showNav" : "navList "}>
          <button className="close-btn" onClick={toggleLinks}>
            ✕
          </button>

          <ul className="navList-container ">
            {/* <li>
                  <a href="/app">Essays</a>
                  </li>
                  <li>
                  <a href="/Archives">Archives</a>
                  </li>
                  <li>
                  <a href="/about">About</a>
                  </li> */}
            {/* <Routes>
              <Route index element={<App />}></Route>
              <Route path="/home" element={<App />}></Route>
              <Route path="/archives" element={<Archives />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes> */}

            {/* react link */}
            <li>
              <Link to="/">Essays</Link>
            </li>

            <li>
              <Link to="/archives">Archive</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <button className="menu-cta">Write</button>
      </nav>
    </header>
  );
};

export default Navbar;
