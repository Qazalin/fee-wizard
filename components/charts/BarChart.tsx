import { ChartData } from "@wiz/types";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";
import { LayoutType } from "recharts/types/util/types";

export const GradientBarChart: React.FC<{
  data: ChartData;
  color: string;
  id: string;
  layout?: LayoutType;
}> = ({ data, color, id, layout = "horizontal" }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout={layout}>
        <defs>
          <linearGradient
            id={id}
            x1={layout === "horizontal" ? "0" : "1"}
            y1="0"
            x2="0"
            y2={layout === "horizontal" ? "1" : "0"}
          >
            <stop offset="10%" stopColor={color} stopOpacity={0.8} />
            <stop offset="90%" stopColor="#3f3f46" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        <Bar dataKey="y" fill={`url(#${id})`} radius={5} />
        <XAxis
          dataKey={layout === "horizontal" ? "x" : "y"}
          type={layout === "horizontal" ? "category" : "number"}
        />
        <YAxis
          dataKey={layout === "horizontal" ? "y" : "x"}
          type={layout === "horizontal" ? "number" : "category"}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
