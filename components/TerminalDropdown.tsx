import { Menu, Transition } from "@headlessui/react";
import { SupportedChains } from "@wiz/types";
import { Dispatch, Fragment, SetStateAction } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { SUPPORTED_CHAINS } from "lib/constants";

export const ChainsDropdown: React.FC<{
  setSelected: Dispatch<SetStateAction<SupportedChains>>;
  selected?: SupportedChains;
}> = ({ setSelected, selected }) => {
  return (
    <Menu as="div" className="self-end">
      <div>
        <Menu.Button className="bg-zinc-800 p-2 rounded-md capitalize flex flex-col relative lg:flex-row items-center justify-center  w-5 lg:w-24">
          <div className="invisible lg:visible">
            <p>{selected ? selected : "Select Chain"}</p>
          </div>
          <div className="absolute lg:relative">
            <IoMdArrowDropdown className="w-fit h-fit mx-auto" />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="bg-zinc-800 mt-1 absolute right-0 z-30 rounded-md lg:w-24">
          {SUPPORTED_CHAINS.filter((c) => c !== selected).map((c, i) => (
            <Menu.Item key={`chain-${i}`}>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "bg-[#818cf8] bg-opacity-20 text-white"
                      : "text-zinc-300"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize text-center justify-center`}
                  onClick={() => setSelected(c)}
                >
                  {c}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
