import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryCardI } from "../../Interface/CategoryCardInterface";
import "../../Scss/Main.scss";
import { ActiveUserContext } from "../../context/ActiveUser";
function CategoriesCard({ title, iconClass, url }: CategoryCardI) {
  const navigate = useNavigate();
  const { activeUser } = useContext(ActiveUserContext);
  const categoryHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (activeUser) {
      navigate(`/watchlive/${title}`, {
        state: { title: title, url: url },
      });
    } else {
      navigate("/login");
    }
  };
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
