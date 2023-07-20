import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { idle: 2.0 },
  { idle: 48.24 },
  { idle: 38.74 },
  { idle: 97.75 },
  { idle: 70.99 },
  { idle: 98.48 },
  { idle: 78.74 },
  { idle: 98.25 },
  { idle: 88.99 },
  { idle: 96.97 },
  { idle: 98.31 },
  { idle: 98.25 },
  { idle: 88.99 },
  { idle: 96.97 },
  { idle: 98.31 },
  { idle: 98.25 },
  { idle: 88.99 },
  { idle: 96.97 },
  { idle: 98.31 },
];

export default class Cpu extends PureComponent {
  render() {
    return (
      <>
        <div className="mt-5  canvas-container">
          <h1 align="center">CPU (idle)</h1>
          {/* width="90%" height="90%" problema: 
            el componente  desborda la Página */}
          <ResponsiveContainer width="80%" height="80%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="idle"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </>
    );
  }
}
