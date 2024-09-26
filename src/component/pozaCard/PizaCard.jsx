import React from "react";
import "./pizaCard.css";

export default function PizaCard() {
  return (
    <div className="card">
      <div className="cardTop">
        <img className="topImage" src="/piza.png" alt="Pizza" />
      </div>
      <div className="cardMidle">
        <h3 className="pizzaName">Margarita</h3>
        <span className="pizzaIngredients">
          Tomato, Cheese, Basil, Olive Oil
        </span>
        <div className="components2">
          <div className="priceContainer">
            <span className="currency">Birr</span>
            <h1 className="pizzaPrice">150</h1>
          </div>
          <button className="orderButton">Order Now</button>
        </div>
      </div>
      <div className="cardbottom">
        <img
          className="userImage"
          src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User"
        />
        <span className="restaurantName">Armiz Piza</span>
      </div>
    </div>
  );
}
