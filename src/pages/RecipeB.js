import React from "react";
import "../RecipePage.css";
import { Link } from "react-router-dom";
import RecipeTitle from "../components/RecipeTitle";
import mocha from "./img/mocha4.jpg";
import mochaStep from "./img/mocha-step.jpg";
import RecipePrep from "../components/RecipePrep";
import recipes from "../components/DetailedRecipe";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeMethod from "../components/RecipeMethod";
import RecipeEquipment from "../components/RecipeEquipment";

const RecipeB = () => {
  const recipeB = recipes.find((recipe) => recipe.id === "RecipeB");

  if (!recipeB) {
    return <div>Recipe not found!</div>;
  }
  return (
    <div>
      <div className="pages-container">
        <div className="content-container">
          <div className="row">
            <div className="col-5">
              <img src={mocha} alt="" id="main-image" />
              <h4 className="recipe-guide">Recipe Guide</h4>
              <img src={mochaStep} alt="recipe directions" id="recipe-steps" />
              <RecipeEquipment recipe={recipeB} />
            </div>
            <div className="col-7" id="recipe-content">
              <RecipeTitle recipe={recipeB} />
              <div className="rating">
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-solid fa-star fa-xl"></i>
              </div>
              <p className="recipe-description">
                Indulge in a delightful Mocha Frappuccino, a blissful fusion of
                rich chocolate and smooth coffee. The perfect icy treat to
                savor!
              </p>
              <RecipePrep recipe={recipeB} />
              <RecipeIngredients recipe={recipeB} />
              <RecipeMethod recipe={recipeB} />
            </div>
          </div>
          <div className="recipePage-btns">
            <Link to="./LandingPage" className="recipePage-homeBtn">
              Home
            </Link>
            <Link to="../List" className="recipePage-recipeBtn">
              Back to Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeB;
