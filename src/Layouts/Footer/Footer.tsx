import { logo } from "../../assets";
import "../../Scss/Main.scss";

function Footer() {
  return (
    <div className="footer__container">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__content">
            <div className="footer__image__wrapper">
              <img src={logo} alt="logo" />
            </div>
            <p>
              We Are The Trusted And Passionate Team Commissioned By The City Of
              Yokyowon To Make The FunOlympic Games 2023
            </p>
          </div>
          <div className="footer__content">
            <h3>Contact</h3>
            <ul>
              <li>
                <p>01-5252536</p>
              </li>
              <li>
                <p>funolympics@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h3>Join</h3>
            <ul>
              <li>
                <p>
                  <span>
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                  Instagram
                </p>
              </li>
              <li>
                <p>
                  <span>
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                  Facebook
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
