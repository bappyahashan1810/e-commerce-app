import React from "react";
import SideBar from "./SideBar";
import DashboardNavbar from "./DashboardNavbar";

const Products = () => {
  return (
    <div>
      <SideBar></SideBar>
      <DashboardNavbar></DashboardNavbar>
      <div className="ml-64 bg-gray-700 pt-28 min-h-screen px-3 ">
        <div className="bg-gray-700 text-white p-2 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
          incidunt. Numquam autem provident rem, unde quos vel a nobis quaerat
          earum? Dicta a, dolores aliquid laboriosam facilis enim amet
          voluptatem beatae, dolor facere repellat, placeat sapiente vero
          officiis voluptatum! Esse laudantium quod illum optio delectus odio,
          nulla perspiciatis in exercitationem?
        </div>
      </div>
    </div>
  );
};

export default Products;
