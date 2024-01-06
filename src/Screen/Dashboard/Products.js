import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import ScreenHead from "../ScreenHead";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { setClear } from "../../store/Reducer/globalReducer";

const Products = () => {
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      toast.success(success);
    }
    return () => {
      dispatch(setClear());
    };
  }, [success, dispatch]);
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
      <Toaster position="top-right" reverseOrder={false} />
    </Wrapper>
  );
};

export default Products;
