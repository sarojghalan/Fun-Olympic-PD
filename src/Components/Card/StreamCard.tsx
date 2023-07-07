import React, { useContext } from "react";
import { StreamCardInterface } from "../../Interface/StreamCardInterface";
import SampleButton from "../Button/SampleButton";
import { useNavigate } from "react-router-dom";
import { ActiveUserContext } from "../../context/ActiveUser";
import { live } from "../../assets";
import ReactVideoPlayer from "../../Utils/ReactVideoPlayer";
function StreamCard({
  image,
  cardTitle,
  cardDescription,
  url,
}: StreamCardInterface) {
  const navigate = useNavigate();
  const { activeUser } = useContext(ActiveUserContext);
  const streamHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (activeUser) {
      navigate(`/watchlive/${cardTitle}`, {
        state: { title: cardTitle, url: url },
      });
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="stream__card__wrapper">
      <div className="stream__card__img">
        {/* <img src={live} alt={cardTitle} /> */}
        {activeUser ? (
          <ReactVideoPlayer
            playing={true}
            controls={false}
            muted={true}
            height="300px"
            width="100%"
            url={url}
          />
        ) : (
          <img src={live} alt={cardTitle} />
        )}
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
