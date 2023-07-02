import { Container } from "react-bootstrap";
import "../../../Scss/Main.scss";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BarChartIcon from '@mui/icons-material/BarChart';
import { NavLink } from "react-router-dom";

function SideBar() {
  const pathName = window.location.pathname;
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__content">
        <div className="sidebar__title">
          <h3>Fun Olympics</h3>
        </div>
        <div className="sidebar__list">
          <div className="sidebar__list__content">
            {/* {pathName == "/" ? (
              <p className="active">
                <span>
                  <HomeIcon />
                </span>
                Home
              </p>
            ) : ( */}
            <p>
              <NavLink to="/">
                <span>
                  <HomeIcon />
                </span>
                Home
              </NavLink>
            </p>
            {/* )} */}
          </div>
          <div className="sidebar__list__content">
            <p>
              <NavLink to="/category">
                <span>
                  <CategoryIcon />
                </span>
                Category
              </NavLink>
            </p>
          </div>
          <div className="sidebar__list__content">
            <p>
              <NavLink to="/live">
                <span>
                  <LiveTvIcon />
                </span>
                Live
              </NavLink>
            </p>
          </div>
          <div className="sidebar__list__content">
            <p>
              <NavLink to="/analytics">
                <span>
                  <AnalyticsIcon />
                </span>
                Analytics
              </NavLink>
            </p>
          </div>
          <div className="sidebar__list__content">
            <p>
              <NavLink to="/graph">
                <span>
                  <BarChartIcon />
                </span>
                Chart
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
