import React from "react";

const DashboardNavbar = () => {
  return (
    <div className=" left-64 right-0 top-4 fixed mx-4 ">
      <div className="w-full bg-gray-800 flex justify-end p-4">
        <button className="text-white rounded-md bg-indigo-600 p-2 hover:text-green-600 capitalize">
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
