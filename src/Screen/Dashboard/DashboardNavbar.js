import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/Reducer/authReducer";

const DashboardNavbar = ({ openSide }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className="left-0 sm:left-64 right-0 top-4 fixed mx-4 ">
      <div className="w-full bg-gray-800 flex sm:justify-end justify-between p-4 items-center ">
        <IoFilterSharp
          onClick={openSide}
          className="text-white text-2xl sm:hidden cursor-pointer"
        />
        <button
          onClick={handleLogout}
          className="text-white rounded-md bg-indigo-600 p-2 hover:text-green-600 capitalize"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
