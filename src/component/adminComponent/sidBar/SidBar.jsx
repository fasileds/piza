import React from "react";
import { useLocation, Link } from "react-router-dom"; // Import useLocation and Link
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import BorderRightIcon from "@mui/icons-material/BorderRight";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LogoutIcon from "@mui/icons-material/Logout";
import "./sidBar.css";

export default function SidBar() {
  const location = useLocation(); // Get the current route

  return (
    <div className="sidBar">
      <div className="sidBarTop">
        <h3>Pizzaland</h3>
        <FormatIndentIncreaseIcon className="menuIcon" />
      </div>
      <div className="sidbarBottom">
        <div className="sidbarProfile">
          <img className="sidbarImage" src="/slice.png" alt="Profile" />
        </div>
        <div className="sidbarMenu">
          <Link
            to="/admin/orders"
            className={`sidbarItem ${
              location.pathname === "/admin/orders" ? "active" : ""
            }`}
          >
            <BorderRightIcon className="sidbarIcon" />
            <span>Orders</span>
          </Link>
          <Link
            to="/admin/addMnue"
            className={`sidbarItem ${
              location.pathname === "/admin/addMnue" ? "active" : ""
            }`}
          >
            <LocalPizzaIcon className="sidbarIcon" />
            <span>Add Menu</span>
          </Link>
          <Link
            to="/admin/roles"
            className={`sidbarItem ${
              location.pathname === "/admin/roles" ? "active" : ""
            }`}
          >
            <PersonIcon className="sidbarIcon" />
            <span>Roles</span>
          </Link>
          <Link
            to="/admin/users"
            className={`sidbarItem ${
              location.pathname === "/admin/users" ? "active" : ""
            }`}
          >
            <AccountCircleIcon className="sidbarIcon" />
            <span>Users</span>
          </Link>
        </div>
        <div className="sidbarLogout">
          <LogoutIcon className="logoutIcon" />
          <span>LogOut</span>
        </div>
      </div>
    </div>
  );
}
