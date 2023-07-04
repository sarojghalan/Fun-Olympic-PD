import React, { useContext } from "react";
import Title from "../../Components/Title/Title";
import ReactVideoPlayer from "../../Utils/ReactVideoPlayer";
import { videoUrls } from "../../data/videoUrl";
import "../../Scss/Main.scss";
import { ActiveUserContext } from "../../context/ActiveUser";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { fun, master } from "../../assets";
import { FavoriteContext } from "../../context/FavoriteContext";
import { useSnackbar } from "notistack";

function MasterBanner() {
  const navigate = useNavigate();
  const { activeUser } = useContext(ActiveUserContext);
  const { favorite, setFavorite } = useContext(FavoriteContext);
  const { enqueueSnackbar } = useSnackbar();

  const favoriteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (favorite?.find((item) => item.title === "Racing")) {
      enqueueSnackbar("Already In favorite.", { variant: "error" });
    } else if (favorite === null) {
      setFavorite([{ url: videoUrls[3]?.url, title: "Racing", id: 1 }]);
      enqueueSnackbar("Added to the favorite.", { variant: "success" });
    } else {
      setFavorite([
        ...favorite!,
        { url: videoUrls[3]?.url, title: "Racing", id: 1 },
      ]);
      enqueueSnackbar("Added to the favorite.", { variant: "success" });
    }
  };
  return (
    <div className="master__banner__wrapper">
        <div className="row">
          <div className="col-12 col-lg-12 col-md-12 col-sm-12 ">
            <div className="master__banner__left__section">
              {activeUser ? (
                <>
                  <ReactVideoPlayer
                    playing={videoUrls[3]?.playing}
                    controls={videoUrls[3]?.controls}
                    muted={videoUrls[3]?.muted}
                    height="92.1vh"
                    width="100%"
                    url={videoUrls[3]?.url}
                  />
                  <div className="content__description">
                    <div className="content__desc__img">
                      <img src={fun} alt="" />
                    </div>
                    <p>FUN OLYMPICS | RALLY </p>
                    <button
                      className="content__desc__btn"
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                        favoriteHandler(e)
                      }
                    >
                      Add to Favorite
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="master__banner__img__wrapper">
                    <img
                      src={master}
                      style={{
                        height: '92.1vh',
                        width: '100%',
                        objectFit:'cover'
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
                  <div className="content__description">
                    <div className="content__desc__img">
                      <img src={master} alt="" />
                    </div>
                    <p>FUN OLYMPICS | RALLY </p>
                    <button className="content__desc__btn">
                      Add to Favorite
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
    </div>
  );
}

export default MasterBanner;
