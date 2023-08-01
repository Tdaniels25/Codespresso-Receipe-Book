import React from "react";
import "../RecipePage.css";
import RecipeTitle from "../components/RecipeTitle";
import latte from "./img/latte2.jpg";
import latteStep from "./img/latte-step.jpg";
import RecipePrep from "../components/RecipePrep";
import { Link } from "react-router-dom";
import recipes from "../components/DetailedRecipe";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeMethod from "../components/RecipeMethod";
import RecipeEquipment from "../components/RecipeEquipment";

const RecipeA = () => {
  const recipeA = recipes.find((recipe) => recipe.id === "RecipeA");

  if (!recipeA) {
    return <div>Recipe not found!</div>;
  }
  return (
    <div>
      <div className="pages-container">
        <div className="content-container">
          <div className="row">
            <div className="col-5">
              <img src={latte} alt="" id="main-image" />
              <h4 className="recipe-guide">Recipe Guide</h4>
              <img src={latteStep} alt="recipe directions" id="recipe-steps" />
              <RecipeEquipment recipe={recipeA} />
            </div>
            <div className="col-7" id="recipe-content">
              <RecipeTitle recipe={recipeA} />
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
              <RecipePrep recipe={recipeA} />
              <RecipeIngredients recipe={recipeA} />
              <RecipeMethod recipe={recipeA} />
            </div>
          </div>
          <div className="recipePage-btns">
            <Link to="./LandingPage" className="recipePage-homeBtn">
              Home
            </Link>
            <Link to="../List" className="recipePage-recipeBtn">
              Back to Recipes
            </Link>
            <Link to="../Marketing" className="marketing-btn">
              Marketing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeA;
