import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", usage: 12 },
  { day: "Tue", usage: 18 },
  { day: "Wed", usage: 9 },
  { day: "Thu", usage: 14 },
  { day: "Fri", usage: 22 },
  { day: "Sat", usage: 11 },
  { day: "Sun", usage: 16 },
];

export default function Analytics() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "40px",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        Energy Analytics
      </h1>

      <div
        style={{
          width: "100%",
          height: "450px",
          background: "#0f172a",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#1e293b" />

            <XAxis dataKey="day" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="usage"
              stroke="#00ffe0"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}