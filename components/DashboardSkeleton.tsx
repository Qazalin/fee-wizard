export const DashboardSkeleton = () => {
  return (
    <div className="h-[250vh] lg:h-full w-full grid grid-cols-1 lg:grid-cols-3 gap-2 p-5">
      <div className="col-span-1 bg-zinc-800 w-full h-full  relative rounded-md text-zinc-300 animate-pulse" />

      <div className="col-span-1 lg:col-span-2 bg-zinc-800 w-full h-full  relative rounded-md text-zinc-300 animate-pulse" />

      <div className="col-span-1 bg-zinc-800 w-full h-full  relative rounded-md text-zinc-300 animate-pulse" />

      <div className="col-span-1 bg-zinc-800 w-full h-full  relative rounded-md text-zinc-300 animate-pulse" />
      <div className="col-span-1 bg-zinc-800 w-full h-full  relative rounded-md text-zinc-300 animate-pulse" />
    </div>
  );
};
