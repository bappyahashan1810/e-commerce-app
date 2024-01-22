import React, { useEffect } from "react";
import Wrapper from "./Wrapper";
import ScreenHead from "../ScreenHead";
import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { setClear } from "../../store/Reducer/globalReducer";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../store/Services/ProductService";
import Snipper from "../Snipper";
import { FaRegEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import Pagination from "./Pagination";

const Products = () => {
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  let { page } = useParams();
  if (!page) {
    page = 1;
  }
  const { data = [], isFetching } = useGetProductsQuery(page);
  const [delProduct, response] = useDeleteProductMutation();
  console.log(response);
  useEffect(() => {
    if (success) {
      toast.success(success);
    }
    return () => {
      dispatch(setClear());
    };
  }, [success, dispatch]);
  const deleteProduct = (id) => {
    if (window.confirm("Are you Sure want to Delete?")) {
      delProduct(id);
    }
  };
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
      {!isFetching ? (
        data?.products?.length > 0 ? (
          <div>
            <table className="w-full bg-gray-700 rounded-md">
              <thead>
                <tr className="border-b-gray-800 text-left">
                  <th className="p-2 text-sm font-medium text-gray-400 uppercase">
                    name
                  </th>
                  <th className="p-2 text-sm font-medium text-gray-400 uppercase">
                    price
                  </th>
                  <th className="p-2 text-sm font-medium text-gray-400 uppercase">
                    category
                  </th>
                  <th className="p-2 text-sm font-medium text-gray-400 uppercase">
                    image
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
                {data?.products.map((product) => {
                  return (
                    <tr key={product._id} className="odd:bg-gray-900">
                      <td className="text-base font-normal text-gray-400 p-3 capitalize">
                        {product.title}
                      </td>
                      <td className="text-base font-normal text-gray-400 p-3 capitalize">
                        ${product.price}.00
                      </td>
                      <td className="text-base font-normal text-gray-400 p-3 capitalize">
                        {product.category}
                      </td>
                      <td className="text-base font-normal text-gray-400 p-3 capitalize">
                        <img
                          className="w-10 h-10 rounded-md object-cover"
                          src={`/images/${product.image1}`}
                          alt="product"
                          srcset=""
                        />
                      </td>
                      <td className="text-base font-normal text-gray-400 p-3 capitalize">
                        <Link
                          to={`/dashboard/edit-product/${product._id}`}
                          className=""
                        >
                          <FaRegEdit className="text-xl " />
                        </Link>
                      </td>
                      <td className="text-base font-normal text-gray-400 p-3 capitalize">
                        <button
                          onClick={() => deleteProduct(product._id)}
                          className="hover:bg-gray-500 p-2 rounded-md"
                        >
                          <MdAutoDelete className="text-rose-700 text-2xl" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              page={parseInt(page)}
              perpage={data.perPage}
              count={data.count}
              path="dashboard/products"
            />
          </div>
        ) : (
          <div>
            <h1>no product available</h1>
          </div>
        )
      ) : (
        <Snipper />
      )}
    </Wrapper>
  );
};

export default Products;
