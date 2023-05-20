import React from "react";
import { FaPlus } from "react-icons/fa";

const Orders = () => {
  return (
    <div className="space-y-5">
      <div className="flex justify-between font-medium">
        <p>Orders</p>
        <div className="flex items-center gap-5">
          <p className="">Export</p>
          <button className="input-box rounded-none bg-green-600 gap-3 text-white px-10">
            <FaPlus /> Create Order
          </button>
        </div>
      </div>
      <div className="bg-white p-5">
        <div className="flex items-center gap-5 my-5">
          <p className={`border-b-2 py-2 border-black font-semibold`}>All</p>
          <p className={`py-2`}>Unpaid</p>
          <p className={`py-2`}>Unfullfilled</p>
          <p className={`py-2`}>Shipping</p>
          <p className={`py-2`}>Completed</p>
          <p className={`py-2`}>Cancellation</p>
          <p className={`py-2`}>Return/Refund</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex py-5 gap-5">
            <input
              placeholder="Search products name, ID"
              type="text"
              className="input-box rounded-none"
            />
            <input
              placeholder="Payment Status"
              type="text"
              className="input-box rounded-none"
            />
            <input
              placeholder="More filters"
              type="text"
              className="input-box rounded-none"
            />
          </div>
          <button className="primary-btn">Search</button>
        </div>
        <div className="overflow-x-auto w-full">
          55 Orders
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm">Order ID</p>
                  </label>
                </th>
                <th>Date</th>
                <th>Total Price</th>
                <th>Partial Payment</th>
                <th>Items</th>
                <th>Delivery Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm font-normal">SU 12 34 56</p>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <p className="text-sm">22/05/2021</p>
                  </div>
                </td>
                <td>
                  <span>850</span>
                </td>
                <td>Paid</td>
                <td>03</td>
                <td>COD</td>
                <th>
                  <button className="text-blue-500 font-normal">
                    Processing
                  </button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm font-normal">SU 12 34 56</p>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <p className="text-sm">22/05/2021</p>
                  </div>
                </td>
                <td>
                  <span>900</span>
                </td>
                <td>0</td>
                <td>03</td>
                <td>COD</td>
                <th>
                  <button className="text-green-500 font-normal">
                    Delivery
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
