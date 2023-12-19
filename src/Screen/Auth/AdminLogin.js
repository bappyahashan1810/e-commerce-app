import React, { useEffect, useState } from "react";
import { useAuthLoginMutation } from "../../store/Services/authServices";
import { useDispatch } from "react-redux";
import { setAdminToken } from "../../store/Reducer/authReducer";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [loginData, response] = useAuthLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("my response", response);
  const errors = response?.error?.data?.error
    ? response?.error?.data?.error
    : response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (response.isSuccess) {
      localStorage.setItem("admin-token", response?.data?.token);
      dispatch(setAdminToken(response?.data?.token));
      navigate("/dashboard/products");
    }
  }, [response.isSuccess]);

  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginData(state);
  };
  return (
    <div className="bg-black2 h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-black1 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 p-4"
      >
        <h3 className="text-white mb-4 font-semibold">Dashboard Login</h3>
        {errors.length > 0 &&
          errors.map((error, index) => (
            <div key={index}>
              <p className="text-red-700 bg-red-100 p-2 mb-3 font-medium text-sm rounded-md">
                {error.err || error.msg}
              </p>
            </div>
          ))}
        <div>
          <input
            className="w-full bg-black1 text-white rounded-md outline-none mb-4 p-4"
            type="email"
            name="email"
            onChange={handleInputs}
            value={state.email}
            id=""
            placeholder="Enter Email..."
          />
        </div>
        <div>
          <input
            className="w-full bg-black1 text-white rounded-md outline-none mb-4 p-4"
            type="password"
            name="password"
            onChange={handleInputs}
            value={state.password}
            id=""
            placeholder="Enter Password..."
          />
        </div>
        <div>
          <input
            className="uppercase text-white bg-indigo-600 p-2 w-full font-semibold cursor-pointer rounded-sm"
            type="submit"
            value={response.isLoading ? "Loading...." : `sign in `}
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
