import { Route, Routes } from "react-router-dom";
import AdminHome from "../layouts/AdminHome/AdminHome";
import AdminCategory from "../layouts/Category/Category";
import GraphBar from "../layouts/Graph/GraphBar";

function AdminRouting() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/category" element={<AdminCategory />} />
      <Route path="/graph" element={<GraphBar />} />
    </Routes>
  );
}
export default AdminRouting;
