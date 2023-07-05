import { useNavigate } from "react-router-dom";
import Title from "../Components/Title/Title";
import { useContext } from "react";
import { AdminLiveContext } from "../context/AdminLive";
import FavoriteCard from "../Components/Card/FavoriteCard";
import { FavoriteContext } from "../context/FavoriteContext";
import { ActiveUserContext } from "../context/ActiveUser";

function Live() {
  const navigate = useNavigate();
  const { activeUser } = useContext(ActiveUserContext);
  const { adminLive, setAdminLive } = useContext(AdminLiveContext);
  const { favorite, setFavorite } = useContext(FavoriteContext);

  return (
    <div className="overall__wrapper">
      <div className="container">
        <Title title="LIVE STREAMING" />
        <div className="live__wrapper">
          {adminLive?.map((item, keys) => (
            <FavoriteCard
              title={item?.title}
              url={item?.url}
              favorite={favorite}
              setFavorite={setFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Live;
