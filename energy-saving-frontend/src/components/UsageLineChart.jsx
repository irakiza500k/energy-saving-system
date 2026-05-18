import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", usage: 3 },
  { day: "Tue", usage: 5 },
  { day: "Wed", usage: 4 },
  { day: "Thu", usage: 7 },
  { day: "Fri", usage: 6 },
  { day: "Sat", usage: 8 },
  { day: "Sun", usage: 5 },
];

function UsageLineChart() {

  return (
    <div className="analytics-card">

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
            dataKey="usage"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default UsageLineChart;