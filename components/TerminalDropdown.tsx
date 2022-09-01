import { Menu, Transition } from "@headlessui/react";
import { ChainInfoType, PropsWithClassname } from "@wiz/types";
import {
  Dispatch,
  Fragment,
  JSXElementConstructor,
  SetStateAction,
  useState,
} from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Polygon } from "./icons";

const chains: ChainInfoType[] = [
  { chain: "polygon", Icon: Polygon },
  {
    chain: "ethereum",
    Icon: Polygon,
  },
  {
    chain: "solana",
    Icon: Polygon,
  },
  {
    chain: "bnb",
    Icon: Polygon,
  },
  {
    chain: "fantom",
    Icon: Polygon,
  },
];

export const TerminalDropdown: React.FC<{
  setSelected: Dispatch<SetStateAction<ChainInfoType | undefined>>;
  selected?: ChainInfoType;
}> = ({ setSelected, selected }) => {
  return (
    <Menu as="div" className="self-end">
      <div>
        <Menu.Button className="bg-zinc-800 p-2 rounded-md capitalize flex w-36 items-center justify-center">
          {selected ? selected.chain : "Select Chain"}
          <IoMdArrowDropdown className="my-auto ml-1 text-xl" />
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
        <Menu.Items className="bg-zinc-800 mt-1 absolute z-30 rounded-md w-36">
          {chains.map((c, i) => (
            <Menu.Item key={`chain-${i}`}>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "bg-sky-500 bg-opacity-20 text-white"
                      : "text-zinc-300"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize`}
                  onClick={() => setSelected(c)}
                >
                  <c.Icon className="w-3 md:w-4 lg:w-5 fill-zinc-300 mr-2" />
                  {c.chain}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
