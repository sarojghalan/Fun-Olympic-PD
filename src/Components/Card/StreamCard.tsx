import { StreamCardInterface } from "../../Interface/StreamCardInterface";
import SampleButton from "../Button/SampleButton";

function StreamCard({
  image,
  cardTitle,
  cardDescription,
}: StreamCardInterface) {
  const streamHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <div className="stream__card__wrapper">
      <div className="stream__card__img">
        <img src={image} alt="Pikachu Streamer" />
      </div>
      <div className="stream__card__content">
        <div className="stream__card__title">
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
          <p>{cardTitle}</p>
        </div>
        <p className="stream__card__description">{cardDescription}</p>
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
