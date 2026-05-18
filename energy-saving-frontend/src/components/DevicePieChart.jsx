import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "TV", value: 400 },
  { name: "Fridge", value: 700 },
  { name: "Iron", value: 300 },
  { name: "Lights", value: 200 },
];

function DevicePieChart() {

  return (
    <div className="analytics-card">

      <h2>
        Device Consumption
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
          />

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default DevicePieChart;