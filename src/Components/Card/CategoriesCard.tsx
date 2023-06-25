import { CategoryCardI } from "../../Interface/CategoryCardInterface";
import "../../Scss/Main.scss";
function CategoriesCard({ title, iconClass }: CategoryCardI) {
  return (
    <div className="categories__card__wrapper">
      <span>
        <i className={`${iconClass}`}></i>
      </span>
      <h3>{title}</h3>
    </div>
  );
}

export default CategoriesCard;
