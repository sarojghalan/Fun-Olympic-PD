import { useNavigate } from "react-router-dom";
import { CategoryCardI } from "../../Interface/CategoryCardInterface";
import "../../Scss/Main.scss";
function CategoriesCard({ title, iconClass , id }: CategoryCardI) {
  const navigate = useNavigate();
  const categoryHandler = (e:React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    navigate(`/watchlive/${title}`, {
      state: { title: title , key: id},
    });
  }
  return (
    <div
      className="categories__card__wrapper"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => categoryHandler(e)}
    >
      <span>
        <i className={`${iconClass}`}></i>
      </span>
      <h3>{title}</h3>
    </div>
  );
}

export default CategoriesCard;
