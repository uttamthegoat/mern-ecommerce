import React from "react";
import ProductList from "../components/Admin/ProductList";

const Admin = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">Admin Products Page</h1>
      </div>
      <ProductList />
    </div>
  );
};

export default Admin;
