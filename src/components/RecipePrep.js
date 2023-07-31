import React from "react";

const RecipePrep = ({ recipe }) => {
  const { time, serving, ingredNo } = recipe;

  return (
    <div className="recipe-title">
      <div className="recipe-prep">
        <div className="row" id="prep-icons">
          <div className="col-4" id="time-icon">
            <i class="fa-regular fa-clock fa-2xl"></i>
          </div>
          <div className="col-4" id="ingredient-icon">
            <i class="fa-solid fa-list-check fa-2xl"></i>
          </div>
          <div className="col-4" id="ingredient-icon">
            <i class="fa-solid fa-users fa-2xl"></i>
          </div>
        </div>
        <div className="row" id="prep-text">
          <div className="col-4" id="prep-time">
            <p>Prep Time: {time}</p>
          </div>
          <div className="col-4" id="ingredient-icon">
            <p>Ingredients: {ingredNo}</p>
          </div>
          <div className="col-4" id="ingredient-icon">
            <p>Serving: {serving}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePrep;
