// import "../footer/footer.css";
import "./footer.css";

const Footer = () => {
  // date

  const getFullYear = new Date();

  return (
    <>
      <footer className="footer">
        <div className="trademark">
          <p>
            &copy; {getFullYear.getFullYear()} MINIMALIST JOURNAL. BUILT FOR
            DEEP FOCUS.
          </p>
        </div>

        <div className="policy">
          <span>Privacy</span>

          <span>Terms</span>

          <span>RSS</span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
