import { Container } from "@mui/material";
import CustomizedTables from "../../../Utils/TableData";
import BasicModal from "../../components/modal/Modal";
import "../../styles/Style.scss";

interface adminCategoryI {
  title: string;
  url: string;
  id: number;
}

const AdminCategoryArr: adminCategoryI[] = [
  {
    id: 1,
    title: "Football",
    url: "https://www.youtube.com/watch?v=hQYRDNl-lGI",
  },
  {
    id: 2,
    title: "Basketball",
    url: "https://www.youtube.com/watch?v=hQYRDNl-lGI",
  },
  {
    id: 2,
    title: "Swimming",
    url: "https://www.youtube.com/watch?v=hQYRDNl-lGI",
  },
  {
    id: 3,
    title: "Ice Hockey",
    url: "https://www.youtube.com/watch?v=hQYRDNl-lGI",
  },
];

function AdminCategory() {
  return (
    <>
      <div className="admin__category__wrapper">
        {" "}
        <BasicModal>
          <form className="admin__add__form" action="">
            <p>Add Category</p>
            <div className="form__input">
              <label htmlFor="">TITLE</label>
              <br />
              <input type="text" placeholder="title" />
            </div>
            <div className="form__input">
              <label htmlFor="">URL</label>
              <br />
              <input type="text" placeholder="title" />
            </div>
            <div className="form__btn">
              <button>Add</button>
            </div>
          </form>
        </BasicModal>
        <Container>
          <CustomizedTables arr={AdminCategoryArr} />
        </Container>
      </div>
    </>
  );
}

export default AdminCategory;
