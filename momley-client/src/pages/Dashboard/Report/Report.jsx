import React from "react";

const Report = () => {
  return (
    <div className="space-y-5">
      <div className="flex justify-between font-medium">
        <p>
          Reports{" "}
          <small>Download and view your reports from the past 6 months</small>
        </p>
      </div>
      <div className="bg-white p-5">
        <div className="flex items-center gap-5 my-5">
          <p className={`border-b-2 py-2 border-black font-semibold`}>
            Order Export
          </p>
          <p className={`py-2`}>Shopping Document</p>
          <p className={`py-2`}>Income Report</p>
          <p className={`py-2`}>Marketing Center Report</p>
          <p className={`py-2`}>Business Insights Report</p>
        </div>
        <div className="overflow-x-auto w-full">
          05 Reports
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm">Report Type</p>
                  </label>
                </th>
                <th>Request Time</th>
                <th>Request Account</th>
                <th>Report Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm font-normal">All</p>
                  </label>
                </th>
                <td>22/052021 12:230:39</td>
                <td>
                  <span>farukuiux01</span>
                </td>
                <td>Order.all.20211004_20211103.xlsx</td>

                <td className="text-blue-600">Download</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox" />
                    <p className="text-sm font-normal">Order</p>
                  </label>
                </th>
                <td>22/052021 12:230:39</td>
                <td>
                  <span>farukuiux01</span>
                </td>
                <td>Order.all.20211004_20211103.xlsx</td>
                <td className="text-blue-600">Download</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
