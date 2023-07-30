import AboutImage from "./imgs/coffee-beans.jpg"
function AboutUs() {
  return (
    <section className="about">
    <div className="about-content">
      <div className="about-textBox">
      <h2>About Us</h2>
      <p>
        A Programmer's Coffee Receipe Book! We've created the finest coffee
        blends and receipes to keep programmers energized during coding
        sessions. Join our caffeinated community and let the magic of coffee
        inspire your code. Cheers to code and coffee!{" "}
      </p>
      </div>
      </div>
      <div className="about-image">
      <img
        src={AboutImage}
        alt="Starbucks Coffee Beans"
       className="about-us-image"></img>
       </div>
       <div className="about-button">
      <button className="coffee">Coffee & Code</button>
      </div>
    </section>
  );
}

export default AboutUs;
