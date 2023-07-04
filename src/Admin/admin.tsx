import { useContext } from "react";
import SideBar from "./components/Sidebar/SideBar";
import AdminRouting from "./routes/Routing";
import "./styles/Style.scss";
import { AdminContext } from "../context/AdminContext";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function Admin() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { isActive, setIsActive } = useContext(AdminContext);
  const logoutHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActive(false);
    enqueueSnackbar("Admin Logout Successfully .", { variant: "success" });
    navigate("/login");
  };
  return (
    <>
      <div className="d-flex"> 
        <SideBar />
        <div className="routing__wrapper">
          <div className="admin__title__wrapper">
            <p>Dashboard</p>
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                logoutHandler(e)
              }
            >
              Log Out
            </button>
          </div>
          <AdminRouting />
        </div>
      </div>
    </>
  );
}

export default Admin;
