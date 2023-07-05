import React, { useContext } from "react";
import SampleButton from "../../Components/Button/SampleButton";
import { logo } from "../../assets";
import "../../Scss/Main.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { ActiveUserContext } from "../../context/ActiveUser";
import { useSnackbar } from "notistack";
import { FavoriteContext } from "../../context/FavoriteContext";

function Navbar() {
  const { activeUser, setActiveUser } = useContext(ActiveUserContext);
  const { favorite, setFavorite } = useContext(FavoriteContext);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const LoginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/login");
  };
  const RegisterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/register");
  };

  const logoutHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveUser(null);
    navigate("/");
    enqueueSnackbar("Successfully Logout.", { variant: "success" });
  };

  const profileHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/category"
              >
                Categories
              </NavLink>
            </li>
            {activeUser && (
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/favorite"
                >
                  Favorite{" "}
                  {favorite !== null && (
                    <sup className="count__value">{favorite?.length}</sup>
                  )}
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/live"
              >
                live
              </NavLink>
            </li>
          </ul>
          <div className="nav__right__section">
            {activeUser ? (
              <>
                <div>
                  <SampleButton
                    title="Log Out"
                    nameOfClass=""
                    handler={(e: React.MouseEvent<HTMLButtonElement>) =>
                      logoutHandler(e)
                    }
                  />
                </div>
                <div>
                  <SampleButton
                    title="Edit Profile"
                    nameOfClass=""
                    handler={(e: React.MouseEvent<HTMLButtonElement>) =>
                      profileHandler(e)
                    }
                  />
                </div>
              </>
            ) : (
              <>
                {" "}
                <div>
                  <SampleButton
                    title="Login"
                    nameOfClass=""
                    handler={(e: React.MouseEvent<HTMLButtonElement>) =>
                      LoginHandler(e)
                    }
                  />
                </div>
                <div>
                  <SampleButton
                    title="Register"
                    nameOfClass=""
                    handler={(e: React.MouseEvent<HTMLButtonElement>) =>
                      RegisterHandler(e)
                    }
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
