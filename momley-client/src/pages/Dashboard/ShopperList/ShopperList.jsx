import React from "react";
import { FaPlus } from "react-icons/fa";

const ShopperList = () => {
  return (
    <div className="space-y-5">
      <div className="flex justify-between font-medium">
        <p>Shopper</p>
        <div className="flex items-center gap-5">
          <button className="input-box rounded-none bg-green-600 gap-3 text-white px-10">
            <FaPlus /> Add a New Shopper
          </button>
        </div>
      </div>

      <div className="bg-white px-5 py-10 border">
        <form action="" className="grid grid-cols-2 gap-5">
          <label htmlFor="">
            <p>Full Name*</p>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input-box"
            />
          </label>
          <label htmlFor="">
            <p>Phone Number*</p>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="input-box"
            />
          </label>
          <label htmlFor="">
            <p>Email</p>
            <input
              type="text"
              placeholder="Enter your Email"
              className="input-box"
            />
          </label>
          <label htmlFor="">
            <p>Shop Name</p>
            <input
              type="text"
              placeholder="Enter your shop name"
              className="input-box"
            />
          </label>
          <label htmlFor="">
            <p>Address</p>
            <input
              type="text"
              placeholder="Enter your shop address"
              className="input-box"
            />
          </label>
          <label htmlFor="" className="flex flex-col justify-end">
            <button className="primary-btn w-40">Save</button>
          </label>
        </form>
      </div>
      <div className="bg-white p-5">
        <div className="overflow-x-auto w-full">
          105 Shoppers
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm">Shopper Name</p>
                  </label>
                </th>
                <th>Owner name</th>
                <th>Phone</th>
                <th>Product item</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm font-normal">Himalaya Corporation</p>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <p className="text-sm">FX Faruk</p>
                  </div>
                </td>
                <td>
                  <span>01874846886</span>
                </td>
                <td>18 items</td>
                <td>Rupganj, Narayanganj</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm font-normal">Himalaya Corporation</p>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <p className="text-sm">FX Faruk</p>
                  </div>
                </td>
                <td>
                  <span>01874846886</span>
                </td>
                <td>18 items</td>
                <td>Rupganj, Narayanganj</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShopperList;
