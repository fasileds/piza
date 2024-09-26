import React from "react";
import "./midle.css";

export default function Midel() {
  return (
    <div className="midle">
      <div className="midletop">
        <span>Top Restaurants</span>
      </div>
      <div className="midlebuttom">
        <div className="component">
          <div className="componentLeft">
            <div className="restaurantInfo">
              <img
                className="restaurantImage"
                src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Restaurant"
              />
              <span className="restaurantName">Azmera Pizza House</span>
            </div>
            <div>
              <p className="restaurantDescription">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document.
              </p>
            </div>
          </div>
          <div className="componentRight">
            <div>
              <img className="botoimage" src="/img2.png" alt="Orders" />
            </div>
            <div className="orderInfo">
              <span className="orderLabel">Number of Orders</span>
              <h1 className="orderCount">2K</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
