import Title from "../../Components/Title/Title";
import "../../Scss/Main.scss";
import { logo } from "../../assets";
function About() {
  return (
    <div className="container">
      <Title title="About Fun Olympics" />
      <div className="about__wrapper">
        <div className="about__left__section">
          <img src={logo} alt="logo" />
        </div>
        <div className="about__right__section">
          <p>
            Welcome to our webpage! We are the trusted and passionate team
            commissioned by the city of Yokyowon to make the FunOlympic Games
            2023 an unforgettable experience. Our primary goal is to ensure the
            event is not only seamlessly organized but also highly enjoyable and
            accessible to all attendees, both locally and internationally.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
