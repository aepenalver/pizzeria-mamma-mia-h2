import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavMenu from "./components/Navbar";

function App() {
  return (
    <>
      <NavMenu />
      <Home />
      <Footer />
    </>
  );
}

export default App;
