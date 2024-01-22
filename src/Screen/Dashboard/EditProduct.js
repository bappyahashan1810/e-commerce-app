import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import ScreenHead from "../ScreenHead";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useAllCategoriesQuery } from "../../store/Services/CategoryService";
import Snipper from "../Snipper";
import { TwitterPicker } from "react-color";
import { v4 as uuidv4 } from "uuid";
import ColorList from "./ColorList";
import SizeList from "./SizeList";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../store/Services/ProductService";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSuccess } from "../../store/Reducer/globalReducer";
import parse from "html-react-parser";

const EditProduct = () => {
  const { data = [], isLoading } = useAllCategoriesQuery();
  const [saveData, response] = useUpdateProductMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: product, isLoading: loading } = useGetProductQuery(id);
  const [value, setValue] = useState("");

  const [state, setState] = useState({
    title: "",
    price: 0,
    discount: 0,
    stock: 0,
    category: "",
    colors: [],
    description: "",
    sizes: [],
  });
  useEffect(() => {
    if (!loading) {
      setState({ ...state, description: value });
    }
  }, [value, state, loading]);

  useEffect(() => {
    if (!loading) {
      setState(product);
      setSizeList(product?.sizes);
      setValue(parse(product?.description));
    }
  }, [product, loading]);

  const sizes = [
    { name: "xsm" },
    { name: "sm" },
    { name: "md" },
    { name: "lg" },
    { name: "xl" },
    { name: "xxl" },
    { name: "1 year" },
    { name: "2 years" },
    { name: "3 years" },
    { name: "4 years" },
    { name: "5 years" },
  ];
  const [sizeList, setSizeList] = useState("");

  const handleColor = (color) => {
    const filtered = state.colors.filter((clr) => clr.color !== color.hex);
    setState({
      ...state,
      colors: [...filtered, { color: color.hex, id: uuidv4() }],
    });
  };

  const deleteColor = (color) => {
    const filterd = state.colors.filter((clr) => clr.color !== color);
    setState({ ...state, colors: filterd });
  };

  const handleSize = (size) => {
    const filtered = sizeList.filter((sz) => sz.name !== size.name);
    setSizeList([...filtered, size]);
    setState({ ...state, sizes: [...filtered, size] });
  };
  const deleteSize = (size) => {
    const filterd = sizeList.filter((sz) => sz.name !== size.name);
    setSizeList(filterd);
    setState({ ...state, sizes: filterd });
  };
  const inputValue = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(state);
  };

  useEffect(() => {
    response?.error?.data?.errors.map((err) => {
      return toast.error(err.msg);
    });
  }, [response?.error?.data?.errors]);
  useEffect(() => {
    if (response.isSuccess) {
      dispatch(setSuccess(response?.data?.msg));
      navigate("/dashboard/products");
    }
  }, [response?.data?.msg, response?.isSuccess, dispatch, navigate]);

  return (
    <div>
      <Wrapper>
        <ScreenHead>
          <Link to="/dashboard/products">
            <button className="btn btn-dark flex items-center">
              <IoArrowBack className="mr-2 text-xl " />
              Product list
            </button>
          </Link>
        </ScreenHead>
        <Toaster position="top-right" reverseOrder={true} />
        <h1 className="text-base font-medium text-gray-500 capitalize">
          Edit Product
        </h1>
        {!loading ? (
          <div className="flex flex-wrap -mx-3">
            <form onSubmit={handleSubmit} className="w-full md:w-8/12 p-3">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="title" className="title">
                    title
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={inputValue}
                    value={state.title}
                    name="title"
                    id="text"
                    placeholder="title..."
                  />
                </div>
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="price" className="title">
                    price
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    onChange={inputValue}
                    value={state.price}
                    name="price"
                    id="price"
                    placeholder="price..."
                  />
                </div>
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="discount" className="title">
                    discount
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    onChange={inputValue}
                    value={state.discount}
                    name="discount"
                    id="discount"
                    placeholder="discount..."
                  />
                </div>
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="discount" className="title">
                    stock
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    onChange={inputValue}
                    value={state.stock}
                    name="stock"
                    id="stock"
                    placeholder="stock..."
                  />
                </div>
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="category" className="title">
                    categories
                  </label>
                  {!isLoading ? (
                    data.length > 0 && (
                      <select
                        className="form-control"
                        onChange={inputValue}
                        value={state.category}
                        name="category"
                        id="category"
                      >
                        <option
                          className="capitalize form-control"
                          value="choose category"
                        >
                          choose category
                        </option>
                        {data?.map((category, index) => (
                          <option
                            className="capitalize form-control"
                            key={index}
                            value={category.name}
                          >
                            {category.name}
                          </option>
                        ))}
                      </select>
                    )
                  ) : (
                    <Snipper />
                  )}
                </div>
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="colors" className="title">
                    Choose color
                  </label>
                  <TwitterPicker onChangeComplete={handleColor} />
                </div>
                <div className="w-full p-3">
                  <label htmlFor="colors" className="title">
                    Choose sizes
                  </label>
                  {sizes.length > 0 && (
                    <div className="flex flex-wrap">
                      {sizes.map((size, index) => (
                        <div
                          key={index}
                          className="size"
                          onClick={() => handleSize(size)}
                        >
                          {size.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="w-full p-3">
                  <label htmlFor="description" className="title">
                    Description
                  </label>
                  <ReactQuill
                    theme="snow"
                    className="placeholder:text-white"
                    value={value}
                    onChange={setValue}
                    placeholder="Description"
                  />
                </div>
                <div className="w-full p-3">
                  <input
                    type="submit"
                    className=" btn-indigo w-full"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
            <div className="w-full md:w-4/12 p-3 ">
              <ColorList colors={state.colors} deleteColor={deleteColor} />
              <SizeList sizeList={sizeList} deleteSize={deleteSize} />
            </div>
          </div>
        ) : (
          <Snipper />
        )}
      </Wrapper>
    </div>
  );
};

export default EditProduct;
