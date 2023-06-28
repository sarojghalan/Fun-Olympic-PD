import Title from "../Components/Title/Title";
import { videoUrls } from "../data/videoUrl";
import ReactVideoPlayer from "../Utils/ReactVideoPlayer";
import { useLocation } from "react-router-dom";

function WatchLive() {
  const dataNavigator = useLocation();
  console.log(dataNavigator.state);
  console.log(videoUrls[0]);
  return (
    <div className="watch__live__wrapper">
      <div className="container">
        <Title title={dataNavigator?.state?.title} />
        <div className="watch__live__content">
          <div className="watch__live__video__wrapper">
            <ReactVideoPlayer
              playing={videoUrls[dataNavigator?.state?.key]?.playing}
              controls={videoUrls[dataNavigator?.state?.key]?.controls}
              muted={videoUrls[dataNavigator?.state?.key]?.muted}
              height="80vh"
              width="100%"
              url={videoUrls[dataNavigator?.state?.key]?.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchLive;
