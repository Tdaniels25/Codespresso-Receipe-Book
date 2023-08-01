import React from "react";
import "../Marketing.css";
import { Link } from "react-router-dom";
import review1 from "./img/review1.jpg";
import review2 from "./img/review2.jpg";
import review4 from "./img/review4.jpg";
import review5 from "./img/review5.jpg";
import review7 from "./img/review7.jpg";
import review3 from "./img/review3.jpg";
import review8 from "./img/review8.jpg";
import review from "./img/review.jpg";

function Marketing() {
  return (
    <div>
      <div className="review-container">
        <div className="review-content">
          <h1 className="review-heading">Gallery</h1>
          <div className="row">
            <div className="col-3">
              <div className="review-image">
                <img src={review2} alt="" id="main-image" />
              </div>
            </div>{" "}
            <div className="col-3">
              <div className="review-image">
                <img src={review4} alt="" id="main-image" />
              </div>
            </div>{" "}
            <div className="col-3">
              <div className="review-image">
                <img src={review5} alt="" id="main-image" />
              </div>
            </div>
            <div className="col-3">
              <div className="review-image">
                <img src={review8} alt="" id="main-image" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="review-image">
                <img src={review1} alt="" id="main-image" />
              </div>
            </div>
            <div className="col-3">
              <div className="review-image">
                <img src={review3} alt="" id="main-image" />
              </div>
            </div>
            <div className="col-3">
              <div className="review-image">
                <img src={review7} alt="" id="main-image" />
              </div>
            </div>
            <div className="col-3">
              <div className="review-image">
                <img src={review} alt="" id="main-image" />
              </div>
            </div>
          </div>
          <div className="review-box">
            <h4 className="review-heading4">
              Want to leave your mark on Codespresso's Gallery? Try any of our
              recipes and let us know what you think by leaving a comment below!
            </h4>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Comment
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button className="review-submit">Submit</button>
            <div className="review-btns">
              <Link to="/" className="recipePage-homeBtn">
                Home
              </Link>
              <Link to="../List" className="review-recipeBtn">
                Back to Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
