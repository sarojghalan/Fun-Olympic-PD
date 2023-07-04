import { Route, Routes } from "react-router-dom";
import AdminHome from "../layouts/AdminHome/AdminHome";
import AdminCategory from "../layouts/Category/Category";
import GraphBar from "../layouts/Graph/GraphBar";
import Analytics from "../layouts/Analytics/Analytics";
import AdminLive from "../layouts/AdminLive/Live";
import AdminPopular from "../layouts/AdminPopular/Popular";

function AdminRouting() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/category" element={<AdminCategory />} />
      <Route path="/graph" element={<GraphBar />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/live" element={<AdminLive />} />
      <Route path="/popular-stream" element={<AdminPopular />} />
    </Routes>
  );
}
export default AdminRouting;
