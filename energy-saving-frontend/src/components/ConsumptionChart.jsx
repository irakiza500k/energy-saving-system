import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", power: 4 },
  { day: "Tue", power: 6 },
  { day: "Wed", power: 5 },
  { day: "Thu", power: 8 },
  { day: "Fri", power: 7 },
];

function ConsumptionChart() {
  return (
    <div className="chart-container">

      <h2>
        Weekly Energy Usage
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="power"
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ConsumptionChart;