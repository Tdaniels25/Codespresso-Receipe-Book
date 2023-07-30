import "./Styles.css";
import coffeeMachine from "./imgs/coffee-machine.jpg"
import coffeeMachine2 from "./imgs/coffee-machinge2.jpg"
import coffee from "./imgs/cup-of-coffee.jpg"

function RecipeList() {
  return (
    <section className="receipe-list">
      <div className="machinery">
    <img src={coffeeMachine}  alt="Coffee Machine"/>
    </div>
    <div className="coffee-machine">
      <img src={coffeeMachine2} alt="Coffee Machine"/>
    </div>
    <div className="coffee-cup">
      <img src ={coffee} alt="Cup of Coffee"/>
    </div>
    <ol className="list">
      <li className="list-item"></li>
      <li className="list-item"></li>
      <li className="list-item"></li>
      <li className="list-item"></li>
    </ol>
    <h2>Receipe List</h2>
    </section>
  );
}

export default RecipeList;
