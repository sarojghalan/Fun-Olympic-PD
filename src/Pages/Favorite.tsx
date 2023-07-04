import React, { useContext } from "react";
import Title from "../Components/Title/Title";
import { FavoriteContext } from "../context/FavoriteContext";
import { useSnackbar } from "notistack";
import FavoriteCard from "../Components/Card/FavoriteCard";

function Favorite() {
  const { favorite, setFavorite } = useContext(FavoriteContext);
  const { enqueueSnackbar } = useSnackbar();

  console.log("favorite : ", favorite);
  return (
    <div className="favorite__container">
      <div className="container">
        <Title title="FAVORITE" />
        <div className="live__wrapper">
          {favorite === undefined ||
          favorite === null ||
          favorite.length <= 0 ? (
            <p>Nothing on Favorites</p>
          ) : (
            favorite?.map((item, keys) => (
              <FavoriteCard
                title={item?.title}
                url={item?.url}
                favorite={favorite}
                setFavorite={setFavorite}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
