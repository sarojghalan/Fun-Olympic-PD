import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../Layouts/Home/Home"));
const Login = lazy(() => import("../Pages/Auth/Login"));
const Register = lazy(() => import("../Pages/Auth/Register"));
const Category = lazy(() => import("../Pages/Category"));
const Live = lazy(() => import("../Pages/Live"));
const Favorite = lazy(() => import("../Pages/Favorite"));

function Routing() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/live" element={<Live />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Suspense>
  );
}

export default Routing;
