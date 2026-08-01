// import "navbar/nav.css";
import "../navbar/nav.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          {/* <div className="nav-logo-humb-container"> */}
          <div className="nav-logo__logo">
            <p>Minimalist Journal</p>
          </div>

          {/* hamb */}
          <div className="nav-hamb-container">
            <span></span>
          </div>
          {/* </div> */}

          {/* Block nav list  */}
          <div className="navList">
            <ul>
              <btn className="close-btn">X</btn>
              <div className="navList-container">
                <a href="">
                  <li>{"Essays"}</li>
                </a>
                <a href="">
                  <li>{"Archives"}</li>
                </a>
                <a href="">
                  <li>{"About"}</li>
                </a>
              </div>
            </ul>
          </div>
          {/* CTA */}
          <button className="cta menu-cta">Write</button>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
