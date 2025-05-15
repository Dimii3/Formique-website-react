import BackgroundLight from "./BackgroundLight";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <BackgroundLight className="footer-background"></BackgroundLight>
        <div className="container footer-container">
          <div className="footer-col">
            <h3 className="footer-col__heading">Formique</h3>
            <p className="footer-col__text">
              Formique is a leading provider of custom sculptures, specializing
              in creating unique and personalized pieces that reflect your
              vision and style.
            </p>
            <p className="footer-col__copyrights footer-col__text">
              &copy; {new Date().getFullYear()} Formique. All rights reserved.
            </p>
          </div>
          <div className="footer-col">
            <h3 className="footer-col__heading">Socials</h3>
            <ul className="footer-col__links">
              <li className="footer-col__link-item">
                <a href="#">Facebook</a>
              </li>
              <li className="footer-col__link-item">
                <a href="#">Instagram</a>
              </li>
              <li className="footer-col__link-item">
                <a href="#">Linkedin</a>
              </li>
              <li className="footer-col__link-item">
                <a href="#">Pinterest</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="footer-col__heading">Terms</h3>
            <ul className="footer-col__links">
              <li className="footer-col__link-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="footer-col__link-item">
                <a href="#">Cookies Policy</a>
              </li>
              <li className="footer-col__link-item">
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="footer-col__heading">Get in Touch</h3>
            <ul className="footer-col__links">
              <li className="footer-col__link-item">Bradfield Center 332</li>
              <li className="footer-col__link-item">
                Cambridge Science Street
              </li>
              <li className="footer-col__link-item">New York</li>
              <li className="footer-col__link-item">(000 12 332 449)</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
