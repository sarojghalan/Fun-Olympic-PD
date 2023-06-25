import CategoriesCard from "../Components/Card/CategoriesCard";

function Category() {
  return (
    <div className="container">
      <div className="category__wrapper">
        <div className="category__content__wrapper">
          <CategoriesCard
            title="Swimming"
            iconClass="fa-solid fa-person-swimming"
          />
        </div>
        <div className="category__content__wrapper">
          <CategoriesCard
            title="Swimming"
            iconClass="fa-solid fa-person-swimming"
          />
        </div>
        <div className="category__content__wrapper">
          <CategoriesCard
            title="Swimming"
            iconClass="fa-solid fa-person-swimming"
          />
        </div>
        <div className="category__content__wrapper">
          <CategoriesCard
            title="Swimming"
            iconClass="fa-solid fa-person-swimming"
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
