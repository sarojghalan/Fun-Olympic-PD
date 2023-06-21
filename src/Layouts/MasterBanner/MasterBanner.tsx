import ReactPlayer from "react-player";
import "../../Scss/Main.scss";
import ReactVideoPlayer from "../../Utils/ReactVideoPlayer";

function MasterBanner() {
  return (
    <div className="master__banner__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="master__banner__left__section">
              <ReactVideoPlayer
                playing={true}
                controls={false}
                muted={true}
                height="85vh"
                width="100%"
                url="https://www.youtube.com/watch?v=fg_5chxKCHo"
              />
            </div>
          </div>
            <div className="col-4">
              <div className="master__banner__right__section">
                <ReactVideoPlayer
                  playing={true}
                  muted={true}
                  height="180px"
                  width="300px"
                  url="https://www.youtube.com/watch?v=rFFuXHRPMNI"
                />
              </div>
              <div className="master__banner__right__section">
                <ReactVideoPlayer
                  playing={true}
                  muted={true}
                  height="180px"
                  width="300px"
                  url="https://www.youtube.com/watch?v=rFFuXHRPMNI"
                />
              </div>
              <div className="master__banner__right__section">
                <ReactVideoPlayer
                  playing={true}
                  muted={true}
                  height="180px"
                  width="300px"
                  url="https://www.youtube.com/watch?v=rFFuXHRPMNI"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MasterBanner;
