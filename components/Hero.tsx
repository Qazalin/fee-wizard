export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-fit">
      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl max-w-sm md:max-w-lg lg:max-w-4xl text-center font-bold">
        The missing multi-chain fee API that works like{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r primary-gradient">
          magic
        </span>
      </h1>
      <button className="mt-10 bg-white text-black p-2 rounded-full capitalize hover:bg-opacity-75 transition-colors">
        get started
      </button>
    </div>
  );
};
