import React from "react";
import AreaCharts from "../../../components/Dashboard/Dashboard/AreaCharts/AreaCharts";
import { FaArrowUp } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-title font-semibold">Sales Analytics</div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">$75000</div>
            <div className="stat-desc text-success flex items-center">
              <FaArrowUp /> 5% than last month
            </div>
          </div>

          <AreaCharts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
