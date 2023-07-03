import React, { useState } from "react";
import Title from "../Components/Title/Title";
import { videoUrls } from "../data/videoUrl";
import ReactVideoPlayer from "../Utils/ReactVideoPlayer";
import { useLocation } from "react-router-dom";

function WatchLive() {
  const dataNavigator = useLocation();
  const [commentData, setCommentData] = useState<string>("");
  const [commentArray, setCommentArray] = useState<string[]>([]);
  console.log(commentArray);
  const commentHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCommentArray([...commentArray, commentData]);
    setCommentData("");
  };
  return (
    <div className="watch__live__wrapper">
      <div className="container">
        <Title title={dataNavigator?.state?.title} />
        <div className="row">
          <div className="col-md-9">
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
  );
}

export default WatchLive;
