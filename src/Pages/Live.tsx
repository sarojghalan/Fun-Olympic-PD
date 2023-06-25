import SampleButton from "../Components/Button/SampleButton";
import Title from "../Components/Title/Title";
import { videoUrls } from "../data/videoUrl";
import ReactVideoPlayer from "../Utils/ReactVideoPlayer";

function Live() {
  const liveHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
                liveHandler(e)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Live;
