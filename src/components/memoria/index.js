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
  { memused: 100.0 },
  { memused: 72.0 },
  { memused: 78.24 },
  { memused: 78.74 },
  { memused: 77.75 },
  { memused: 70.99 },
  { memused: 78.48 },
  { memused: 78.74 },
  { memused: 78.25 },
  { memused: 78.99 },
  { memused: 76.97 },
  { memused: 78.31 },
  { memused: 78.25 },
  { memused: 78.99 },
  { memused: 76.97 },
  { memused: 78.31 },
  { memused: 78.25 },
  { memused: 78.99 },
  { memused: 76.97 },
  { memused: 78.31 },
];

export default class Memoria extends PureComponent {
  render() {
    return (
      <>
        <div className="mt-5  canvas-container">
          <h1 align="center">Memoria (memused)</h1>
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
                dataKey="memused"
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



