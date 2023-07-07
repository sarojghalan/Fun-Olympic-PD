import { china, hongkong, nepal, turkry } from "../../assets";

function Ranker() {
  return <div className="ranker__container">
    <div className="container">
        <div className="ranker__content">
            <div className="ranker__image">
                <img src={nepal} alt="nepal" />
            </div>
            <div className="ranker__image">
                <img src={china} alt="nepal" />
            </div>
            <div className="ranker__image">
                <img src={hongkong} alt="nepal" />
            </div>
            <div className="ranker__image">
                <img src={turkry} alt="nepal" />
            </div>
        </div>
    </div>
  </div>;
}

export default Ranker;
