import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(toggleMenu);
  console.log(pathname);

  return (
    <>
      {/* Menu screen for large device */}
      <div className="relative container mx-auto">
        <nav className="pt-7 lg:px-0 flex items-center px-3 justify-between flex-wrap">
          <div className="logo">
            <h1 className="text-2xl font-bold">
              Food<span className="text-custom-green">Mood</span>
            </h1>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex font-semibold justify-between items-baseline text-lg md:gap-5 lg:gap-7">
              <Link
                to="/"
                style={{ color: pathname === "/" ? "green" : "black" }}
                className={`cursor-pointer px-3 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green`}
              >
                Home
              </Link>
              <Link
                to="/about"
                style={{ color: pathname === "/about" ? "green" : "black" }}
                className={`cursor-pointer px-3 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green`}
              >
                About Us
              </Link>
              <Link
                to="/recipe"
                style={{ color: pathname === "/recipe" ? "green" : "black" }}
                className={`cursor-pointer px-3 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green`}
              >
                Recipe
              </Link>
              <Link
                to="/contact-us"
                style={{
                  color: pathname === "/contact-us" ? "green" : "black",
                }}
                className={`cursor-pointer px-3 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green ${
                  pathname === "/contact-us" ? "text-green-500" : "text-black"
                }`}
              >
                Contact
              </Link>
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
          <div
            onClick={() => setToggleMenu(true)}
            className="flex lg:hidden cursor-pointer "
          >
            <FaBars size={25} />
          </div>
        </nav>
      </div>
      {/* Menu screen for Mobile device */}
      <div
        style={{ right: toggleMenu ? "0px" : "-400px" }}
        className={`lg:hidden fixed top-0 px-2 z-50 mx-auto w-[320px] h-full transition-all ease-in-out duration-700 delay-400 bg-custom-green`}
      >
        <div className="flex justify-between items-center py-3">
          <div className="logo">
            <h1 className="text-2xl font-bold">
              Food<span className="text-rich-white">Mood</span>
            </h1>
          </div>
          <div
            className="flex lg:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          >
            <MdCancel size={32} color="white" />
          </div>
        </div>
        <div className="flex justify-center py-3">
          <div className="relative flex items-center">
            <span className="absolute py-2 px-3">
              <BiSearch />
            </span>
            <input
              type="Search"
              className="bg-rich-white shadow-md outline-none py-2 rounded-sm px-8 text-rich-black"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="lg:hidden">
          <ul className="flex font-semibold flex-col justify-between items-center text-lg md:gap-5 lg:gap-7">
            <Link
              to="/"
              style={{ color: pathname === "/" ? "green" : "black" }}
              className={`cursor-pointer border-b w-full text-center py-1 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green`}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{ color: pathname === "/about" ? "green" : "black" }}
              className={`cursor-pointer border-b w-full text-center py-1 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green`}
            >
              About Us
            </Link>
            <Link
              to="/recipe"
              style={{ color: pathname === "/recipe" ? "green" : "black" }}
              className={`cursor-pointer border-b w-full text-center py-1 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green`}
            >
              Recipe
            </Link>
            <Link
              to="/contact-us"
              style={{
                color: pathname === "/contact-us" ? "green" : "black",
              }}
              className={`cursor-pointer border-b w-full text-center py-1 hover:transition-all transition ease-in-out hover:scale-110 text-rich-black hover:text-custom-green ${
                pathname === "/contact-us" ? "text-green-500" : "text-black"
              }`}
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
