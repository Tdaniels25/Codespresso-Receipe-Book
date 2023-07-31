import "./Styles.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import RecipeA from "./pages/RecipeA";
import RecipeB from "./pages/RecipeB";
import RecipeC from "./pages/RecipeC";
import RecipeD from "./pages/RecipeD";
import List from "./components/RecipeList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/recipeA" element={<RecipeA />} />
        <Route path="/recipeB" element={<RecipeB />} />
        <Route path="/recipeC" element={<RecipeC />} />
        <Route path="/recipeD" element={<RecipeD />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/list" element={<List />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/nav" element={<NavBar />} />

      </Routes>
    </div>
  );
}

export default App;
