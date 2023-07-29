import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainHero from "./components/Main";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import RecipeA from "./pages/RecipeA";
import RecipeB from "./pages/RecipeB";

function App() {
  return (
    <div>
      <NavBar />,
      <MainHero />,
      <AboutUs />,
      <Footer />
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/RecipeA" element={<RecipeA />} />
            <Route path="/RecipeB" element={<RecipeB />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
