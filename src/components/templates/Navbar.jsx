import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="relative container mx-auto">
      <nav className="pt-7 lg:px-0 flex items-center justify-between flex-wrap">
        <div className="logo">
          <h1 className="text-2xl font-bold">
            Food<span className="text-custom-green">Mood</span>
          </h1>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex font-semibold justify-between items-baseline text-lg md:gap-5 lg:gap-7">
            <li className="cursor-pointer px-3 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green">
              Home
            </li>
            <li className="cursor-pointer px-3 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green">
              About
            </li>
            <li className="cursor-pointer px-3 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green">
              Recipe
            </li>
            <li className="cursor-pointer px-3 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green">
              Contact
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex relative items-center">
          <span className="absolute py-2 px-3">
            <BiSearch />
          </span>
          <input
            type="Search"
            className="bg-rich-white shadow-md outline-none py-2 rounded-sm px-8 text-rich-black"
            placeholder="Search..."
          />
        </div>
        <div className="flex lg:hidden cursor-pointer ">
          <FaBars size={25} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
