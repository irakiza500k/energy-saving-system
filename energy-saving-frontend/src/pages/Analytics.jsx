import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import "../styles/analytics.css";

const data = [
  { name: "Mon", power: 120 },
  { name: "Tue", power: 300 },
  { name: "Wed", power: 220 },
  { name: "Thu", power: 410 },
  { name: "Fri", power: 280 },
  { name: "Sat", power: 350 },
  { name: "Sun", power: 200 },
];

function Analytics() {
  return (
    <div className="analytics-page">
      <h1 className="analytics-title">
        Energy Analytics
      </h1>

      <div className="chart-wrapper">
        <ResponsiveContainer
          width="100%"
          height={400}
        >
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="power"
              stroke="#00ff99"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;