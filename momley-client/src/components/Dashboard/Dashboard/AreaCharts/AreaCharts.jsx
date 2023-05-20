import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    sells: 68000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "February",
    sells: 75000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "March",
    sells: 45000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "April",
    sells: 120000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "May",
    sells: 40000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "June",
    sells: 95000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "July",
    sells: 40000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "August",
    sells: 45000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "September",
    sells: 45000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "October",
    sells: 75000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "November",
    sells: 60000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "December",
    sells: 80000,
    pv: 4300,
    amt: 2100,
  },
];

export default class AreaCharts extends PureComponent {
  render() {
    return (
      <div className="md:w-full">
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="0 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="55%" stopColor="#57D2FAAB" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#56CCF2" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="sells"
              stroke="#56CCF2"
              strokeWidth={4}
              fill="url(#gradient)"
              textLength={100}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
