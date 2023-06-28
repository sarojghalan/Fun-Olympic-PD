import { useNavigate } from "react-router-dom";
import SampleButton from "../Components/Button/SampleButton";
import Title from "../Components/Title/Title";
import { videoUrls } from "../data/videoUrl";
import ReactVideoPlayer from "../Utils/ReactVideoPlayer";

function Live() {
  const navigate = useNavigate();

  const liveHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    keys: number
  ) => {
    e.preventDefault();
    navigate(`/watchLive/live${keys + 1}`, {
      state: { title: `live ${keys + 1}`, key: keys },
    });
  };
  return (
    <div className="container">
      <Title title="LIVE" />
      <div className="live__wrapper">
        {videoUrls.slice(1).map((item, keys) => (
          <div className="live__content">
            <p>LIVE {keys + 1}</p>
            <div className="live__video__wrapper">
              <ReactVideoPlayer
                playing={item?.playing}
                controls={item?.controls}
                muted={item?.muted}
                height="100%"
                width="100%"
                url={item?.url}
              />
            </div>
            <SampleButton
              title={`Watch LIVE ${keys + 1}`}
              nameOfClass=""
              handler={(e: React.MouseEvent<HTMLButtonElement>) =>
                liveHandler(e, keys)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Live;
