import { Container } from "react-bootstrap";
import "../../../Scss/Main.scss";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BarChartIcon from "@mui/icons-material/BarChart";
import { NavLink } from "react-router-dom";
import { logo } from "../../../assets";

function SideBar() {
  const pathName = window.location.pathname;
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__content">
        <div className="sidebar__title">
          <img src={logo} alt="logo" />
          <h3>Fun Olympics</h3>
        </div>
        <div className="sidebar__list">
          <div className="sidebar__list__content">
            <span>
              <HomeIcon />
            </span>
            <p>
              <NavLink to="/">Home</NavLink>
            </p>
            {/* )} */}
          </div>
          <div className="sidebar__list__content">
            <span>
              <CategoryIcon />
            </span>
            <p>
              <NavLink to="/category">Category</NavLink>
            </p>
          </div>
          <div className="sidebar__list__content">
            <span>
              <LiveTvIcon />
            </span>
            <p>
              <NavLink to="/live">Live</NavLink>
            </p>
          </div>
          <div className="sidebar__list__content">
            <span>
              <AnalyticsIcon />
            </span>
            <p>
              <NavLink to="/analytics">Analytics</NavLink>
            </p>
          </div>
          <div className="sidebar__list__content">
            <span>
              <BarChartIcon />
            </span>
            <p>
              <NavLink to="/graph">Chart</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
