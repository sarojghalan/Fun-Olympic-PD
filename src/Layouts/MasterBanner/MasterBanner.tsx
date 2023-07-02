import React, { useContext } from "react";
import Title from "../../Components/Title/Title";
import ReactVideoPlayer from "../../Utils/ReactVideoPlayer";
import { videoUrls } from "../../data/videoUrl";
import "../../Scss/Main.scss";
import { ActiveUserContext } from "../../context/ActiveUser";
import { useNavigate } from "react-router-dom";

function MasterBanner() {
  const navigate = useNavigate();
  const { activeUser } = useContext(ActiveUserContext);
  return (
    <div className="master__banner__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 col-md-12 col-sm-12 ">
            <div className="master__banner__left__section">
              {activeUser ? (
                <ReactVideoPlayer
                  playing={videoUrls[3]?.playing}
                  controls={videoUrls[3]?.controls}
                  muted={videoUrls[3]?.muted}
                  height="85vh"
                  width="100%"
                  url={videoUrls[3]?.url}
                />
              ) : (
                <div className="master__banner__img__wrapper">
                  <img
                    src={videoUrls[0].img}
                    style={{
                      height: `${videoUrls[0].height}`,
                      width: `${videoUrls[0]?.width}`,
                      zIndex: '0'
                    }}
                  />
                  <button
                    className="master__banner__btn"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      navigate("/login")
                    }
                  >
                    Watch
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-12 col-sm-6 col-12">
            <Title title="Related Videos" />
            {videoUrls.slice(1).map((item) => (
              <>
                {activeUser ? (
                  <div className="master__banner__right__section">
                    <ReactVideoPlayer
                      playing={item?.playing}
                      muted={item?.muted}
                      height={item?.height}
                      width={item?.width}
                      url={item?.url}
                    />
                  </div>
                ) : (
                  <div className="master__banner__img__wrapper">
                    <img
                      src={item?.img}
                      style={{
                        height: `${item.height}`,
                        width: `${item?.width}`,
                        objectFit: "cover",
                        marginBottom: "32px",
                        border: "1px solid black",
                        zIndex: '0'
                      }}
                    />
                    <button
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                        navigate("/login")
                      }
                    >
                      Watch
                    </button>
                  </div>
                )}
              </>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MasterBanner;
