import { Route, Routes } from "react-router-dom";
import AdminHome from "../layouts/AdminHome/AdminHome";
import AdminCategory from "../layouts/Category/Category";

function AdminRouting() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/category" element={<AdminCategory />} />
    </Routes>
  );
}
export default AdminRouting;
