import React, { useState } from "react";
import SideBar from "./SideBar";
import DashboardNavbar from "./DashboardNavbar";

const Wrapper = ({ children }) => {
  const [side, setSide] = useState("-left-64");
  const openSide = () => {
    setSide("left-0");
  };
  const closeSide = () => {
    setSide("-left-64");
  };
  return (
    <>
      <SideBar side={side} closeSide={closeSide}></SideBar>
      <DashboardNavbar openSide={openSide}></DashboardNavbar>
      <section className="ml-0 sm:ml-64 bg-gray-700 pt-28 min-h-screen px-3  ">
        <div className="bg-gray-700 text-white p-2 ">{children}</div>
      </section>
    </>
  );
};

export default Wrapper;
