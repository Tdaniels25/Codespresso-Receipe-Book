import "/src/Styles.css"
import NavBar from './components/NavBar';
import MainHero from "./components/Main";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import RecipeA from "./pages/RecipeA";
import RecipeB from "./pages/RecipeB";
import RecipeList from './components/RecipeList';



function App() {
  return (
        <div>
          <NavBar />,
       <MainHero />,
       <AboutUs />,
       <Footer />,
       <RecipeList/>
       </div>
       

  );
}

export default App;
