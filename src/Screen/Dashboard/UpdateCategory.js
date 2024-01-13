import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import ScreenHead from "../ScreenHead";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import {
  useFetchCategoryQuery,
  useUpdateCategoryMutation,
} from "../../store/Services/CategoryService";
import Snipper from "../Snipper";
import { useDispatch } from "react-redux";
import { setSuccess } from "../../store/Reducer/globalReducer";
import { FaXmark } from "react-icons/fa6";

const UpdateCategory = () => {
  const { id } = useParams();
  const { data, fetching } = useFetchCategoryQuery(id);
  const [saveCategory, response] = useUpdateCategoryMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : "";
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    saveCategory({ name: name, id });
    // console.log(data);
  };
  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setSuccess(response?.data?.message));
      navigate("/dashboard/categories");
    }
  }, [response, dispatch, navigate]);
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
        {!fetching ? (
          <form onSubmit={handleSubmit} className="w-full md:w-8/12">
            <h2 className="m-3 font-semibold capitalize">update Category</h2>
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
        ) : (
          <Snipper />
        )}
      </Wrapper>
    </div>
  );
};

export default UpdateCategory;
