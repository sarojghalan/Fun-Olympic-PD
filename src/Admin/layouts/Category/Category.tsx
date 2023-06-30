import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import CustomizedTables from "../../../Utils/TableData";
import BasicModal from "../../components/modal/Modal";
import "../../styles/Style.scss";
import { AdminCategoryContext } from "../../../context/AdminCategory";

interface adminCategoryI {
  title: string;
  url: string;
  iconClass: string;
}

function AdminCategory() {
  const { adminCategory, setAdminCategory } = useContext(AdminCategoryContext);
  const initialState: adminCategoryI = {
    title: "",
    url: "",
    iconClass: "",
  };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [categoryData, setCategoryData] =
    useState<adminCategoryI>(initialState);

  const categoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (adminCategory === null) {
      setAdminCategory([{ ...categoryData }]);
      setCategoryData(initialState);
      setIsModalOpen(!isModalOpen);
    } else {
      setAdminCategory([...adminCategory!, categoryData]);
      setCategoryData(initialState);
      setIsModalOpen(!isModalOpen);
    }
  };

  console.log(categoryData);
  return (
    <>
      <div className="admin__category__wrapper">
        {" "}
        <BasicModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <form className="admin__add__form" action="">
            <p>Add Category</p>
            <div className="form__input">
              <label htmlFor="">TITLE</label>
              <br />
              <input
                type="text"
                placeholder="title"
                name="title"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  categoryHandler(e)
                }
              />
            </div>
            <div className="form__input">
              <label htmlFor="">URL</label>
              <br />
              <input
                type="text"
                placeholder="title"
                name="url"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  categoryHandler(e)
                }
              />
            </div>
            <div className="form__input">
              <label htmlFor="">Icon Class</label>
              <br />
              <input
                type="text"
                placeholder="Icon Class"
                name="iconClass"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  categoryHandler(e)
                }
              />
            </div>
            <div className="form__btn">
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  addHandler(e)
                }
              >
                Add
              </button>
            </div>
          </form>
        </BasicModal>
        <Container>
          <CustomizedTables arr={adminCategory} setArr={setAdminCategory} />
        </Container>
      </div>
    </>
  );
}

export default AdminCategory;
