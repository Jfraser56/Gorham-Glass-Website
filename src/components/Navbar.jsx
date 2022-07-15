import React from "react";
import logo from "../assets/png/transparent-logo.png";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <div className="h-10 w-full px-8 bg-cyan-700 flex justify-start items-center space-x-8 text-white font-light">
        <a
          className=" hover:underline underline-offset-1"
          href="tel:774-228-3381"
        >
          <BsTelephone size="1.1rem" className="inline" /> 774-228-3381
        </a>
        <a className="hover:underline underline-offset-1 " href="">
          <AiOutlineMail size="1.15rem" className="inline mr-1" />
          gorhamglass@gmail.com
        </a>
      </div>
      <div className="h-24 flex justify-between px-10 py-2 items-center bg-gray-50">
        <img className="h-full" src={logo} alt="" />
        <ul className="flex space-x-8">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
