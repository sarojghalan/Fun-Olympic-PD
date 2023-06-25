import "./Scss/Main.scss";
import Navbar from "./Layouts/Navabr/Navbar";
import Footer from "./Layouts/Footer/Footer";
import Routing from "./Routes/Routing";

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
