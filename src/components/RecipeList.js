
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "../Styles.css";
import "../RecipePage.css";
import cinnamon from "./imgs/cinnamon.JPG";
import mocha from "./imgs/mocha.JPG";
import shop2 from "./imgs/shop2.png"
import shop3 from "./imgs/shop3.png"


 function RecipeList(){
     return(

      <section className="pages-container">
        <div className="content-container">
    <div className="heading">
      <h2 className="receipe-heading">Curate Your Coffee List</h2>
      <span>Bring Starbucks to the comfort of your home, with a twist</span>
    </div>
    
    <div className="receipeContainer">
      <div className="box">
        <div className="box-image">
          <img src={cinnamon} alt="starbucks"/>
        </div>
        <h3>Cinnamon Dolce Latte</h3>
        <p>Savor the delightful fusion of cinnamon-infused syrup and bold
                espresso—a cozy caffeine boost that's a must-try for coffee
                enthusiasts.</p>
        <Link to ="/ReceipeA">
        <a className="btn">View Receipe</a>
        </Link>
      </div>
    </div>

    <div className="receipeContainer">
      <div className="box">
        <div className="box-image">
          <img src={mocha} alt="starbucks"/>
        </div>
        <h3>Mocha Frappucino</h3>
        <p>A soothing coffee blend that helps you relax while sipping through complex syntax and coding structures</p>
        <Link to ="/ReceipeB">
        <a className="btn">View Receipe</a>
        </Link>
      </div>
    </div>

    <div className="receipeContainer">
      <div className="box">
        <div className="box-image">
          <img src={shop3} alt="starbucks"/>
        </div>
        <h3>Matcha Frappucino</h3>
        <p>A perfectly proportioned latte, ideal for those quick coding breaks between tasks</p>
        <Link to ="/ReceipeC">
        <a className="btn">View Receipe</a>
        </Link>
      </div>
    </div>

    <div className="receipeContainer">
      <div className="box">
        <div className="box-image">
          <img src={shop2} alt="starbucks"/>
        </div>
        <h3>Caramel Macchiato</h3>
        <p>A delightful espresso shot that overflows with flavor, just like your code overflows with innovation</p>
        <Link to ="/ReceipeD">
        <a className="btn" >View Receipe</a>
        </Link>
      </div>
    </div>
   
  
    </div>
    </section>
     )
    
    
    }
export default RecipeList;
