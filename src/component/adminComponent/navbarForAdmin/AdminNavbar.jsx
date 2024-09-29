import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge"; // Badge for notification count
import "./adminNavbar.css"; // Importing the updated CSS file

export default function AdminNavbar() {
  return (
    <div className="adminNavbar">
      {/* Left section: Page title */}
      <div className="navbarLeft">
        <h1>Orders</h1>
      </div>

      {/* Right section: Notifications and user profile */}
      <div className="navbarRight">
        <Badge badgeContent={3} color="error" className="notificationBadge">
          <NotificationsIcon className="icon" />
        </Badge>
        <AccountCircleIcon className="icon" />
      </div>
    </div>
  );
}
