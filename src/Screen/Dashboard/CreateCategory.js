import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useCreateMutation } from "../../store/Services/CategoryService";

const CreateCategory = () => {
  const [saveCategory, data] = useCreateMutation();
  const errors = data?.error?.data?.error ? data?.error?.data?.error : [];
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    saveCategory({ name });
    console.log(data);
  };
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
          {errors &&
            errors.map((error, index) => (
              <p className="alert-danger" key={index}>
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
