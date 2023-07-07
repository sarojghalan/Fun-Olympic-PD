import Title from "../../Components/Title/Title";
import { banner } from "../../assets";
// import "../../Scss/Main.scss";
function News() {
  return (
    <div className="news__wrapper">
        <Title title="News" />
      <div className="container">
        <div className="news__img">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default News;
