import CategoriesCard from "../Components/Card/CategoriesCard";
import Title from "../Components/Title/Title";
import "../Scss/Main.scss";

function Category() {
  return (
    <div className="container">
      <Title title="CATEGORY" />
      <div className="category__wrapper">
        <div className="category__content__wrapper">
          <CategoriesCard
            title="Swimming"
            iconClass="fa-solid fa-person-swimming"
          />
        </div>
        <div className="category__content__wrapper">
          <CategoriesCard title="Football" iconClass="fa-solid fa-futbol" />
        </div>
        <div className="category__content__wrapper">
          <CategoriesCard
            title="Racing"
            iconClass="fa-solid fa-flag-checkered"
          />
        </div>
        <div className="category__content__wrapper">
          <CategoriesCard
            title="Basket Ball"
            iconClass="fa-solid fa-basketball"
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
