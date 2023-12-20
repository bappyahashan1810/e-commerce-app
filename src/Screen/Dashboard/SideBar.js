import React from "react";
import { FaList } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { FaUsersLine } from "react-icons/fa6";
import img from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const SideBar = ({ side, closeSide }) => {
  return (
    <div
      className={`fixed bg-gray-800 h-screen ${side} w-64 top-0 sm:left-0 z-20 transition-all`}
    >
      <div className="bg-white p-4">
        <MdOutlineClose
          onClick={closeSide}
          className="text-2xl font-bold absolute top-4 right-4 sm:hidden cursor-pointer"
        />
        <img className="w-36" src={img} alt="" srcSet="" />
      </div>
      <div className="flex p-2 mt-2 text-white items-center hover:bg-gray-500 transition-all">
        <FaList />
        <Link to="/dashboard/products">
          <p className="ml-2 capitalize">Products</p>
        </Link>
      </div>
      <div className="flex p-2 mt-2 text-white items-center hover:bg-gray-500 transition-all">
        <SlHandbag />
        <Link to="/dashboard/products">
          <p className="ml-2 capitalize">orders</p>
        </Link>
      </div>
      <div className="flex p-2 mt-2 text-white items-center hover:bg-gray-500 transition-all">
        <FaUsersLine />
        <Link to="/dashboard/products">
          <p className="ml-2 capitalize">customers</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
