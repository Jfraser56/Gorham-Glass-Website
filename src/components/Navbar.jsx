import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <div className="hidden md:flex h-10 w-full px-8 bg-sky-700  justify-start items-center space-x-8 text-white font-light">
        <a
          className=" hover:underline underline-offset-1"
          href="tel:774-205-4539"
        >
          <BsTelephone size="1.1rem" className="inline mr-1" />
          774-205-4539
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
        <Link to={"/"} className={"hidden sm:block h-24"}>
          <img
            className="h-full"
            src="https://drive.google.com/uc?id=1L-mdoHZG14qI5r9AnTCBkMt1MbK5eLIp"
            alt=""
          />
        </Link>

        <ul className="flex space-x-8">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-sky-700 underline underline-offset-2"
                  : "transition hover:text-sky-700"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-sky-700 underline underline-offset-2"
                  : "transition hover:text-sky-700"
              }
              to={"/services/glass-repair"}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-sky-700 underline underline-offset-2"
                  : "transition hover:text-sky-700"
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
