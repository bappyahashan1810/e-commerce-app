import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import ScreenHead from "../ScreenHead";
import { Link, useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import { setClear, setSuccess } from "../../store/Reducer/globalReducer";
import { useGetQuery } from "../../store/Services/CategoryService";
import Snipper from "../Snipper";
import Pagination from "./Pagination";
import { FaRegEdit } from "react-icons/fa";

const Categories = () => {
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  let { page } = useParams();
  if (!page) {
    page = 1;
  }
  const { data = [], isLoading } = useGetQuery(page);
  console.log("your data:", data, isLoading);
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
        {!isLoading ? (
          data?.categories?.length > 0 && (
            <>
              <div>
                <table className="w-full bg-gray-800 rounded-md">
                  <thead>
                    <tr className="border-b-gray-800 text-left">
                      <th className="p-2 text-sm font-medium text-gray-400 uppercase">
                        name
                      </th>
                      <th className="p-2 text-sm font-medium text-gray-400 uppercase">
                        edit
                      </th>
                      <th className="p-2 text-sm font-medium text-gray-400 uppercase">
                        delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.categories.map((category, index) => (
                      <tr key={index} className="odd:bg-gray-900">
                        <td className="text-base font-normal text-gray-400 p-3 capitalize">
                          {category.name}
                        </td>
                        <td className="text-base font-normal text-gray-400 p-3 capitalize">
                          <Link
                            to={`/dashboard/update-category/${category._id}`}
                          >
                            <FaRegEdit className="text-xl" />
                          </Link>
                        </td>
                        <td className="text-base font-normal text-gray-400 p-3 capitalize">
                          <button>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="">
                <Pagination
                  page={parseInt(page)}
                  perpage={data.perPage}
                  count={data.count}
                />
              </div>
            </>
          )
        ) : (
          <Snipper />
        )}
      </Wrapper>
    </div>
  );
};

export default Categories;
