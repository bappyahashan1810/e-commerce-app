import React from "react";
import Wrapper from "./Wrapper";
import ScreenHead from "../ScreenHead";
import { Link, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useFetchCategoryQuery } from "../../store/Services/CategoryService";

const UpdateCategory = () => {
  const { id } = useParams();
  const { data, fetching } = useFetchCategoryQuery(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    // saveCategory({ name: name });
    // console.log(data);
  };
  return (
    <div>
      <Wrapper>
        <ScreenHead>
          <Link to="/dashboard/categories">
            <button className="items-center flex capitalize font-medium btn-dark w-fit">
              <IoArrowBack className="text-2xl ml-2" />
              Categories list
            </button>
          </Link>
        </ScreenHead>
        <form onSubmit={handleSubmit} className="w-full md:w-8/12">
          <h2 className="m-3 font-semibold capitalize">update Category</h2>
          {/* {errors.length > 0 &&
            errors.map((error, index) => (
              <p className="alert-danger flex items-center" key={index}>
                <FaXmark className="mr-2" />
                {error.msg}
              </p>
            ))} */}
          <input
            className="w-full form-control"
            type="text"
            name="name"
            defaultValue={data?.category?.name}
            id=""
            placeholder="category name"
          />
          <input
            className="btn-indigo uppercase"
            type="submit"
            value="update category"
          />
        </form>
      </Wrapper>
    </div>
  );
};

export default UpdateCategory;
