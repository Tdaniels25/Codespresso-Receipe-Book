import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles.css";
import "../RecipePage.css";
import cinnamon from "./imgs/cinnamon.JPG";
import mocha from "./imgs/mocha.JPG";
import shop2 from "./imgs/shop2.png";
import shop3 from "./imgs/shop3.png";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Cinnamon Dolce Latte',
      description: "Savor the delightful fusion of cinnamon-infused syrup and bold espresso—a cozy caffeine boost that's a must-try for coffee enthusiasts.",
      ingredients: ['Espresso', 'Milk', 'Cinnamon syrup', 'Whipped cream'],
      preparationSteps: ['Brew a shot of espresso.', 'Steam and froth the milk.', 'Add cinnamon syrup to the milk.', 'Pour the milk over the espresso.', 'Top with whipped cream and a sprinkle of cinnamon.'],
      image: cinnamon,
      link: '/RecipeA',
    },
    {
      id: 2,
      title: 'Mocha Frappucino',
      description: 'A soothing coffee blend that helps you relax while sipping through complex syntax and coding structures',
      ingredients: ['Coffee', 'Milk', 'Chocolate syrup', 'Whipped cream'],
      preparationSteps: ['Brew a strong cup of coffee.', 'Add milk and chocolate syrup to a blender.', 'Blend until smooth.', 'Pour into a glass and top with whipped cream.'],
      image: mocha,
      link: '/RecipeB',
    },
    {
      id: 3,
      title: 'Matcha Frappucino',
      description: 'A perfectly proportioned latte, ideal for those quick coding breaks between tasks',
      ingredients: ['Matcha powder', 'Milk', 'Honey', 'Ice'],
      preparationSteps: ['Mix matcha powder with warm water to make a paste.', 'Add milk, honey, and ice to a blender.', 'Blend until smooth.', 'Pour into a glass and add the matcha paste on top.'],
      image: shop3,
      link: '/RecipeC',
    },
    {
      id: 4,
      title: 'Caramel Macchiato',
      description: 'A delightful espresso shot that overflows with flavor, just like your code overflows with innovation',
      ingredients: ['Espresso', 'Milk', 'Vanilla syrup', 'Caramel sauce'],
      preparationSteps: ['Brew a shot of espresso.', 'Steam and froth the milk.', 'Add vanilla syrup to the milk.', 'Pour the milk over the espresso.', 'Drizzle caramel sauce on top.'],
      image: shop2,
      link: '/RecipeD',
    },
  ]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const removeRecipe = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  const handleAddRecipe = () => {
    const newRecipe = {
      id: recipes.length + 1,
      title: 'New Recipe',
      description: 'Description for the new recipe.',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      preparationSteps: ['Step 1', 'Step 2'],
      image: '', // A image URL for the new recipe here
      link: '', // The link for the new recipe here
    };

    addRecipe(newRecipe);
  };

  return (
    <section className="pages-container">
      <div className="content-container">
        <div className="heading">
          <h2 className="receipe-heading">Curate Your Coffee List</h2>
          <button onClick={handleAddRecipe} className ="btn">Add New Recipe</button>
        </div>
        {recipes.map((recipe) => (
          <div className="receipeContainer" key={recipe.id}>
            <div className="box">
              <div className="box-image">
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={recipe.link}>
                <p className="btn">View Recipe</p>
              </Link>
              <button onClick={() => removeRecipe(recipe.id)} className="btn">Remove Recipe</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeList;