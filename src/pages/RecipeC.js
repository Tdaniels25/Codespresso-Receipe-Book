import React from "react";
import "../RecipePage.css";
import { Link } from "react-router-dom";
import RecipeTitle from "../components/RecipeTitle";
import matcha from "./img/matcha2.jpg";
import matchaStep from "./img/matcha-step.jpg";
import RecipePrep from "../components/RecipePrep";
import recipes from "../components/DetailedRecipe";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeMethod from "../components/RecipeMethod";
import RecipeEquipment from "../components/RecipeEquipment";

const RecipeC = () => {
  const recipeC = recipes.find((recipe) => recipe.id === "RecipeC");

  if (!recipeC) {
    return <div>Recipe not found!</div>;
  }
  return (
    <div>
      <div className="pages-container">
        <div className="content-container">
          <div className="row">
            <div className="col-5">
              <img src={matcha} alt="" id="main-image" />
              <h4 className="recipe-guide">Recipe Guide</h4>
              <img src={matchaStep} alt="recipe directions" id="recipe-steps" />
              <RecipeEquipment recipe={recipeC} />
            </div>
            <div className="col-7" id="recipe-content">
              <RecipeTitle recipe={recipeC} />
              <div className="rating">
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-solid fa-star fa-xl"></i>
                <i class="fa-regular fa-star fa-xl"></i>
              </div>
              <p className="recipe-description">
                Experience the refreshing allure of Matcha Frappuccino, a
                vibrant blend of green tea goodness. A soothing and invigorating
                delight!
              </p>
              <RecipePrep recipe={recipeC} />
              <RecipeIngredients recipe={recipeC} />
              <RecipeMethod recipe={recipeC} />
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

export default RecipeC;
