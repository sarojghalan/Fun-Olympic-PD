import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../Layouts/Home/Home"));
const Login = lazy(() => import("../Pages/Login/Login"));

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Routing;
