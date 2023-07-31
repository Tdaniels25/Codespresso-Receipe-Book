import React from "react";

const RecipeMethod = ({ recipe }) => {
  const { mainMethod, syrupMethod, tips } = recipe;

  return (
    <div className="recipe-method">
      <h4>Method</h4>
      <ul>
        {mainMethod.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4>Syrup Method</h4>
      <ul>
        {syrupMethod.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="tips">
        <p>
          Tips: <span>{tips}</span>
        </p>
      </div>
    </div>
  );
};

export default RecipeMethod;
