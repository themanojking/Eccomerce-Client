import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalQty } = useSelector((state) => state.cart);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 lg:px-20">
        <h1 className="text-lg md:text-3xl  font-bold text-orange-600">
          Cafe Havana
        </h1>

        <ul className="hidden lg:flex items-center gap-10">
          <li className="text-lg font-medium cursor-pointer hover:text-orange-600">
            Home
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-orange-600">
            Menu
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-orange-600">
            Mobile App
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-orange-600">
            Contact Us
          </li>
        </ul>

        <div className="flex items-center gap-4 md:gap-6">
          <FiSearch className="text-xl md:text-2xl cursor-pointer" />
          <Link to={"/cart"} className="relative">
            <FaCartArrowDown className="text-xl md:text-2xl cursor-pointer" />
            <span className="absolute -top-2.5 -right-2.5 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">{totalQty}</span>
          </Link>
          <button className=" px-2 md:px-4 py-2 border rounded-full hover:bg-orange-600 hover:text-white transition">
            Sign In
          </button>

          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdCancel /> : <RiMenuUnfold4Fill />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md py-5 px-6">
          <ul className="flex flex-col items-start gap-5 text-lg font-medium">
            <li className="cursor-pointer hover:text-orange-600">Home</li>
            <li className="cursor-pointer hover:text-orange-600">Menu</li>
            <li className="cursor-pointer hover:text-orange-600">Mobile App</li>
            <li className="cursor-pointer hover:text-orange-600">Contact Us</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
