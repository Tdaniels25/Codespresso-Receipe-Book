import React, { useState } from 'react';
export function ListItems(){
    let initialReceipes = [
        {
            id:1,
            title: 'Debugging Delight',
            info: 'A sweet and nutty blend that helps you tackle those pesky bugs',
            img : './imgs/choc-coffee.jpg',
        },
        {
            id:2,
            title: 'Syntax Sipper',
            info: 'A soothing coffee blend that helps you relax while sipping through complex syntax and coding structures',
            img : './imgs/shop1.png',
        },
        {
            id:3,
            title: 'Byte-Size Latte',
            info: 'A perfectly proportioned latte, ideal for those quick coding breaks between tasks',
            img : './imgs/shop2.png',
        },
        {
            id:4,
            title: 'Espresso Overflow',
            info: 'A delightful espresso shot that overflows with flavor, just like your code overflows with innovation',
            image : './imgs/shop3.png',
        },
        
    ]
    
    const [recipes, setRecipes] = useState(initialRecipes);
     
      return (
        <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <img src={recipe.image} alt={recipe.title} />
          </div>
         
        ))}
      </div>
      );
    }
    