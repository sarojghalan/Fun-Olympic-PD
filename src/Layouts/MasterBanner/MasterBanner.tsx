import "../../Scss/Main.scss";
import ReactVideoPlayer from "../../Utils/ReactVideoPlayer";
import { videoUrls } from "../../data/videoUrl";

function MasterBanner() {
  return (
    <div className="master__banner__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="master__banner__left__section">
              <ReactVideoPlayer
                playing={videoUrls[0]?.playing}
                controls={videoUrls[0]?.controls}
                muted={videoUrls[0]?.muted}
                height={videoUrls[0]?.height}
                width={videoUrls[0]?.width}
                url={videoUrls[0]?.url}
              />
            </div>
          </div>
          <div className="col-4">
            {videoUrls.slice(1).map((item) => (
              <div className="master__banner__right__section">
                <ReactVideoPlayer
                  playing={item?.playing}
                  muted={item?.muted}
                  height={item?.height}
                  width={item?.width}
                  url={item?.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterBanner;
