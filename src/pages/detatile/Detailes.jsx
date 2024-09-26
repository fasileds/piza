import React, { useState } from "react";
import NavBar from "../../component/navBar/NavBar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./detailes.css";
import PizaCard from "../../component/pozaCard/PizaCard";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Detailes() {
  const [quantity, setQuantity] = useState(2);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div>
      <NavBar />
      <div className="detaileTop">
        <div className="topLeft">
          <img src="/piza.png" alt="Pizza" className="mainPizza" />
          <div className="smallPizzaContainer">
            <img src="/piza.png" alt="Small Pizza" className="smallPizza" />
            <img src="/piza.png" alt="Small Pizza" className="smallPizza" />
          </div>
        </div>
        <div className="topRight">
          <h1 className="pizzaTitle">Margherita</h1>
          <div className="checkbox-group">
            {[
              "Topping 1",
              "Topping 2",
              "Topping 3",
              "Topping 4",
              "Topping 5",
            ].map((topping, index) => (
              <div key={index} className="toppingOption">
                <input type="checkbox" id={`checkbox${index + 1}`} />
                <label htmlFor={`checkbox${index + 1}`}>{topping}</label>
              </div>
            ))}
          </div>
          <div className="counter-buttons">
            <RemoveIcon onClick={decrement} className="counterIcon" />
            <span>{quantity}</span>
            <AddIcon onClick={increment} className="counterIcon" />
          </div>
          <div className="orderButtonContainer">
            <button className="orderButtons">
              Order <ArrowOutwardIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="detaileBottom">
        <div className="titleForTheInformation">
          <span>Related Pizzas</span>
        </div>
        <div className="relatedPizzas">
          <PizaCard />
          <PizaCard />
          <PizaCard />
          <PizaCard />
        </div>
      </div>
    </div>
  );
}
