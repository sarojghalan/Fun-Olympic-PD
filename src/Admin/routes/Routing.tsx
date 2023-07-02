import { Route, Routes } from "react-router-dom";
import AdminHome from "../layouts/AdminHome/AdminHome";
import AdminCategory from "../layouts/Category/Category";
import GraphBar from "../layouts/Graph/GraphBar";
import Analytics from "../layouts/Analytics/Analytics";

function AdminRouting() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/category" element={<AdminCategory />} />
      <Route path="/graph" element={<GraphBar />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}
export default AdminRouting;
