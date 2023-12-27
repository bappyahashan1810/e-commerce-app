import React from "react";
import Wrapper from "./Wrapper";
import ScreenHead from "../ScreenHead";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const Products = () => {
  return (
    <Wrapper>
      <ScreenHead>
        <Link to="/dashboard/create-product">
          <button className="btn btn-dark flex items-center">
            Create Product
            <FaPlus className="ml-2 text-xl " />
          </button>
        </Link>
      </ScreenHead>
    </Wrapper>
  );
};

export default Products;
