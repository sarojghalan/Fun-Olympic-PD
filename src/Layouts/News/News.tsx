import { banner } from "../../assets";

function News() {
  return (
    <div className="news__wrapper">
      <div className="container">
        <div className="news__img">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default News;
