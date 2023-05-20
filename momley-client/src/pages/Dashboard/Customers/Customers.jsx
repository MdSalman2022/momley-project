import React from "react";
import { FaPlus } from "react-icons/fa";

const Customers = () => {
  return (
    <div className="space-y-5">
      <div className="flex justify-between font-medium">
        <p>Inventory</p>
        <div className="flex items-center gap-5">
          <p className="">Export</p>
          <p className="">Import Customers</p>
          <button className="input-box rounded-none bg-green-600 gap-3 text-white px-10">
            <FaPlus /> Add Customer
          </button>
        </div>
      </div>
      <div className="bg-white p-5">
        <div className="flex items-center gap-5 my-5">
          <p className={`border-b-2 py-2 border-black font-semibold`}>Add</p>
          <p className={`py-2`}>New</p>
          <p className={`py-2`}>Returning</p>
          <p className={`py-2`}>Abandoned Checkout</p>
          <p className={`py-2`}>Email Subscribers</p>
          <p className={`py-2`}>From Bangladesh</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex py-5 gap-5">
            <input
              placeholder="Search customers"
              type="text"
              className="input-box rounded-none"
            />
            <input
              placeholder="Email subscribers status"
              type="text"
              className="input-box rounded-none"
            />
            <input
              placeholder="tags with"
              type="text"
              className="input-box rounded-none"
            />
          </div>
          <button className="primary-btn">Search</button>
        </div>
        <div className="overflow-x-auto w-full space-y-3">
          <div className="flex justify-between">
            <p>1020 Customers</p>
            <p className="input-box">Short By: Last Update(newest first)</p>
          </div>
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm">Customer Name</p>
                  </label>
                </th>
                <th>Orders</th>
                <th>BDT Spent</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm font-normal">Shaju Khan</p>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <p className="text-sm">02 Orders</p>
                  </div>
                </td>
                <td>BDT 0.00</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm font-normal">Shaju Khan</p>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <p className="text-sm">02 Orders</p>
                  </div>
                </td>
                <td>BDT 0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
