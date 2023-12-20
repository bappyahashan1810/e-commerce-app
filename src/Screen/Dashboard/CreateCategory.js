import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const CreateCategory = () => {
  return (
    <div>
      <Wrapper>
        <Link to="/dashboard/categories" className="">
          <div className="items-center flex capitalize font-medium btn-dark w-fit">
            <IoArrowBack className="text-2xl ml-2" />
            categories list
          </div>
        </Link>
        <form className="w-full md:w-8/12">
          <h2 className="mb-3">Create Category</h2>
          <input
            className="w-full form-control"
            type="text"
            name=""
            id=""
            placeholder="category name"
          />
          <input
            className="btn-indigo "
            type="submit"
            value="create category"
          />
        </form>
      </Wrapper>
    </div>
  );
};

export default CreateCategory;
