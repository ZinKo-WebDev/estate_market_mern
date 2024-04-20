import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap items-center">
          <Link to="/">
            <span className="text-slate-500 text-xl">&#8364;</span>
            <span className="text-slate-700">STATE </span>
          </Link>
        </h1>
        <form className="bg-slate-100 p-3 rouded rounded-lg flex items-center">
          <input
            className="bg-transparent focus:outline-none w-28 sm:w-64"
            type="text"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-500 text-xl" />
        </form>
        <ul className="flex gap-4">
          <Link
            to="/"
            className="hidden sm:inline text-slate-700 hover:underline hover:font-semibold font-medium p-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hidden sm:inline text-slate-700 hover:underline hover:font-semibold font-medium p-1"
          >
            About
          </Link>
          <Link
            to="/sign-in"
            className=" text-slate-700 hover:underline hover:font-semibold font-medium p-1"
          >
            Sign in
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
