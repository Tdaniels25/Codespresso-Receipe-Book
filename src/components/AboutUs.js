import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "./imgs/coffee-beans.jpg";
function AboutUs() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-textBox">
          <h2>About Us</h2>
          <p>
          As we embarked on our programming journey, we couldn't help but notice the famous elixir that fuels the minds of programmers worldwide - coffee! And hey, let's face it, we're just as guilty of sipping on this magical brew as our fellow tech wizards.

But here's the twist! Instead of simply indulging in our beloved Starbucks drinks during our coding sessions, we thought, "Why not share this delight with our amazing colleagues?"  So, we rolled up our sleeves, put on our aprons, and set out to concoct the perfect recipes to bring Starbucks right to their homes.

With every line of code and every sip of our caffeinated creations, we found ourselves brewing more than just coffee. Our little project has become a brew-tiful blend of tech expertise, friendship, and an undying love for all things programming!

So, welcome to our virtual coffee haven where we promise to bring you the best of both worlds – top-notch React recipes to satisfy your coding appetite and an array of delightful coffee concoctions to ignite your creativity! 

We hope that our shared passion for both coding and coffee brings a smile to your face as you explore our recipe book. Remember, whether you're a seasoned developer or just starting your coding journey, you're always welcome at our virtual coffee corner. So grab your favorite mug, brew your favorite drink, and let's code and caffeinate together! {" "}
          </p>
          <div className="about-button">
        <Link to="/List">
        <button className="coffee">Coffee & Code</button>
        </Link>
      </div>
        </div>
      </div>
      <div className="about-image">
        <img
          src={AboutImage}
          alt="Starbucks Coffee Beans"
          className="about-us-image"
        ></img>
      </div>
    
    </section>
  );
}

export default AboutUs;
