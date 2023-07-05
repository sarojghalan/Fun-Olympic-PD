import SampleButton from "../Button/SampleButton";
import { useNavigate } from "react-router-dom";
import ReactVideoPlayer from "../../Utils/ReactVideoPlayer";
import { useSnackbar } from "notistack";

interface FavoriteI {
  url: string;
  title: string;
  id?: number | string;
}
interface FavoriteCardI {
  url: string;
  title: string;
  favorite: FavoriteI[];
  setFavorite: React.Dispatch<
    React.SetStateAction<FavoriteI[] | null | undefined>
  >;
}

function FavoriteCard({ url, title, favorite, setFavorite }: FavoriteCardI) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const pathname = window.location.pathname;

  const favoriteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/watchlive/${title}`, {
      state: { title: title, url: url },
    });
  };
  const removeHandler = (
    e: React.MouseEvent<HTMLParagraphElement>,
    title: string,
    url: string
  ) => {
    e.preventDefault();
    if (pathname == "/live") {
      if (favorite?.find((item) => item.title === title)) {
        enqueueSnackbar("Already In favorite.", { variant: "error" });
      } else if (favorite === null) {
        setFavorite([{ url: url, title: title }]);
        enqueueSnackbar("Added to the favorite.", { variant: "success" });
      } else {
        setFavorite([...favorite!, { url: url, title: title }]);
        enqueueSnackbar("Added to the favorite.", { variant: "success" });
      }
    } else {
      setFavorite(favorite?.filter((item) => item.title !== title));
      enqueueSnackbar("Removed from favorite.", { variant: "success" });
    }
  };
  return (
    <div className="favorite__card__wrapper">
      <div className="favorite__card__img">
        <ReactVideoPlayer
          playing={true}
          controls={false}
          muted={true}
          height="300px"
          width="300px"
          url={url}
        />
      </div>
      <div className="favorite__card__content">
        <div className="favorite__card__title">
          <p>{title}</p>
          <p
            className="icon"
            onClick={(e: React.MouseEvent<HTMLParagraphElement>) =>
              removeHandler(e, title, url)
            }
          >
            {pathname == "/live" ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-solid fa-trash"></i>
            )}
          </p>
        </div>
        {/* <p className="stream__card__description">{cardDescription}</p> */}
      </div>
      <div className="favorite__card__btn">
        <SampleButton
          nameOfClass="favorite__btn"
          title="Watch"
          handler={(e: React.MouseEvent<HTMLButtonElement>) =>
            favoriteHandler(e)
          }
        />
      </div>
    </div>
  );
}

export default FavoriteCard;
