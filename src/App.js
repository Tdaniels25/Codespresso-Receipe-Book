import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainHero from "./components/Main";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />,
      <MainHero />,
      <AboutUs />,
      <Footer />
    </div>
  );
}

export default App;
