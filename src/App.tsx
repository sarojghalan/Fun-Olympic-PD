import { useState } from "react";

import "./Scss/Main.scss";
import Navbar from "./Layouts/Navabr/Navbar";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
