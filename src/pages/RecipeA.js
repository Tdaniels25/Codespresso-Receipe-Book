import React from "react";
import RecipeTitle from "../components/RecipeTitle";
import cappuccino from "./img/cappuccino.jpg";
import LandingPage from "./LandingPage";

function RecipeA() {
  return (
    <div>
      <img src={cappuccino} alt="cappuccino" />
      <LandingPage />
      <RecipeTitle />
    </div>
  );
}

export default RecipeA;
