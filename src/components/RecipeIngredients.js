import React from "react";

const RecipeIngredients = ({ recipe }) => {
  const { ingredients, syrup } = recipe;

  return (
    <div className="recipe-ingredients">
      <h3>Ingredients</h3>
      <div className="row" id="ingred-container">
        <div className="col-6">
          <h6>Main</h6>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <h6>Syrup:</h6>
          <ul>
            {syrup.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeIngredients;
