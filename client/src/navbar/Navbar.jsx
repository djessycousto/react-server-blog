import "../navbar/nav.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav-logo__logo">
          <p>Minimalist Journal</p>
        </div>

        <div className="nav-hamb-container">
          <span></span>
        </div>

        <div className="navList">
          <button className="close-btn">✕</button>

          <ul className="navList-container">
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
