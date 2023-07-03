import React, { useContext } from "react";
import SampleButton from "../Components/Button/SampleButton";
import Title from "../Components/Title/Title";
import { videoUrls } from "../data/videoUrl";
import ReactVideoPlayer from "../Utils/ReactVideoPlayer";
import { FavoriteContext } from "../context/FavoriteContext";
import { fun } from "../assets";
import { useSnackbar } from "notistack";

function Favorite() {
  const { favorite, setFavorite } = useContext(FavoriteContext);
  const { enqueueSnackbar } = useSnackbar();
  const removeHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    title: string
  ) => {
    e.preventDefault();
    setFavorite(favorite?.filter((item) => item.title !== title));
    enqueueSnackbar("Removed from favorite.", { variant: "error" });
  };
  return (
    <div className="container">
      <Title title="FAVORITE" />
      <div className="live__wrapper">
        {favorite === undefined || favorite === null || favorite.length <= 0 ? (
          <p>Nothing on Favorites</p>
        ) : (
          favorite?.map((item, keys) => (
            <div className="live__content">
              <div className="live__video__wrapper">
                <ReactVideoPlayer
                  playing={true}
                  controls={false}
                  muted={true}
                  height="100%"
                  width="100%"
                  url={item?.url}
                />
              </div>

              <div className="content__description">
                <div className="content__desc__img">
                  <img src={fun} alt="" />
                </div>
                <p>FUN OLYMPICS | {item.title} </p>
              </div>
              <SampleButton
                title="Remove"
                nameOfClass=""
                handler={(e: React.MouseEvent<HTMLButtonElement>) =>
                  removeHandler(e, item?.title)
                }
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorite;
