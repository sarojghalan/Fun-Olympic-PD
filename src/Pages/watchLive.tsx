import React, { useState, useContext } from "react";
import Title from "../Components/Title/Title";
import { videoUrls } from "../data/videoUrl";
import ReactVideoPlayer from "../Utils/ReactVideoPlayer";
import { useLocation } from "react-router-dom";
import { fun } from "../assets";
import { FavoriteContext } from "../context/FavoriteContext";
import { useSnackbar } from "notistack";

function WatchLive() {
  const dataNavigator = useLocation();
  const [commentData, setCommentData] = useState<string>("");
  const [commentArray, setCommentArray] = useState<string[]>([]);
  const { favorite, setFavorite } = useContext(FavoriteContext);
  const { enqueueSnackbar } = useSnackbar();

  const commentHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCommentArray([...commentArray, commentData]);
    setCommentData("");
  };

  const favoriteHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    url: string,
    title: string
  ) => {
    e.preventDefault();
    e.preventDefault();
    if (favorite?.find((item) => item.title === title)) {
      enqueueSnackbar("Already In favorite.", { variant: "error" });
    } else if (favorite === null) {
      setFavorite([{ url: url, title: title }]);
      enqueueSnackbar("Added to the favorite.", { variant: "success" });
    } else {
      setFavorite([...favorite!, { url: url, title: title }]);
      enqueueSnackbar("Added to the favorite.", { variant: "success" });
    }
  };
  return (
    <div className="overall__wrapper">
      <div className="watch__live__wrapper">
        <div className="container">
          <Title title={dataNavigator?.state?.title} />
          <div className="row">
            <div className="col-md-9">
              <div className="watch__live__content">
                <div className="watch__live__video__wrapper">
                  <ReactVideoPlayer
                    playing={true}
                    controls={false}
                    muted={true}
                    height="80vh"
                    width="100%"
                    url={dataNavigator?.state?.url}
                  />
                </div>
                <div className="content__description">
                  <div className="content__desc__img">
                    <img src={fun} alt="" />
                  </div>
                  <p>FUN OLYMPICS | {dataNavigator?.state?.title} </p>
                  <button
                    className="content__desc__btn"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      favoriteHandler(
                        e,
                        dataNavigator?.state?.url,
                        dataNavigator?.state?.title
                      )
                    }
                  >
                    Add to Favorite
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="comment__section">
                <div className="top__chat">
                  <p>Top Chat</p>
                </div>
                <hr />
                <div className="comment__content">
                  <ul>
                    {commentArray.map((item) => (
                      <li>
                        <span>
                          <i className="fa-solid fa-user"></i>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <hr />
                <div className="comment__input__section">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <p>Saroj</p>
                  <input
                    type="text"
                    placeholder="comment..."
                    value={commentData}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCommentData(e.target.value)
                    }
                  />
                </div>
                <div className="comment__btn">
                  <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      commentHandler(e)
                    }
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchLive;
