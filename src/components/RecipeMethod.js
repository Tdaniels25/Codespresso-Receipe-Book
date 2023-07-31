import React from "react";

const RecipeMethod = ({ recipe }) => {
  const { mainMethod, syrupMethod, tips } = recipe;

  return (
    <div className="recipe-method">
      <h4 className="method-heading4">Method</h4>
      <ul className="method-list">
        {mainMethod.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4 className="syrup-heading4">Syrup Method</h4>
      <ul className="syrup-list">
        {syrupMethod.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="tips">
        <h6 className="tips-heading6">Tips: </h6>
        <ul className="tips-list">
          {tips.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeMethod;
