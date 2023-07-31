import React from "react";
import "../RecipePage.css";
import { Link } from "react-router-dom";
import RecipeTitle from "../components/RecipeTitle";
import caramel from "./img/caramel2.jpg";
import caramelStep from "./img/caramel-step.jpg";
import RecipePrep from "../components/RecipePrep";
import recipes from "../components/DetailedRecipe";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeMethod from "../components/RecipeMethod";
import RecipeEquipment from "../components/RecipeEquipment";

const RecipeD = () => {
  const recipeD = recipes.find((recipe) => recipe.id === "RecipeD");

  if (!recipeD) {
    return <div>Recipe not found!</div>;
  }
  return (
    <div>
      <div className="pages-container">
        <div className="content-container">
          <div className="row">
            <div className="col-5">
              <img src={caramel} alt="" id="main-image" />
              <h4 className="recipe-guide">Recipe Guide</h4>
              <img
                src={caramelStep}
                alt="recipe directions"
                id="recipe-steps"
              />
              <RecipeEquipment recipe={recipeD} />
            </div>
            <div className="col-7" id="recipe-content">
              <RecipeTitle recipe={recipeD} />
              <div className="rating">
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-solid fa-star-half-stroke fa-xl"></i>
              </div>
              <p className="recipe-description">
                Savor the delightful fusion of cinnamon-infused syrup and bold
                espresso—a cozy caffeine boost that's a must-try for coffee
                enthusiasts.
              </p>
              <RecipePrep recipe={recipeD} />
              <RecipeIngredients recipe={recipeD} />
              <RecipeMethod recipe={recipeD} />
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

export default RecipeD;
