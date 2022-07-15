import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/png/transparent-logo.png";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <div className="hidden md:flex h-10 w-full px-8 bg-sky-600  justify-start items-center space-x-8 text-white font-light">
        <a
          className=" hover:underline underline-offset-1"
          href="tel:774-228-3381"
        >
          <BsTelephone size="1.1rem" className="inline mr-1" />
          774-228-3381
        </a>
        <a
          className="hover:underline underline-offset-1 "
          href="mailto:gorhamglass@gmail.com"
        >
          <AiOutlineMail size="1.15rem" className="inline mr-1" />
          gorhamglass@gmail.com
        </a>
      </div>
      <div className="h-20 flex justify-center sm:justify-between px-10 py-2 items-center bg-gray-50">
        <Link to={"/"} className={"hidden sm:block h-full"}>
          <img className="h-full" src={logo} alt="" />
        </Link>

        <ul className="flex space-x-8">
          <li>
            <NavLink className="transition hover:text-sky-700" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="transition hover:text-sky-700" to={"/about"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="transition hover:text-sky-700" to={"/contact"}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
