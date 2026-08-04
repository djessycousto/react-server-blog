import { useRef, useState } from "react";
import "../navbar/nav.css";

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
            <li>
              <a href="">Essays</a>
            </li>
            <li>
              <a href="">Archives</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>

        <button className="menu-cta">Write</button>
      </nav>
    </header>
  );
};

export default Navbar;
