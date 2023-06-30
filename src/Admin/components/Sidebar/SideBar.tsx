import { Container } from "react-bootstrap";
import "../../../Scss/Main.scss";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function SideBar() {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__content">
        <div className="sidebar__title">
          <h3>Fun Olympics</h3>
        </div>
        <div className="sidebar__list">
          <div className="sidebar__list__content">
            <p>
              <span>
                <HomeIcon />
              </span>
              Home
            </p>
          </div>
          <div className="sidebar__list__content">
            <p>
              <span>
                <CategoryIcon />
              </span>
              Category
            </p>
          </div>
          <div className="sidebar__list__content">
            <p>
              <span>
                <BookmarkIcon />
              </span>
              Favorite
            </p>
          </div>
          <div className="sidebar__list__content">
            <p>
              <span>
                <LiveTvIcon />
              </span>
              Live
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
