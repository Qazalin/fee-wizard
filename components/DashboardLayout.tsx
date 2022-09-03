import { PropsWithChildren } from "react";

export const DashboardLayout: React.FC<{}> = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-2 p-5">
      <div className="col-span-1 bg-zinc-900" />
      <div className="col-span-1 lg:col-span-2 bg-zinc-900" />
      <div className="col-span-1 bg-zinc-900" />
      <div className="col-span-1 bg-zinc-900" />
      <div className="col-span-1 bg-zinc-900" />
    </div>
  );
};
