import React from "react";

const RecipeIngredients = ({ recipe }) => {
  const { ingredients, syrup } = recipe;

  return (
    <div className="recipe-ingredients">
      <h3 className="ingred-heading3">Ingredients</h3>
      <div className="row" id="ingred-container">
        <div className="col-6">
          <h6 className="ingred-heading6">Main</h6>
          <ul className="ingred-list">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <h6 className="ingred-heading6">Syrup:</h6>
          <ul className="ingred-list">
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
