import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Auth/Register";
import Category from "../Pages/Category";

const Home = lazy(() => import("../Layouts/Home/Home"));
const Login = lazy(() => import("../Pages/Auth/Login"));

function Routing() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Suspense>
  );
}

export default Routing;
