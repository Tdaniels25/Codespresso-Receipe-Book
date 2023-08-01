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
      title: "Cinnamon Dolce Latte",
      description:
        "Savor the delightful fusion of cinnamon-infused syrup and bold espresso—a cozy caffeine boost that's a must-try for coffee enthusiasts.",
      ingredients: ["Espresso", "Milk", "Cinnamon syrup", "Whipped cream"],
      preparationSteps: [
        "Brew a shot of espresso.",
        "Steam and froth the milk.",
        "Add cinnamon syrup to the milk.",
        "Pour the milk over the espresso.",
        "Top with whipped cream and a sprinkle of cinnamon.",
      ],
      image: cinnamon,
      link: "/RecipeA",
      time: "15 min",
      serving: "1",
      ingredNo: "10",
      ingredientsPage: [
        "2-4 Tablespoons cinnamon syrup",
        "1 cup strong brewed coffee",
        "1 cup milk",
        "cinnamon, for garnish",
        "whipped cream",
      ],
      syrup: [
        "1 cup white sugar",
        "1/2 cup brown sugar",
        "1 1/2 cups water",
        "1 tablespoon vanilla extract, optional",
        "3 cinnamon sticks",
      ],
      equipment: ["frother/whisk", "pan", "measuring spoons and cups"],
      syrupMethod: [
        "1. Combine the sugars, water and cinnamon sticks in a small saucepan and bring to a boil, whisking occasionally.",
        "2. Reduce and let simmer for about 10 minutes, or until the volume is reduced by half.",
        "3. Take off of the heat and stir in the vanilla extract.",
        "4. Allow to cool to room temperature before refrigerating.",
      ],
      mainMethod: [
        "1. Brew your coffee – Make it twice it’s normal strength as you’re going to heavily dilute it with milk.",
        "2. Pour milk into a saucepan over medium-high heat and whisk constantly (or use a frother). When the milk is at least half foam, remove from heat.",
        "3. Stir 1-2 Tablespoons of the cinnamon dolce syrup into the hot coffee and top with milk and foam.",
        "4. Add cinnamon dolce syrup to taste.",
        "5. Garnish with whipped cream, a sprinkle of cinnamon and a drizzle of cinnamon dolce syrup or caramel. Enjoy!",
      ],
      tips: [
        "Store your excess cinnamon dolce syrup in a mason jar in the fridge and use when required.",
        "Make an iced cinnamon dolce latte by adding cold milk instead of hot frothed milk.",
      ],
    },
    {
      id: 2,
      title: "Mocha Frappucino",
      description:
        "Indulge in a delightful Mocha Frappuccino, a blissful fusion of rich chocolate and smooth coffee. The perfect icy treat to savor",
      ingredients: ["Coffee", "Milk", "Chocolate syrup", "Whipped cream"],
      preparationSteps: [
        "Brew a strong cup of coffee.",
        "Add milk and chocolate syrup to a blender.",
        "Blend until smooth.",
        "Pour into a glass and top with whipped cream.",
      ],
      image: mocha,
      link: "/RecipeB",
      time: "8 min",
      serving: "1",
      ingredNo: "9",
      ingredientsPage: [
        "2 (1/3 cup) shots expresso, cooled",
        "1 cup ice cubes",
        "2 1/2 tablespoons chocolate syrup, divided",
        "1/4 cup mix of half whole milk and half heavy cream",
        "2 tablespoons vanilla syrup",
        "whipped cream",
      ],
      syrup: ["1 cup sugar", "1 cup water", "1 tablespoon vanilla extract"],
      equipment: ["blender", "pan", "measuring spoons and cups"],
      syrupMethod: [
        "1. Add 1 cup of sugar and 1 cup of water to a saucepan. Heat to boiling.",
        "2. Stir until sugar dissolves. Let the sugar syrup cool completely.",
        "3. Add 1 tablespoon vanilla extract to the cooled sugar syrup.",
      ],
      mainMethod: [
        "1. Add the espresso, ice, 2 tablespoons chocolate syrup, half whole milk and half heavy cream mixture and vanilla syrup to the blender.",
        "2. Pulse a few times to break up the ice, and then process until smooth.",
        "3. Pour into a glass and garnish with whipped cream and remaining 1/2 tablespoon of chocolate syrup.",
        "4. Serve immediately. Enjoy!",
      ],
      tips: [
        "If you don’t have an espresso machine, you can use instant coffee. Combine 1 tablespoon of instant coffee and 1/4 cup hot water to replace the 2 shots of espresso in the recipe.",
        "Store your excess vanilla syrup in a mason jar in the fridge and use when required.",
        "To reduce the fat and calories of this drink substitue half whole milk and half heavy cream with whole milk",
      ],
    },
    {
      id: 3,
      title: "Matcha Frappucino",
      description:
        "Experience the refreshing allure of Matcha Frappuccino, a vibrant blend of green tea goodness. A soothing and invigorating delight",
      ingredients: ["Matcha powder", "Milk", "Honey", "Ice"],
      preparationSteps: [
        "Mix matcha powder with warm water to make a paste.",
        "Add milk, honey, and ice to a blender.",
        "Blend until smooth.",
        "Pour into a glass and add the matcha paste on top.",
      ],
      image: shop3,
      link: "/RecipeC",
      time: "12 min",
      serving: "1",
      ingredNo: "10",
      ingredientsPage: [
        "2/3 cups whole milk",
        "2 tablespoons vanilla syrup",
        "2 teaspoons matcha",
        "1 cup ice",
        "3 tablespoons frappuccino syrup",
        "whipped cream",
      ],
      syrup: [
        "1/2 cup water",
        "3/4 cup sugar",
        "1 teaspoon xantham gum powder",
        "1 teaspoon vanilla extract",
      ],
      equipment: ["blender", "pan", "measuring spoons and cups"],
      syrupMethod: [
        "1. Put sugar and water in a saucepan and simmer. Simmer on low heat and stir until sugar completely dissolves.",
        "2. Turn off heat and let it cool down to room temperature.",
        "3. Blend together cooled down syrup, xanthan gum powder, and vanilla extract.",
      ],
      mainMethod: [
        "1. Blend milk, vanilla syrup, matcha, ice, and homemade Frappuccino base syrup until smooth. Start the blender on low, then turn it up high. Use a tamper tool to make sure the ice gets blended evenly.",
        "2. Pour Frappuccino into a cup.",
        "3. Garnish with with whipped cream (matcha powder optional). Enjoy!",
      ],
      tips: [
        "To make vanilla syrup, see our Mocha Frappuccino recipe.",
        "Store your excess frappuccino syrup in a mason jar in the fridge and use when required.",
        "Don’t add ice first into the blender since you won’t get an efficient blend.",
        "Starbucks uses a pre-sweetened matcha but if you can't find one that is as good, get unsweetened matcha and added sweetener separately.",
        "The brighter the green the matcha, the higher the quality. Anything that costs less than that will have a muddy green, almost brown color.",
      ],
    },
    {
      id: 4,
      title: "Caramel Macchiato",
      description:
        "Experience the indulgent Caramel Macchiato – a luscious fusion of espresso, velvety milk, and caramel drizzle. Pure bliss in every sip!",
      ingredients: ["Espresso", "Milk", "Vanilla syrup", "Caramel sauce"],
      preparationSteps: [
        "Brew a shot of espresso.",
        "Steam and froth the milk.",
        "Add vanilla syrup to the milk.",
        "Pour the milk over the espresso.",
        "Drizzle caramel sauce on top.",
      ],
      image: shop2,
      link: "/RecipeD",
      time: "10 min",
      serving: "1",
      ingredNo: "8",
      ingredientsPage: [
        "1 ½ cups 2% milk",
        "2 tablespoons vanilla syrup",
        "2 shots of espresso",
        "2 teaspoons caramel sauce",
        "caramel sauce to garnish",
      ],
      syrup: ["1 cup sugar", "1 cup water", "1 teaspoon vanilla extract"],
      equipment: ["electric milk frother", "pan", "measuring spoons and cups"],
      syrupMethod: [
        "1. Add 1 cup of sugar and 1 cup of water to a saucepan. Heat to boiling.",
        "2. Stir until sugar dissolves. Let the sugar syrup cool completely.",
        "3. Add 1 tablespoon vanilla extract to the cooled sugar syrup.",
      ],
      mainMethod: [
        "1. Simmer milk on the stovetop (Do not boil). Froth milk using an electric milk frother.",
        "2. Put vanilla syrup and frothed milk into a cup first. Then Add espresso shots. Do not stir.",
        "3. Drizzle caramel sauce on top to garnish. Enjoy!",
      ],
      tips: [
        "If you don’t have an espresso machine, you can use instant coffee. Combine 1 tablespoon of instant coffee and 1/4 cup hot water to replace the 2 shots of espresso in the recipe.",
        "To make vanilla syrup, see our Mocha Frappuccino recipe.",
        "Use store-bought caramel sauce. It can be quite tricky to make at home.",
      ],
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
      title: "Cookies n Cream Frapp",
      description:
        "Experience the decadent Cookies n Cream Frap - a delightful fusion of rich coffee, creamy milk, and crushed chocolate cookies.",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      preparationSteps: ["Step 1", "Step 2"],
      image: "", // A image URL for the new recipe here
      link: "", // The link for the new recipe here
    };

    addRecipe(newRecipe);
  };

  return (
    <section className="pages-container">
      <div className="content-container">
        <div className="heading">
          <h2 className="receipe-heading">Curate Your Coffee List</h2>
          <button onClick={handleAddRecipe} className="button">
            Add New Recipe
          </button>
        </div>
        <Link to="./LandingPage" className="recipePage-homeBtn">
          Home
        </Link>
        {recipes.map((recipe) => (
          <div className="receipeContainer" key={recipe.id}>
            <div className="box">
              <div className="box-image">
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <div className="btn-group">
                <Link to={recipe.link} className="btn">
                  View Recipe
                </Link>
                <button
                  onClick={() => removeRecipe(recipe.id)}
                  className="remove-button"
                >
                  Remove Recipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeList;
