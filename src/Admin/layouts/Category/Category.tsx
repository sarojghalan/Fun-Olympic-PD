import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import CustomizedTables from "../../../Utils/TableData";
import BasicModal from "../../components/modal/Modal";
import "../../styles/Style.scss";
import { AdminCategoryContext } from "../../../context/AdminCategory";
import { useSnackbar } from "notistack";

interface adminCategoryI {
  title: string;
  url: string;
  iconClass: string;
}

const initialState: adminCategoryI = {
  title: "",
  url: "",
  iconClass: "",
};
function AdminCategory() {
  const { enqueueSnackbar } = useSnackbar();
  const { adminCategory, setAdminCategory } = useContext(AdminCategoryContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [objFindingElem, setObjFindingElem] = useState<string>("");
  const [isDataReloader, setIsDataReloader] = useState<boolean>(false);

  const [categoryData, setCategoryData] = useState<adminCategoryI | undefined>(
    initialState
  );

  useEffect(() => {
    if (isDataReloader) {
      setAdminCategory([...adminCategory!, categoryData!]);
      enqueueSnackbar("Category Updated Successfully", { variant: "success" });
    }
  }, [isDataReloader]);

  const categoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCategoryData({ ...categoryData!, [e.target.name]: e.target.value });
  };

  const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isEditMode) {
      setAdminCategory(
        adminCategory?.filter((item) => item.title !== objFindingElem)
      );
      setIsDataReloader(!isDataReloader);
      setIsModalOpen(!isModalOpen);
      setIsEditMode(false);
    } else {
      if (adminCategory === null) {
        setAdminCategory([{ ...categoryData! }]);
        setCategoryData(initialState);
        setIsModalOpen(!isModalOpen);
        enqueueSnackbar("Category added successfully. ", {
          variant: "success",
        });
      } else {
        setAdminCategory([...adminCategory!, categoryData!]);
        setCategoryData(initialState);
        setIsModalOpen(!isModalOpen);
        enqueueSnackbar("Category added successfully. ", {
          variant: "success",
        });
      }
    }
  };

  return (
    <>
      <div className="admin__category__wrapper">
        {" "}
        <BasicModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          data={categoryData}
          setData={setCategoryData}
        >
          <form className="admin__add__form" action="">
            <p>Add Category</p>
            <div className="form__input">
              <label htmlFor="">TITLE</label>
              <br />
              <input
                type="text"
                placeholder="enter title ..."
                name="title"
                value={categoryData?.title}
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
                placeholder="enter url ..."
                name="url"
                value={categoryData?.url}
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
                placeholder="enter icon Class ..."
                name="iconClass"
                value={categoryData?.iconClass}
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
                {isEditMode ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </BasicModal>
        <Container>
          <CustomizedTables
            arr={adminCategory}
            setArr={setAdminCategory}
            itemData={setCategoryData}
            editMode={isEditMode}
            setEditMode={setIsEditMode}
            objFindingElem={objFindingElem}
            setObjFindingElem={setObjFindingElem}
          />
        </Container>
      </div>
    </>
  );
}

export default AdminCategory;
