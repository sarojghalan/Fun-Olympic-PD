import { useNavigate } from "react-router-dom";
import Title from "../Components/Title/Title";
import { useContext } from "react";
import { AdminLiveContext } from "../context/AdminLive";
import FavoriteCard from "../Components/Card/FavoriteCard";
import { FavoriteContext } from "../context/FavoriteContext";

function Live() {
  const navigate = useNavigate();
  const { adminLive, setAdminLive } = useContext(AdminLiveContext);
  const { favorite, setFavorite } = useContext(FavoriteContext);

  const liveHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    keys: number
  ) => {
    e.preventDefault();
    navigate(`/watchLive/live${keys + 1}`, {
      state: { title: `live ${keys + 1}`, key: keys },
    });
  };

  console.log(adminLive);
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
