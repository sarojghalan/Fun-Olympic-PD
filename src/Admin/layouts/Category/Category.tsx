import { Container } from "@mui/material";
import CustomizedTables from "../../../Utils/TableData";
import "../../styles/Style.scss";
import Title from "../../../Components/Title/Title";
import { CategoryData } from "../../../data/categoryData";

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
    <div className="admin__category__wrapper">
      <button className="admin__add">Add New</button>
      <Container>
        <CustomizedTables arr={AdminCategoryArr} />
      </Container>
    </div>
  );
}

export default AdminCategory;
