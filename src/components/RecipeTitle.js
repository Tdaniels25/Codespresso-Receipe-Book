import React from "react";

const RecipeTitle = ({ recipe }) => {
  const { name } = recipe;

  return (
    <div className="recipe-title">
      <h1>{name}</h1>
    </div>
  );
};

export default RecipeTitle;
