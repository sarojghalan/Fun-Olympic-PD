import { liveOne } from "../../assets";
import SampleButton from "../Button/SampleButton";
function StreamCard() {
  const streamHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <div className="stream__card__wrapper">
      <div className="stream__card__img">
        <img src={liveOne} alt="Pikachu Streamer" />
      </div>
      <div className="stream__card__content">
        <div className="stream__card__title">
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
          <p>Ninja Streams</p>
        </div>
        <p className="stream__card__description">
          Hey there, amazing viewers! Welcome to my live stream extravaganza!{" "}
        </p>
      </div>
      <div className="stream__card__btn">
        <SampleButton
          nameOfClass="stream__btn"
          title="Watch"
          handler={(e: React.MouseEvent<HTMLButtonElement>) => streamHandler(e)}
        />
      </div>
    </div>
  );
}

export default StreamCard;
