import React from "react";
import { FaList } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { FaUsersLine } from "react-icons/fa6";
import img from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sticky bg-gray-800 h-screen w-64 top-0 left-0">
      <div className="bg-white p-4">
        <img className="w-36" src={img} alt="" srcset="" />
      </div>
      <div className="flex p-2 mt-2 text-white items-center hover:bg-gray-500">
        <FaList />
        <Link to="/dashboard/products">
          <p className="ml-2 capitalize">Products</p>
        </Link>
      </div>
      <div className="flex p-2 mt-2 text-white items-center hover:bg-gray-500">
        <SlHandbag />
        <Link to="/dashboard/products">
          <p className="ml-2 capitalize">orders</p>
        </Link>
      </div>
      <div className="flex p-2 mt-2 text-white items-center hover:bg-gray-500">
        <FaUsersLine />
        <Link to="/dashboard/products">
          <p className="ml-2 capitalize">customers</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
