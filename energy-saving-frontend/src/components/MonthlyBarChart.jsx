import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", bill: 1200 },
  { month: "Feb", bill: 1800 },
  { month: "Mar", bill: 1600 },
  { month: "Apr", bill: 2100 },
];

function MonthlyBarChart() {

  return (
    <div className="analytics-card">

      <h2>
        Monthly Electricity Bill
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="bill" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default MonthlyBarChart;