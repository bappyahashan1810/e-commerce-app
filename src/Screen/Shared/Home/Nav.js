import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="nav">
      <div className="my-container">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src={logo}
              className="h-full w-[150px] object-cover"
              alt="logo"
              srcset=""
            />
          </Link>
          <ul className="flex space-x-5">
            <li>
              <IoSearch size={23} />
            </li>
            <li className="font-medium text-base capitalize">
              <Link to="/login">sign in</Link>
            </li>
            <li className="relative">
              <IoBagCheckOutline size={22} />
              <span className="cart">10</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
