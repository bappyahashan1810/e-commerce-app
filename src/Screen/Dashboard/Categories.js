import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import ScreenHead from "../ScreenHead";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import { setClear, setSuccess } from "../../store/Reducer/globalReducer";

const Categories = () => {
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSuccess(success));
    return () => {
      dispatch(setClear());
    };
  }, [dispatch, success]);
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
        {success && (
          <p className="alert-success flex items-center">
            <FaCheck className="mr-2" />
            {success}
          </p>
        )}
        <h1>This is categories page</h1>
        <p>Here is Categories list</p>
      </Wrapper>
    </div>
  );
};

export default Categories;
