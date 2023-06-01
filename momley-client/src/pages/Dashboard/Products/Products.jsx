import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../../contexts/StateProvider/StateProvider";

const Products = () => {
  const { allBooks } = useContext(StateContext);

  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row justify-between font-medium">
        <p>Inventory</p>
        <div className="flex items-center gap-5">
          <p className="">Export</p>
          <p className="">Import</p>
          <Link to="add">
            <button className="input-box rounded-none bg-green-600 gap-3 text-white px-10">
              Add Product
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white p-5">
        <div className="flex items-center gap-5 my-5">
          <p className={`border-b-2 py-2 border-black font-semibold`}>All</p>
          <p className={`py-2`}>Active</p>
          <p className={`py-2`}>Inactive</p>
          <p className={`py-2`}>Stock out</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex py-5 gap-5">
            <input
              placeholder="Search products name"
              type="text"
              className="input-box rounded-none"
            />
            <input
              placeholder="Categories"
              type="text"
              className="input-box rounded-none"
            />
            <input
              placeholder="Product Vendor"
              type="text"
              className="input-box rounded-none"
            />
          </div>
          <button className="primary-btn">Search</button>
        </div>
        <div className="overflow-x-auto w-fit md:w-auto">
          55 Orders
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm">Product Name</p>
                  </label>
                </th>
                <th>Price</th>
                <th>Stock</th>
                <th>SKU</th>
                <th>Vendor</th>
                <th>Edit stock</th>
              </tr>
            </thead>
            <tbody>
              {allBooks.map(book => (
                <tr key={book._id}>
                  <th>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="checkbox" />
                      <p className="text-sm font-normal">{book?.name}</p>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <p className="text-sm">৳ {book?.pricing?.price}</p>
                    </div>
                  </td>
                  <td>
                    <span>{book?.inventory?.sku}</span>
                  </td>
                  <td>SK-{book?.inventory?.barcode}</td>
                  <td>{book?.specification?.brand}</td>
                  <td className="text-blue-600">Add</td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
