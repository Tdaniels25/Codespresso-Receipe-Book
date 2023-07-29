import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Link to="/RecipeA">
        <p>RecipeA</p>
      </Link>
    </div>
  );
}

export default LandingPage;
