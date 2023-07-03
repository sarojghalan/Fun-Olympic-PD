import React from "react";
import CategoriesCard from "../Components/Card/CategoriesCard";
import Title from "../Components/Title/Title";
import "../Scss/Main.scss";
import { AdminCategoryContext } from "../context/AdminCategory";
import { CategoryData } from "../data/categoryData";

function Category() {
  const { adminCategory } = React.useContext(AdminCategoryContext);
  console.log(adminCategory);
  return (
    <div className="container">
      <Title title="CATEGORY" />
      <div className="category__wrapper">
        {adminCategory?.map((item) => (
          <div className="category__content__wrapper">
            <CategoriesCard
              title={item?.title}
              iconClass={item?.iconClass}
              url={item?.url}
            />
          </div>
        ))}
        {/* <div className="category__content__wrapper">
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
        </div> */}
      </div>
    </div>
  );
}

export default Category;
