import { logo } from "../../assets";
import "../../Scss/Main.scss";

function Footer() {
  return (
    <div className="footer__container">
      <div className="container">
        <div className="footer">
          <div className="footer__date">
            <p>
              {" "}
              1<sup>st</sup> January - 4<sup>th</sup> April
            </p>
            <p className="footer__number">+01 5545456</p>
          </div>
          <div className="footer__content">
            <p>Fun Olympics , yokyo</p>
            <p className="footer__topic">
              <span className="footer__left">YOKYO</span>
              <span className="footer__right">2023</span>
            </p>
            <p className="footer__copyright">© 2023 YOKYO. All rights reserved.</p>
          </div>
          {/* <div className="footer__last">

        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
