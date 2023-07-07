import { useNavigate } from "react-router-dom";
import Title from "../../Components/Title/Title";
import { china, hongkong, nepal, turkry, uk } from "../../assets";

function Ranker() {
  const navigate = useNavigate();
  const navigateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/leaderboard");
  };
  return (
    <div className="ranker__container">
      <Title title="Top Ranker" />
      <div className="container">
        <div className="ranker__content">
          <div className="ranker__image">
            <img src={nepal} alt="nepal" />
          </div>
          <div className="ranker__image">
            <img src={china} alt="nepal" />
          </div>
          <div className="ranker__image">
            <img src={uk} alt="nepal" />
          </div>
          <div className="ranker__image">
            <img src={hongkong} alt="nepal" />
          </div>
          <div className="ranker__image">
            <img src={turkry} alt="nepal" />
          </div>
        </div>
        <div className="ranker__more">
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              navigateHandler(e)
            }
          >
            Check LeaderBoard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ranker;
