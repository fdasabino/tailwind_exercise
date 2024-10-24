import React from "react";
import { BsGlobe } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 bg-stone-300 px-6">
      <div className="">
        <Logo />
      </div>
      <div className="flex items-center gap-10">
        <a
          className="hover:bg-stone-100 rounded-sm transition-all duration-300  p-2"
          href="#model-s">
          Model S
        </a>
        <a
          className="hover:bg-stone-100 rounded-sm transition-all duration-300  p-2"
          href="#model-3">
          Model 3
        </a>
        <a
          a
          className="hover:bg-stone-100 rounded-sm transition-all duration-300 p-2 "
          href="#model-x">
          Model X
        </a>
        <a
          className="hover:bg-stone-100 rounded-sm transition-all duration-300  p-2"
          href="#model-y">
          Model Y
        </a>
      </div>
      <div className="flex items-center gap-3 ">
        <FaRegCircleQuestion className="h-5 w-5" />
        <BsGlobe className="h-5 w-5" />
        <FaRegUserCircle className="h-5 w-5" />
      </div>
    </nav>
  );
};

export default Navbar;
