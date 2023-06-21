import { useState } from "react";

import "./Scss/Main.scss";
import Navbar from "./Layouts/Navabr/Navbar";
import MasterBanner from "./Layouts/MasterBanner/MasterBanner";
import Footer from "./Layouts/Footer/Footer";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Navbar />
      <MasterBanner />
      <Footer />
    </>
  );
}

export default App;
