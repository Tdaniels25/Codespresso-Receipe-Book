import React from "react";
import RecipeTitle from "../components/RecipeTitle";
import cappuccino from "./img/cappuccino.jpg";

function RecipeA() {
  return (
    <div>
      <img src={cappuccino} alt="cappuccino" />

      <RecipeTitle />
    </div>
  );
}

export default RecipeA;
