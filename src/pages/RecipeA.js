import React from "react";
import "../RecipePage.css";
import RecipeTitle from "../components/RecipeTitle";
import latte from "./img/latte2.jpg";
import RecipePrep from "../components/RecipePrep";

import recipes from "../components/DetailedRecipe";
import RecipeIngredients from "../components/RecipeIngredients";
import RecipeMethod from "../components/RecipeMethod";

const RecipeA = () => {
  const recipeA = recipes.find((recipe) => recipe.id === "RecipeA");

  if (!recipeA) {
    return <div>Recipe not found!</div>;
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img src={latte} alt="" id="main-image" />
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
            <p>
              Savor the delightful fusion of cinnamon-infused syrup and bold
              espresso—a cozy caffeine boost that's a must-try for coffee
              enthusiasts.
            </p>
            <RecipePrep recipe={recipeA} />
            <RecipeIngredients recipe={recipeA} />
            <RecipeMethod recipe={recipeA} />
          </div>
        </div>
        <button>Home</button>
        <button>Back to Recipes</button>
      </div>
    </div>
  );
};

export default RecipeA;
