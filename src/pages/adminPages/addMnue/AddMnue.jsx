import React from "react";
import "./addMnue.css";
import SidBar from "../../../component/adminComponent/sidBar/SidBar";
import AdminNavbar from "../../../component/adminComponent/navbarForAdmin/AdminNavbar";
export default function AddMnue() {
  return (
    <div className="layoutContainer">
      <SidBar />
      <div className="mainComponents">
        <AdminNavbar />
        <div className="addPizzaMenuContainer">
          {/* Title Section */}
          <div className="title">
            <h1>Add Menu</h1>
          </div>

          {/* Form Section */}
          <div className="formGroup">
            <div className="formInput">
              <label>Name:</label>
              <input type="text" placeholder="Enter pizza name" />
            </div>

            {/* Topping Checkboxes */}
            <div className="formInput">
              <label>Toppings:</label>
              <div className="toppingsContainer">
                <div className="toppingItem">
                  <input type="checkbox" id="pepperoni" />
                  <label htmlFor="pepperoni">Pepperoni</label>
                </div>
                <div className="toppingItem">
                  <input type="checkbox" id="mushrooms" />
                  <label htmlFor="mushrooms">Mushrooms</label>
                </div>
                <div className="toppingItem">
                  <input type="checkbox" id="onions" />
                  <label htmlFor="onions">Onions</label>
                </div>
                <div className="toppingItem">
                  <input type="checkbox" id="sausage" />
                  <label htmlFor="sausage">Sausage</label>
                </div>
                <div className="toppingItem">
                  <input type="checkbox" id="bacon" />
                  <label htmlFor="bacon">Bacon</label>
                </div>
              </div>
            </div>

            {/* File upload for pizza image */}
            <div className="formInput">
              <label>Pizza Image:</label>
              <input type="file" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="buttonContainer">
            <button className="submitButton">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
