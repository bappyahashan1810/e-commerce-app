import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useCreateMutation } from "../../store/Services/CategoryService";
import { useDispatch } from "react-redux";
import { setSuccess } from "../../store/Reducer/globalReducer";
import { FaXmark } from "react-icons/fa6";

const CreateCategory = () => {
  const [saveCategory, data] = useCreateMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = data?.error?.data?.errors ? data?.error?.data?.errors : [];
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    saveCategory({ name: name });
    // console.log(data);
  };
  useEffect(() => {
    if (data?.isSuccess) {
      dispatch(setSuccess(data?.data?.message));
      navigate("/dashboard/categories");
    }
  }, [data?.isSuccess, dispatch, data, navigate]);
  return (
    <div>
      <Wrapper>
        <Link to="/dashboard/categories" className="">
          <div className="items-center flex capitalize font-medium btn-dark w-fit">
            <IoArrowBack className="text-2xl ml-2" />
            categories list
          </div>
        </Link>
        <form onSubmit={handleSubmit} className="w-full md:w-8/12">
          <h2 className="m-3 font-semibold">Create Category</h2>
          {errors.length > 0 &&
            errors.map((error, index) => (
              <p className="alert-danger flex items-center" key={index}>
                <FaXmark className="mr-2" />
                {error.msg}
              </p>
            ))}
          <input
            className="w-full form-control"
            type="text"
            name="name"
            id=""
            placeholder="category name"
          />
          <input
            className="btn-indigo "
            type="submit"
            value={data.isLoading ? "Loading...." : "create category"}
          />
        </form>
      </Wrapper>
    </div>
  );
};

export default CreateCategory;
