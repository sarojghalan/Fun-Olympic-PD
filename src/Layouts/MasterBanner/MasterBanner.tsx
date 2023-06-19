import ReactPlayer from "react-player/youtube";
import "../../Scss/Main.scss";

function MasterBanner() {
  return (
    <div className="master__banner__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="master__banner__left__section">
              <ReactPlayer url="https://www.youtube.com/watch?v=fg_5chxKCHo" />
            </div>
          </div>
          <div className="col-6">
            <div className="master__banner__right__section">
              <ReactPlayer url="https://www.youtube.com/watch?v=rFFuXHRPMNI" />
            </div>
          </div>
          <div className="col-6">
            <div className="master__banner__left__section">
              <ReactPlayer url="https://www.youtube.com/watch?v=VbLXsDbpJSM" />
            </div>
          </div>
          <div className="col-6">
            <div className="master__banner__right__section">
              <ReactPlayer url="https://www.youtube.com/watch?v=lV4KukBeV2E" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterBanner;
