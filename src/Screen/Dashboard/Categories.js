import React from "react";
import Wrapper from "./Wrapper";
import ScreenHead from "../ScreenHead";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Categories = () => {
  return (
    <div>
      <Wrapper>
        <ScreenHead>
          <Link to="/dashboard/create-category" className="">
            <div className="items-center flex capitalize font-medium btn-dark w-fit">
              add category
              <IoMdAdd className="text-2xl ml-2" />
            </div>
          </Link>
        </ScreenHead>
        <h1>This is categories page</h1>
        <p>Here is Categories list</p>
      </Wrapper>
    </div>
  );
};

export default Categories;
