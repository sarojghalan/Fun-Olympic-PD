import { Route, Routes } from "react-router-dom";
import AdminHome from "../layouts/AdminHome/AdminHome";

function AdminRouting() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
    </Routes>
  );
}
export default AdminRouting;
