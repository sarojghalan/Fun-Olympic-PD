import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import CustomizedTables from "../../../Utils/TableData";
import BasicModal from "../../components/modal/Modal";
import "../../styles/Style.scss";
import { AdminLiveContext } from "../../../context/AdminLive";
import { useSnackbar } from "notistack";

interface adminLiveI {
  title: string;
  url: string;
}

const initialState: adminLiveI = {
  title: "",
  url: "",
};
function AdminLive() {
  const { enqueueSnackbar } = useSnackbar();
  const { adminLive, setAdminLive } = useContext(AdminLiveContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [objFindingElem, setObjFindingElem] = useState<string>("");
  const [isDataReloader, setIsDataReloader] = useState<boolean>(false);

  const [liveData, setLiveData] = useState<adminLiveI | undefined>(
    initialState
  );

  useEffect(() => {
    if (isDataReloader) {
      setAdminLive([...adminLive!, liveData!]);
      enqueueSnackbar("Category Updated Successfully", { variant: "success" });
    }
  }, [isDataReloader]);

  const categoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLiveData({ ...liveData!, [e.target.name]: e.target.value });
  };

  const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isEditMode) {
      console.log("edit mode true");
      setAdminLive(adminLive?.filter((item) => item.title !== objFindingElem));
      setIsDataReloader(!isDataReloader);
      setIsModalOpen(!isModalOpen);
      setIsEditMode(false);
    } else {
      if (adminLive === null) {
        setAdminLive([{ ...liveData! }]);
        setLiveData(initialState);
        setIsModalOpen(!isModalOpen);
        enqueueSnackbar("Live video added successfully. ", {
          variant: "success",
        });
      } else {
        setAdminLive([...adminLive!, liveData!]);
        setLiveData(initialState);
        setIsModalOpen(!isModalOpen);
        enqueueSnackbar("Live video added successfully. ", {
          variant: "success",
        });
      }
    }
  };

  console.log("liveData : ", liveData);

  return (
    <>
      <div className="admin__category__wrapper">
        {" "}
        <BasicModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          data={liveData}
          setData={setLiveData}
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
                value={liveData?.title}
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
                value={liveData?.url}
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
            arr={adminLive}
            setArr={setAdminLive}
            itemData={setLiveData}
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

export default AdminLive;
