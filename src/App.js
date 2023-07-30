import "./Styles.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RecipeA from "./pages/RecipeA";
import RecipeB from "./pages/RecipeB";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/recipeA" element={<RecipeA />} />
        <Route path="/recipeB" element={<RecipeB />} />
      </Routes>
    </div>
  );
}

export default App;
