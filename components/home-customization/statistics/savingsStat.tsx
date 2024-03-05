"use client";

import React, { useState } from "react";

import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";



const SavingStats = () => {

    let amt = 6900;
    let current = 5000;
    const data = [
      {
        year: "2023",
        green:  amt,
        current:  current,
      },
      {
        year: "2024",
        green:  amt * .92,
        current:  current * 1.03,
      },
      {
        year: "2025",
        green:  amt * .85,
        current:  current * 1.05,
      },
      {
        year: "2026",
        green:  amt * .76,
        current:  current * 1.11,
      },
      {
        year: "2027",
        green:  amt * .73,
        current:  current * 1.2,
      },
    ];
  
    return (
        <div style={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top:  5,
              right:  30,
              left:  20,
              bottom:  5,
            }}
          >
            <CartesianGrid strokeDasharray="3  3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="green"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default SavingStats;