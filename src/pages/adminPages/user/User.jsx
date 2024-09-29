import React from "react";
import { DataGrid } from "@mui/x-data-grid"; // Import DataGrid from Material UI
import "./users.css";
import SidBar from "../../../component/adminComponent/sidBar/SidBar";
import AdminNavbar from "../../../component/adminComponent/navbarForAdmin/AdminNavbar";
export default function User() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "product", headerName: "Product", width: 150 },
    { field: "quantity", headerName: "Quantity", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
  ];

  const rows = [
    { id: 1, product: "Pizza", quantity: 2, price: 20 },
    { id: 2, product: "Burger", quantity: 1, price: 10 },
    { id: 3, product: "Fries", quantity: 3, price: 15 },
    { id: 4, product: "Salad", quantity: 2, price: 12 },
  ];
  return (
    <div className="layoutContainer">
      <SidBar />
      <div className="mainComponents">
        <AdminNavbar />
        <div style={{ margin: "20px", padding: "10px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            autoHeight
            sx={{
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Shadow around the table
              borderRadius: "10px", // Rounded corners
              backgroundColor: "#fff", // White background for table
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f3f4f6", // Header background color
                textTransform: "uppercase",
                fontWeight: "bold",
              },
              "& .MuiDataGrid-cell": {
                padding: "12px 8px", // Custom padding for cells
              },
              "& .MuiDataGrid-row:nth-of-type(even)": {
                backgroundColor: "#f9fafb", // Alternating row color
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none", // Remove footer border
              },
              "& .MuiDataGrid-columnSeparator": {
                display: "none", // Remove column separators
              },
              "& .MuiDataGrid-cell:focus": {
                outline: "none", // Remove blue outline on cell focus
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
