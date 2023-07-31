import React, { useState } from 'react';
import "../Styles.css";
import thumb1 from "./imgs/choc-coffee.jpg";
import shop1 from "./imgs/shop1.png";
import shop2 from "./imgs/shop2.png"
import shop3 from "./imgs/shop3.png"
import { ListItems } from './Data';

function RecipeList() {
  return (
    <section className="receipe-list">
      <div className="curate-coffee">
    <div className="heading">
      <h2 className="receipe-heading">Curate Your Coffee List</h2>
      <span>Bring Starbucks to the comfort of your home, with a twist</span>
    </div>
    </div>
    <div className="receipeContainer">
      <div className="box">
        <div className="box-image">
          <img src={thumb1} alt="starbucks"/>
        </div>
        <h3>Debugging Delight</h3>
        <p>A sweet and nutty blend that helps you tackle those pesky bugs</p>
        <a href="#" className="btn">View Receipe</a>
      </div>
    </div>

    <div className="receipeContainer">
      <div className="box">
        <div className="box-image">
          <img src={shop1} alt="starbucks"/>
        </div>
        <h3>Syntax Sipper</h3>
        <p>A soothing coffee blend that helps you relax while sipping through complex syntax and coding structures</p>
        <a href="#" className="btn">View Receipe</a>
      </div>
    </div>

    <div className="receipeContainer">
      <div className="box">
        <div className="box-image">
          <img src={shop2} alt="starbucks"/>
        </div>
        <h3>Byte-Size Latte</h3>
        <p>A perfectly proportioned latte, ideal for those quick coding breaks between tasks</p>
        <a href="#" className="btn">View Receipe</a>
      </div>
    </div>

    <div className="receipeContainer">
      <div className="box">
        <div className="box-image">
          <img src={shop3} alt="starbucks"/>
        </div>
        <h3>Espresso Overflow</h3>
        <p>A delightful espresso shot that overflows with flavor, just like your code overflows with innovation</p>
        <a href="#" className="btn">View Receipe</a>
      </div>
    </div>
   
     
    </section>
  );
}

export default RecipeList;
