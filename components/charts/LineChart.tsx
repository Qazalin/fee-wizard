import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

export const GroupedLineChart = () => {
  const data = [
    {
      name: "09-08",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "09-09",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "09-10",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "09-11",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];
  return (
    <ResponsiveContainer
      width="100%"
      height="90%"
      className="absolute bottom-0 right-2"
    >
      <LineChart data={data}>
        <CartesianGrid opacity={0.3} vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
