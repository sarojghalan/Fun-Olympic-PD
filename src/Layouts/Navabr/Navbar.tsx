import SampleButton from "../../Components/Button/SampleButton";
import { logo } from "../../assets";
import "../../Scss/Main.scss";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const LoginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/login');
  };
  const RegisterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Favorite
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                live
              </a>
            </li>
          </ul>
          <div className="nav__right__section">
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
